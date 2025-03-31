import {test} from '@playwright/test'

test.beforeEach('Open browser and launch website', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Take screenshot of a page', async({page}) => {
    const screeshotPath = 'screenshots/' + test.info().title.replaceAll(' ', '-') + 'homepage' + Date.now() + '.png'
    await page.screenshot({path: screeshotPath})
})

test('Take screenshot of element', async({page}) => {
    const screeshotPath = 'screenshots/' + test.info().title.replaceAll(' ', '-') + 'homepage' + Date.now() + '.png'
    const element = page.locator('table[name="courses"]')
    await element.screenshot({path: screeshotPath})
})

test('Save screenshot as binary', async({page}) => {
    const binaryData = await page.screenshot()
})