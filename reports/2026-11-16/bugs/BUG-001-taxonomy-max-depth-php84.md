# BUG-001: PHP 8.4 Deprecated — Implicitly nullable parameter `$max_depth` в модуле `taxonomy_max_depth`

- **Severity:** Medium
- **Priority:** Medium
- **Status:** Open
- **Environment:** `https://isoprod.poclain.com/` (Pre-Prod, Drupal 11.4.8, **PHP 8.4.27**, MariaDB 10.11.15)
- **Screenshot:** [BUG-001-taxonomy-max-depth-php84.png](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-001-taxonomy-max-depth-php84.png)

## Preconditions
1. Сайт обновлен до PHP 8.4.27.
2. Пользователь авторизован под администратором (`poclainadmin`).

## Steps to Reproduce
1. Перейти на страницу управления словарем таксономии `https://isoprod.poclain.com/admin/structure/taxonomy/manage/carreers` или `https://isoprod.poclain.com/admin/structure/taxonomy/manage/carreers/overview`.
2. Перейти в журнал Drupal `https://isoprod.poclain.com/admin/reports/dblog?type%5B%5D=php`.

## Actual Result
При каждом открытии форм таксономии (где срабатывает `taxonomy_max_depth_form_taxonomy_vocabulary_form_alter`) в `dblog` записываются 2 ошибки типа `php` (уровень `Debug` / `E_DEPRECATED`):
1. `Deprecated function: Drupal\taxonomy_max_depth\Taxonomy\VocabularySettingsWriterInterface::setMaxAncestorDepth(): Implicitly marking parameter $max_depth as nullable is deprecated, the explicit nullable type must be used instead in include() (line 576 of /var/www/poclain/vendor/composer/ClassLoader.php)`
2. `Deprecated function: Drupal\taxonomy_max_depth\Taxonomy\VocabularySettingsWriter::setMaxAncestorDepth(): Implicitly marking parameter $max_depth as nullable is deprecated, the explicit nullable type must be used instead in include() (line 576 of /var/www/poclain/vendor/composer/ClassLoader.php)`

(Подтверждено событиями dblog `/admin/reports/dblog/event/85874`, `85875`, `85876`, `85877`, а также `75856`).

## Expected Result
Отсутствие `E_DEPRECATED` предупреждений PHP 8.4 в журнале `dblog` — параметр `$max_depth` должен быть явно объявлен как nullable (`?int $max_depth = null`), либо модуль `taxonomy_max_depth` должен быть обновлен до версии с поддержкой PHP 8.4.

## Reproducibility
3 of 3 (воспроизводится при каждом открытии страниц управления/обзора словарей таксономии).
