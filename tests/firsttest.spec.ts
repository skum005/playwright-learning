import {test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    //await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.goto('https://www.google.com')
})

test('Sample test', async ({page})=> {
    await page.locator('button#W0wltc').click()
    await page.getByText("I'm Feeling Lucky").click()
})