# Отчет о тестировании обновления PHP 8.4 — `https://isoprod.poclain.com/`

**Дата:** 2026-11-16  
**Стенд:** `https://isoprod.poclain.com/` (Pre-Prod, Drupal 11.4.8, Installation profile: Minimal)  
**Версия PHP:** `8.4.27` (OPcode caching Enabled, Memory limit `128M`, Memcached `3.4.0`, MariaDB `10.11.15-MariaDB-deb12`, ImageMagick `6.9.11-60`)

---

## Итоговая сводка

| Категория | Всего | Passed | Failed |
| --- | :---: | :---: | :---: |
| Существующие автотесты Playwright (`pre-prod`) | 5 | 5 | 0 |
| Среда PHP 8.4, Status Report, модули и dblog | 4 | 2 | 2 |
| Публичный сайт (навигация, продукты, поиск, 404, языки) | 8 | 7 | 1 |
| Админ-панель и E2E CRUD (Nodes, Media, Webform, Taxonomy) | 7 | 7 | 0 |
| Безопасность и контроль доступа | 2 | 2 | 0 |
| **ИТОГО** | **26** | **23** | **3** |

> [!WARNING]
> Найдены **2 PHP-дефекта в `dblog`** (1 прямой дефект совместимости **PHP 8.4** `E_DEPRECATED` в `taxonomy_max_depth` и 1 `User warning` `OpenTelemetry` в `Fiber` при отправке почты из Webform), а также **1 дефект контента/файлов** (`404` для ряда старых изображений на pre-prod). Критических фатальных ошибок (`Fatal error`, `500`, падений рендеринга) не обнаружено.

---

## Чек-лист тест-кейсов

