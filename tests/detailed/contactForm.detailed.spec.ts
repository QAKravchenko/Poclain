// 1. Импортируем из библиотеки Playwright тестовые функции test и expect
import { test, expect } from '@playwright/test';

// 2. Импортируем хелпер getTestData для динамического получения тестовых данных в зависимости от окружения
import { getTestData } from '../../test-data';

// 3. Объявляем асинхронный тест для отправки контактной формы; получаем фикстуры { page } и { testInfo }
test('Contact form sending', async ({ page }, testInfo) => {

  // 4. Извлекаем набор тестовых данных для контактной формы согласно активному проекту (testInfo.project.name)
  const data = getTestData(testInfo.project.name).contactForm;

  // 5. Переходим на главную страницу (базовый URL берется автоматически из playwright.config.ts)
  await page.goto('/');

  // 6. Находим кнопку принятия всех cookie по роли 'button' и её названию 'Accept all cookies', затем кликаем по ней
  await page.getByRole('button', { name: 'Accept all cookies' }).click();

  // 7. Находим ссылку на страницу контактов по роли 'link' и точному совпадению текста 'Contact', затем нажимаем её
  await page.getByRole('link', { name: 'Contact', exact: true }).click();

  // 8. Находим выпадающий список темы обращения по метке 'Subject' и выбираем опцию со значением '36'
  await page.getByLabel('Subject').selectOption('36');

  // 9. Находим поле ввода имени по роли 'textbox' и подписи 'First name *' и вводим значение из тестовых данных
  await page.getByRole('textbox', { name: 'First name *' }).fill(data.firstName);

  // 10. Находим поле ввода фамилии по роли 'textbox' и подписи 'Last name *' и вводим значение из тестовых данных
  await page.getByRole('textbox', { name: 'Last name *' }).fill(data.lastName);

  // 11. Находим поле ввода названия компании по роли 'textbox' и подписи 'Company name *' и вводим название
  await page.getByRole('textbox', { name: 'Company name *' }).fill(data.company);

  // 12. Находим поле ввода должности по роли 'textbox' и подписи 'Job title *' и заполняем его
  await page.getByRole('textbox', { name: 'Job title *' }).fill(data.jobTitle);

  // 13. Находим выпадающий список департамента по метке 'Department' и выбираем переданный ID департамента
  await page.getByLabel('Department').selectOption(data.departmentId);

  // 14. Находим текстовое поле адреса по роли 'textbox' и подписи 'Address *' и вводим адрес
  await page.getByRole('textbox', { name: 'Address *' }).fill(data.address);

  // 15. Находим текстовое поле города по роли 'textbox' и подписи 'City *' и вводим город
  await page.getByRole('textbox', { name: 'City *' }).fill(data.city);

  // 16. Находим текстовое поле почтового индекса по роли 'textbox' и подписи 'Zip Code *' и вводим индекс
  await page.getByRole('textbox', { name: 'Zip Code *' }).fill(data.zipCode);

  // 17. Находим выпадающий список страны по метке 'Country' и выбираем страну (например, 'Ukraine')
  await page.getByLabel('Country').selectOption(data.country);

  // 18. Находим текстовое поле email по роли 'textbox' и подписи 'Email *' и вводим email адрес
  await page.getByRole('textbox', { name: 'Email *' }).fill(data.email);

  // 19. Находим поле ввода городского телефона по роли 'textbox' и точному имени 'Phone' и заполняем номер
  await page.getByRole('textbox', { name: 'Phone', exact: true }).fill(data.phone);

  // 20. Находим текстовое поле мобильного телефона по роли 'textbox' и подписи 'Mobile phone *' и вводим мобильный номер
  await page.getByRole('textbox', { name: 'Mobile phone *' }).fill(data.mobile);

  // 21. Находим блок текстовой области сообщения по CSS классу и кликаем для активации поля ввода
  await page.locator('.DJ__inputLabels__processed.js-webform-type-textarea').click();

  // 22. Находим само поле ввода текста сообщения по роли 'textbox' и подписи 'Message *' и вводим текст
  await page.getByRole('textbox', { name: 'Message *' }).fill(data.message);

  // 23. Находим кнопку/элемент загрузки файла по роли 'button' и названию 'Choose files' и прикрепляем PDF-документ
  await page.getByRole('button', { name: 'Choose files' }).setInputFiles('test-data/B75124F.pdf');

  // 24. Находим кнопку отправки формы по роли 'button' и тексту 'Send message', затем нажимаем её
  await page.getByRole('button', { name: 'Send message' }).click();

  // 25. Проверяем утверждение: на странице отображается текст об успешной отправке сообщения (Your message has been sent.)
  await expect(page.getByText(data.successMessage)).toBeVisible();

  // 26. Проверяем утверждение: на странице видна ссылка для возврата к форме 'Back to form'
  await expect(page.getByRole('link', { name: 'Back to form' })).toBeVisible();
});
