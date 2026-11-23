/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
import { envConfig } from './config/environment';

/**
 * Конфигурация Playwright для окружений Pre-Prod и Prod.
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Игнорируем detailed-копии тестов при общем прогоне */
  testIgnore: ['**/detailed/**'],
  /* Запуск тестов в файлах параллельно */
  fullyParallel: true,
  /* Остановка сборки на CI, если случайно оставлен test.only в коде */
  forbidOnly: !!process.env.CI,
  /* Количество повторов неудачных тестов на CI */
  retries: process.env.CI ? 2 : 0,
  /* Количество параллельных воркеров на CI */
  workers: process.env.CI ? 1 : undefined,
  /* Формат отчета о прохождении тестов */
  reporter: 'html',
  /* Общие настройки для всех проектов ниже */
  use: {
    /* Базовый URL по умолчанию из текущей конфигурации */
    baseURL: envConfig.baseURL,

    /* Игнорировать ошибки SSL сертификатов */
    ignoreHTTPSErrors: true,

    /* Сбор трассировки при первом повторе упавшего теста */
    trace: 'on-first-retry',

    /* Запуск тестов в разрешении Full HD */
    viewport: { width: 1920, height: 1080 },

    /* Запуск тестов с видимым окном браузера на локальной машине (на CI в фоне) */
    headless: !!process.env.CI,

    /* Аргументы запуска браузера на полный экран */
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  /* Проекты для двух окружений (Pre-Prod и Prod) и тренировочной зоны */
  projects: [
    {
      name: 'pre-prod',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: envConfig.urls['pre-prod'],
        httpCredentials: envConfig.httpCredentials,
      },
      // Исключаем тесты, предназначенные только для Prod (через тег @prod)
      grepInvert: /@prod\b/,
      // Исключаем detailed-копии и тренировочные тесты practice
      testIgnore: ['**/detailed/**', '**/practice/**'],
    },
    {
      name: 'prod',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: envConfig.urls.prod,
      },
      // Исключаем тесты, предназначенные только для Pre-Prod (через тег @pre-prod)
      grepInvert: /@pre-prod\b|@preprod\b/,
      // Исключаем detailed-копии и тренировочные тесты practice
      testIgnore: ['**/detailed/**', '**/practice/**'],
    },
    {
      name: 'practice',
      testDir: './tests/practice',
      testIgnore: ['**/detailed/**'],
      use: {
        ...devices['Desktop Chrome'],
        baseURL: envConfig.baseURL,
      },
    },
  ],
});
