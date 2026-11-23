import fs from 'fs';
import path from 'path';

export type Environment = 'pre-prod' | 'prod';

/**
 * Определение целевого окружения:
 * 1. Переменная окружения process.env.ENV или process.env.TEST_ENV
 * 2. Флаг проекта в CLI аргументах Playwright (например, --project=pre-prod)
 * 3. По умолчанию используется 'prod'
 */
function resolveTargetEnv(): Environment {
  const envVar = (process.env.ENV || process.env.TEST_ENV || '').toLowerCase();
  if (envVar === 'pre-prod' || envVar === 'preprod') return 'pre-prod';
  if (envVar === 'prod') return 'prod';

  const isPreProdArg = process.argv.some(
    arg => arg.toLowerCase().includes('project=pre-prod') || arg.toLowerCase().includes('project=preprod')
  );
  if (isPreProdArg) return 'pre-prod';

  return 'prod';
}

const targetEnv = resolveTargetEnv();

// Загрузка соответствующего конфигурационного файла
const envFileName = targetEnv === 'pre-prod' ? '.env.preprod' : '.env.prod';
const envFilePath = path.resolve(__dirname, '..', envFileName);
const fallbackPath = path.resolve(__dirname, '../.env');

if (fs.existsSync(envFilePath)) {
  process.loadEnvFile(envFilePath);
} else if (fs.existsSync(fallbackPath)) {
  process.loadEnvFile(fallbackPath);
}

// Гарантируем установку process.env.ENV
if (!process.env.ENV) {
  process.env.ENV = targetEnv;
}

/**
 * Централизованный объект конфигурации окружения
 */
export const envConfig = {
  // Название активного окружения
  env: targetEnv,

  // URL для каждого окружения
  urls: {
    'pre-prod': targetEnv === 'pre-prod' && process.env.BASE_URL
      ? process.env.BASE_URL
      : 'https://isoprod.poclain.com/',
    prod: targetEnv === 'prod' && process.env.BASE_URL
      ? process.env.BASE_URL
      : 'https://poclain.com',
  },

  // Базовый URL для активного окружения
  get baseURL(): string {
    return process.env.BASE_URL || this.urls[this.env];
  },

  // Учетные данные для HTTP Basic Authentication (для закрытого pre-prod контура)
  get httpCredentials(): { username: string; password: string } | undefined {
    const username = process.env.AUTH_USER;
    const password = process.env.AUTH_PASSWORD;
    if (username && password) {
      return { username, password };
    }
    return undefined;
  },
};
