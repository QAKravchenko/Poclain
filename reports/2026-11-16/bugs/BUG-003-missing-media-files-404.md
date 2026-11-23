# BUG-003: Отсутствующие изображения (`404 Not Found`) на страницах `/news`, `/fr` и `/100-years`

- **Severity:** Minor (Environment / Media sync issue)
- **Priority:** Low
- **Status:** Open
- **Environment:** `https://isoprod.poclain.com/` (Pre-Prod, Drupal 11.4.8, PHP 8.4.27)
- **Screenshot:** [BUG-003-news-broken-images-404.png](file:///c:/Automation/Projects/Smile/Poclain/reports/2026-11-16/bugs/BUG-003-news-broken-images-404.png)

## Preconditions
1. Пользователь (анонимный) заходит на публичный стенд `https://isoprod.poclain.com/`.

## Steps to Reproduce
1. Открыть `https://isoprod.poclain.com/news`, `https://isoprod.poclain.com/fr` или `https://isoprod.poclain.com/100-years`.
2. Проверить вкладку Network / Console в DevTools и загрузку элементов `<img>`.

## Actual Result
Часть изображений `.webp` возвращает `HTTP 404`:
- На `/news`:
  - `/sites/default/files/styles/last_news_image/public/2026-07/Poclain%20Emsiso%20and%20Moteg%20at%20IVT%20Expo.jpg.webp?itok=wcaPBAye` (исходный файл `/sites/default/files/2026-07/Poclain%20Emsiso%20and%20Moteg%20at%20IVT%20Expo.jpg` также возвращает `404`)
  - `/sites/default/files/styles/last_news_image/public/2026-04/test-enr-ss-webp.webp?itok=U2rI5ykP`
  - `/sites/default/files/styles/last_news_image/public/2024-10/139A7347.jpg.webp?itok=KCUwHoqt`
  - `/sites/default/files/styles/last_news_image/public/2024-10/banniere-shredder-1440x592.jpg.webp?itok=T0soFJT3`
- На `/fr`:
  - `/sites/default/files/styles/homepage_slider_image/public/2026-06/rapport-rse-2025-1440x500-en.webp?itok=Dwpeytza`
  - `/sites/default/files/styles/last_news_image/public/2024-10/139A7347.jpg.webp?itok=KCUwHoqt`
  - `/sites/default/files/styles/homepage_slider_image/public/2025-02/Bauma-2025.jpg.webp?itok=q-8RTdEY`
- На `/100-years`:
  - `/sites/default/files/styles/last_news_image/public/2026-04/Tom%20Lovell%20Tutt%27Art%40%20%287%29.jpg.webp?itok=poo0TBzR`

*Примечание:* Проверка загрузки нового изображения через `/media/add/image` подтвердила, что сама генерация стилей `.webp` через ImageMagick на PHP 8.4 работает штатно (`200 OK`, `image/webp`). Проблема вызвана отсутствием старых исходных файлов на pre-prod стенде.

## Expected Result
Все изображения на публичных страницах загружаются со статусом `200 OK` без битых иконок.

## Reproducibility
3 of 3.
