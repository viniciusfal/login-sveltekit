import { expect, test } from '@playwright/test';

test.describe('Form Login', () => {
	test('should be able to login at email', async ({ page }) => {
		await page.goto('/');
		
		const email = 'johndoe@gmail.co'
		await page.fill('#email', email)
		
		const emailIn = await page.$eval('#email', (element: HTMLInputElement) => element.value) 
	
		expect(emailIn).toBe(email)
	});

	test('should be able to login at password', async ({page}) => {
		await page.goto('/')

		const password = '123456'

		await page.fill('#pass', password)

		const passwordIn = await page.$eval('#pass', (element: HTMLInputElement) =>  element.value )

		expect(passwordIn).toBe(password)
	})

	test('should not be able to login case email and password not be same user', async ({page}) => {
		const user = {
			email: 'johndoe@example.com',
      password: '123456'
		}
		await page.goto('/')

		await page.fill('#email', user.email)
		await page.fill('#pass', user.password)
		await page.click('#login-sucessful')

		await expect(page).toHaveURL('/perfil')
	})
})