### 1. Автотесты репозитория (`npx playwright test --project=pre-prod`)
- [x] `[Passed]` **TC-01:** Отправка формы Contact Us с прикреплением PDF-файла (`B75124F.pdf`) — [contactForm.spec.ts](file:///c:/Automation/Projects/Smile/Poclain/tests/contactForm.spec.ts) (`passed`)
- [x] `[Passed]` **TC-02:** Hero Slider — переключение слайдов кнопками Next и Previous — [homePage.spec.ts](file:///c:/Automation/Projects/Smile/Poclain/tests/homePage.spec.ts) (`passed`)
- [x] `[Passed]` **TC-03:** Hero Slider — отображение картинки и текстового блока на каждом слайде — [homePage.spec.ts](file:///c:/Automation/Projects/Smile/Poclain/tests/homePage.spec.ts) (`passed`)
- [x] `[Passed]` **TC-04:** Hero Slider — кликабельность CTA-кнопки на каждом слайде — [homePage.spec.ts](file:///c:/Automation/Projects/Smile/Poclain/tests/homePage.spec.ts) (`passed`)
- [x] `[Passed]` **TC-05:** Hero Slider — кликабельность картинки на каждом слайде — [homePage.spec.ts](file:///c:/Automation/Projects/Smile/Poclain/tests/homePage.spec.ts) (`passed`)

### 2. Среда PHP 8.4, Status Report и журнал `dblog`
- [x] `[Passed]` **TC-06:** Проверка `/admin/reports/status` — подтвержден `PHP 8.4.27`, OPcode caching `Enabled`, `ImageMagick` (`gif, jfif, jpe, jpeg, jpg, png, webp`), `Memcached 3.4.0`, `Ultimate Cron`, `Trusted Host Settings`, `Database updates: Up to date`, `Reroute Email` активен (`gabrielle.carta@poclain.com`).
- [x] `[Passed]` **TC-07:** Проверка административных разделов конфигурации и структуры (`/admin/modules`, `/admin/config`, `/admin/config/system/mailsystem`, `/admin/config/development/reroute_email`, `/admin/config/search/search-api`, `/admin/config/search/path/patterns`, `/admin/config/media/image-styles`, `/admin/config/media/image-toolkit`, `/admin/config/regional/language`, `/admin/config/system/cron`, `/admin/content/feed`, `/admin/structure/feeds`, `/admin/structure/block`, `/admin/structure/menu`, `/admin/structure/views`, `/admin/structure/webform`, `/admin/people`, `/admin/people/permissions`) — все 20+ страниц возвращают `200 OK` без фатальных PHP ошибок.
- [ ] `[Failed]` **TC-08:** Проверка `dblog` на PHP 8.4 Deprecations — обнаружен **BUG-001**: при открытии форм словарей таксономии (`/admin/structure/taxonomy/manage/carreers`, `/overview`) модуль `taxonomy_max_depth` генерирует `Deprecated function: Implicitly marking parameter $max_depth as nullable is deprecated...` (события `85874`–`85877`).
- [ ] `[Failed]` **TC-09:** Проверка `dblog` при отправке почты через `poclain_mailer_cert` — обнаружен **BUG-002**: при отправке формы Contact Us фиксируется `User warning: Access to not initialized OpenTelemetry context in fiber...` в `FiberBoundContextStorage.php:84` (событие `85677`).

### 3. Публичный сайт (Функциональность, UI/UX, Консоль, Сеть)
- [x] `[Passed]` **TC-10:** Главная страница (`/`) — `200 OK`, 0 ошибок в консоли, 0 JS exceptions, 0 битых запросов.
- [x] `[Passed]` **TC-11:** Разделы продуктов (`/products`, `/products/hydraulic-motors` + 11 подсерий MK/MG/MHP/MS/ML/MF/MT/MI/MZ/CDM/MHD, `/products/hydraulic-pumps` + `axial-piston-hydraulic-pumps`, `/products/hydraulic-valves` + 2 подкатегории) — все `200 OK`, 0 ошибок в консоли и битых изображений.
- [x] `[Passed]` **TC-12:** Ключевые разделы (`/about-us`, `/network`, `/hevo`, `/electrification`, `/applications`, `/systems`, `/services-support`, `/resources`) — `200 OK`, без PHP-ошибок.
- [x] `[Passed]` **TC-13:** Пагинация Views (`/news?page=1`) — `200 OK`, пагинация работает без PHP-ошибок.
- [ ] `[Failed]` **TC-14:** Проверка изображений на `/news`, `/fr`, `/100-years` — обнаружен **BUG-003**: ряд `.webp` изображений возвращает `404` из-за отсутствия исходных файлов на стенде pre-prod (в консоли ошибки загрузки ресурсов `404`).
- [x] `[Passed]` **TC-15:** Мультиязычность (`en` `/` и `fr` `/fr`) — переключение и загрузка страниц `200 OK` без PHP-ошибок. *(Мелкое замечание по контенту: в `<title>` французской главной опечатка `Sécialiste` вместо `Spécialiste`).*
- [x] `[Passed]` **TC-16:** Поиск по сайту (`/search?keys=...`: `motor`, `pump`, пустой запрос, строка 200 символов) — `200 OK`, 0 ошибок в консоли и PHP.
- [x] `[Passed]` **TC-17:** Обработка несуществующего URL (`/nonexistent-page-php84-check-999`) — корректная кастомная страница `404` (`Page not found | Poclain`) без утечки stack trace.

### 4. Админ-панель и E2E CRUD (Create -> Read -> Update -> Delete & Cleanup)
- [x] `[Passed]` **TC-18:** Формы создания контента (`/node/add/*`) — проверены все 14 типов (`article`, `page`, `company`, `electrification`, `job_offers`, `landing_page`, `marketing`, `minisite_page`, `news`, `product_motors`, `product_pumps`, `product_valves`, `services_and_support`, `systems`), все возвращают `200 OK` и рендерят форму.
- [x] `[Passed]` **TC-19:** E2E CRUD `Basic page` (`/node/add/page`) — создана страница `QA PHP84 Page 1794826694465`, проверена в `/admin/content` и на публичном URL, обновлена на `/edit`, удалена (`/delete`), после удаления URL отдает `404`.
- [x] `[Passed]` **TC-20:** E2E CRUD `Media Image` (`/media/add/image`) + проверка генерации WebP-стиля под PHP 8.4 + ImageMagick — загружен `test-php84.png`, стиль `medium_crop_simple/.../test-php84_0.png.webp` сгенерирован и отдан с **`200 OK`**, `Content-Type: image/webp` (`120x120`); Media найден в `/admin/content/media`, отредактирован и удален.
- [x] `[Passed]` **TC-21:** E2E CRUD `News` (`/node/add/news`) с Media Library — создана новость `QA PHP84 News 1794826971514`, проверена по публичному URL и в `/admin/content`, обновлена на `/edit`, удалена (`/delete`), после удаления URL отдает `404`.
- [x] `[Passed]` **TC-22:** Негативная валидация Contact Us (`/contact-us`) — отправка пустой формы блокируется клиентской/серверной валидацией (`12` обязательных полей), пользователь остается на форме, ошибок 500 нет.
- [x] `[Passed]` **TC-23:** Webform Submissions & Cleanup — проверен список `/admin/structure/webform/manage/contact/results/submissions`, все `4` тестовые отправки `QA-PreProd` (`qa.staging@poclain.com`) удалены.
- [x] `[Passed]` **TC-24:** Очистка прежних тестовых данных — удалена оставшаяся с 12.11.2026 тестовая страница `QA Test Basic Page PHP84 1794490944306` (`/node/1244`), адрес возвращает `404`.

### 5. Безопасность и права доступа
- [x] `[Passed]` **TC-25:** Матрица доступа для анонимного пользователя — `/admin`, `/admin/reports/status`, `/admin/content`, `/node/add/page` возвращают `410`, `/user/1/edit` возвращает `404`. Доступ закрыт.
- [x] `[Passed]` **TC-26:** Безопасность и заголовки — отсутствие PHP stack trace в HTML при 404/валидации; присутствуют заголовки `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Content-Security-Policy`.

---

## Заведенные баг-репорты
1. [BUG-001-taxonomy-max-depth-php84.md](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-001-taxonomy-max-depth-php84.md) — **PHP 8.4 `Deprecated function` в `taxonomy_max_depth`** ([скриншот](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-001-taxonomy-max-depth-php84.png))
2. [BUG-002-opentelemetry-fiber-warning.md](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-002-opentelemetry-fiber-warning.md) — **PHP `User warning` OpenTelemetry context in Fiber при отправке писем** ([скриншот](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-002-opentelemetry-fiber-warning.png))
3. [BUG-003-missing-media-files-404.md](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-003-missing-media-files-404.md) — **Отсутствующие медиафайлы (`404`) на `/news`, `/fr`, `/100-years`** ([скриншот](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-003-news-broken-images-404.png))
