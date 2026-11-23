# BUG-002: PHP User warning — `Access to not initialized OpenTelemetry context in fiber` при отправке формы Contact Us

- **Severity:** Medium
- **Priority:** Medium
- **Status:** Open
- **Environment:** `https://isoprod.poclain.com/` (Pre-Prod, Drupal 11.4.8, **PHP 8.4.27**, MariaDB 10.11.15)
- **Screenshot:** [BUG-002-opentelemetry-fiber-warning.png](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-002-opentelemetry-fiber-warning.png)

## Preconditions
1. Открыта публичная страница `https://isoprod.poclain.com/contact-us`.
2. Включен транспорт отправки писем через Microsoft Graph (`poclain_mailer_cert` -> `MicrosoftGraphApiTransport` -> `microsoft/kiota-http-guzzle` -> `open-telemetry/context`).

## Steps to Reproduce
1. Перейти на `https://isoprod.poclain.com/contact-us`.
2. Заполнить все обязательные поля, прикрепить файл (`B75124F.pdf`), выждать 25 секунд (антиспам Honeypot) и нажать `Send message`.
3. Авторизоваться как администратор и проверить `https://isoprod.poclain.com/admin/reports/dblog?type%5B%5D=php`.

## Actual Result
Письмо перехватывается модулем `reroute_email` и форма отображает сообщение об успешной отправке, но в журнале `dblog` при каждой отправке фиксируется `User warning` (событие `/admin/reports/dblog/event/85677`):
`User warning: Access to not initialized OpenTelemetry context in fiber (id: 18715), automatic forking not supported, must attach initial fiber context manually in OpenTelemetry\Context\FiberBoundContextStorage::triggerNotInitializedFiberContextWarning() (line 84 of /var/www/poclain/vendor/open-telemetry/context/FiberBoundContextStorage.php)`

Стек вызова показывает конфликт между `Drupal\Core\Render\Renderer::executeInRenderContext()` (выполняющимся внутри `Fiber`) и `OpenTelemetry\API\Trace\Span->activate()` при обращении `MicrosoftGraphApiTransport::doSend()`.

## Expected Result
Отправка письма из `ContactUsEmailWebformHandler` выполняется без PHP `User warning` в логах `dblog`.

## Reproducibility
3 of 3 (воспроизводится при каждой отправке формы Contact Us, зафиксировано 9 однотипных записей в `dblog`).
