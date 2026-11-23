# Объяснение как работает .env в проекте Poclain

### Вопрос:
> *Расшифруй детально, какая последовательность действий происходит при запуске теста `tests/homePage.spec.ts` (мне нужно разобраться с `.env`).*

---

## Архитектура и поток данных

```mermaid
flowchart TD
    A["Команда в терминале\n(npm run test:preprod / test:prod)"] --> B["playwright.config.ts"]
    B -->|импортирует envConfig| C["config/environment.ts"]
    C -->|сканирует process.argv| D{"Какое окружение?"}
    D -->|pre-prod| E["Загружает .env.preprod\n(process.loadEnvFile)"]
    D -->|prod / default| F["Загружает .env.prod\n(process.loadEnvFile)"]
    E --> G["Глобальный process.env\n(BASE_URL, AUTH_USER, etc.)"]
    F --> G
    G --> H["Экспорт объекта envConfig\n(baseURL, httpCredentials)"]
    H --> B
    B -->|передает baseURL и credentials| I["Playwright Browser Context"]
    I --> J["Выполнение tests/homePage.spec.ts"]
    J -->|page.goto('/')| K["Браузер открывает целевой стенд!"]
```

---

## Пошаговая хронология выполнения

### Шаг 1. Запуск команды в терминале
Вы вводите команду:
```powershell
npm run test:preprod
# что эквивалентно: npx playwright test tests/homePage.spec.ts --project=pre-prod
```
Node.js инициирует процесс Playwright и передает аргументы командной строки в глобальный массив `process.argv`:
- `--project=pre-prod`
- `tests/homePage.spec.ts`

---

### Шаг 2. Инициализация `playwright.config.ts`
Playwright считывает свой главный конфигурационный файл.
На строке 3 он встречает директиву:
```typescript
import { envConfig } from './config/environment';
```
Чтобы получить объект конфигурации, Node.js приостанавливает разбор `playwright.config.ts` и переходит к исполнению `config/environment.ts`.

---

### Шаг 3. Определение и чтение `.env` в `config/environment.ts`
В этом файле сосредоточена вся логика выбора и загрузки окружения:

1. **Определение целевого стенда:**
   Функция `resolveTargetEnv()` анализирует переданные аргументы:
   - Проверяет массив `process.argv` на наличие флагов `--project=pre-prod` или `--project=preprod`.
   - Если флаг найден, возвращает `'pre-prod'`. В противном случае возвращает значение по умолчанию — `'prod'`.

2. **Выбор конфигурационного файла:**
   ```typescript
   const envFileName = targetEnv === 'pre-prod' ? '.env.preprod' : '.env.prod';
   ```

3. **Загрузка переменных в память через нативный метод Node.js:**
   ```typescript
   process.loadEnvFile(envFilePath);
   ```
   Node.js физически открывает соответствующий файл (`.env.preprod` или `.env.prod`) и парсит строчки, записывая значения в системный словарь **`process.env`**:
   - `process.env.BASE_URL` = `"https://isoprod.poclain.com/"`
   - `process.env.AUTH_USER` = `"pocl1admin"`
   - `process.env.AUTH_PASSWORD` = `"43V8px2M5DnW"`
   - `process.env.ENV` = `"pre-prod"`
   - `process.env.IS_PROD` = `"false"`

4. **Формирование объекта `envConfig`:**
   Файл формирует и экспортирует централизованный объект настроек:
   - `envConfig.baseURL` ➔ возвращает значение `process.env.BASE_URL`.
   - `envConfig.httpCredentials` ➔ собирает объект для Basic Auth: `{ username, password }`.

---

### Шаг 4. Настройка проекта в `playwright.config.ts`
Управление возвращается в `playwright.config.ts`. Playwright конфигурирует профиль проекта `pre-prod`:
```typescript
{
  name: 'pre-prod',
  use: {
    ...devices['Desktop Chrome'],
    baseURL: envConfig.urls['pre-prod'],       // "https://isoprod.poclain.com/"
    httpCredentials: envConfig.httpCredentials // { username: 'pocl1admin', password: '...' }
  }
}
```

---

### Шаг 5. Запуск браузера и контекста
Playwright запускает экземпляр браузера (Chromium) с настройками выбранного проекта:
1. В контекст браузера прописывается **`httpCredentials`** — браузер готов автоматически отправлять заголовок `Authorization: Basic ...` при встрече с HTTP 401 на предпроде.
2. В контекст вшивается базовый адрес **`baseURL: 'https://isoprod.poclain.com/'`**.

---

### Шаг 6. Выполнение теста `tests/homePage.spec.ts`
1. Запускается хук подготовки:
   ```typescript
   test.beforeEach(async ({ page }) => {
       homePage = new HomePage(page);
       await homePage.goto();
   });
   ```
2. Внутри метода `homePage.goto()` (`pages/HomePage.ts`):
   ```typescript
   await this.page.goto('/');
   ```
   Поскольку передан относительный путь `'/'`, Playwright автоматически соединяет его с `baseURL` из шага 5:
   `https://isoprod.poclain.com/` + `'/'` = **`https://isoprod.poclain.com/`**.
3. Браузер переходит на стенд, успешно проходит Basic Auth и отображает сайт.
4. Тест приступает к проверке элементов слайдера.

---

## Ключевые выводы

| Аспект | Как реализовано |
| :--- | :--- |
| **Изоляция тестов от URL** | Тесты никогда не содержат хардкода адресов (`page.goto('/')`). |
| **Переключение стенда** | Происходит одной командой через флаг `--project=pre-prod` или `--project=prod`. |
| **Источники данных** | Раздельные файлы `.env.preprod` и `.env.prod` хранят независимые URL и учетные данные. |
| **Авторизация** | Basic Auth передается напрямую в сетевой контекст браузера через `httpCredentials`. |
