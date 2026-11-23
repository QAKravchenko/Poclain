import { preProdData } from './environments/pre-prod.data';
import { prodData } from './environments/prod.data';
import { envConfig, type Environment } from '../config/environment';

/**
 * Выбор набора данных по переменной ENV (синтаксис из учебного примера):
 * const expectedData = process.env.ENV === 'pre-prod' ? preProdData : prodData;
 */
export const expectedData = process.env.ENV === 'pre-prod' ? preProdData : prodData;

/**
 * Получает тестовые данные для конкретного или активного окружения.
 * Поскольку контент для Pre-Prod и Prod различается, логика тестов остается одинаковой,
 * а проверочные данные загружаются в соответствии с окружением.
 */
export function getTestData(environment?: Environment | string) {
  const env = (environment || envConfig.env).toLowerCase();
  if (env === 'pre-prod') {
    return preProdData;
  }
  return prodData;
}

export { preProdData, prodData };
