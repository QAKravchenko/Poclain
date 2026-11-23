import { test, expect } from '@playwright/test';
import { getTestData } from '../test-data';

test('Contact form sending', async ({ page }, testInfo) => {
  test.slow();
  // Получаем тестовые данные для активного проекта/окружения
  const data = getTestData(testInfo.project.name).contactForm;

  await page.goto('/');
  const acceptCookies = page.getByRole('button', { name: 'Accept all cookies' });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.getByLabel('Subject').selectOption('36');
  await page.getByRole('textbox', { name: 'First name *' }).fill(data.firstName);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(data.lastName);
  await page.getByRole('textbox', { name: 'Company name *' }).fill(data.company);
  await page.getByRole('textbox', { name: 'Job title *' }).fill(data.jobTitle);
  await page.getByLabel('Department').selectOption(data.departmentId);
  await page.getByRole('textbox', { name: 'Address *' }).fill(data.address);
  await page.getByRole('textbox', { name: 'City *' }).fill(data.city);
  await page.getByRole('textbox', { name: 'Zip Code *' }).fill(data.zipCode);
  await page.getByLabel('Country').selectOption(data.country);
  await page.getByRole('textbox', { name: 'Email *' }).fill(data.email);
  await page.getByRole('textbox', { name: 'Phone', exact: true }).fill(data.phone);
  await page.getByRole('textbox', { name: 'Mobile phone *' }).fill(data.mobile);
  await page.locator('.DJ__inputLabels__processed.js-webform-type-textarea').click();
  await page.getByRole('textbox', { name: 'Message *' }).fill(data.message);
  await page.getByRole('button', { name: 'Choose files' }).setInputFiles('test-data/B75124F.pdf');
  await expect(page.getByRole('button', { name: 'Remove selected' })).toBeVisible({ timeout: 15000 });
  // Ожидание истечения антиспам-таймера Drupal Honeypot (сервер требует >25 секунд на заполнение формы)
  await page.waitForTimeout(25000);
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByText(data.successMessage)).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole('link', { name: 'Back to form' })).toBeVisible({ timeout: 15000 });
});
