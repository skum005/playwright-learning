import {expect, test} from '@playwright/test'

test.beforeEach('Open browser & website', async({page}) => {
    await page.goto('https://www.google.com')
})

test.describe.parallel('All search tests', () => {

    test('Basic search', async({page}) => {
        const searchBtn = page.locator('textarea[title="Search"]')
        await searchBtn.fill('Playwright')
        const title = await page.title()
        expect(title).toEqual('Google')
    })

    test('About link', async({page}) => {
        const aboutLink = page.locator('//a[text()="About"]')
        await aboutLink.click()
        const title = await page.title()
        expect(title).toEqual('About Google: Our products, technology and company information - About Google')
    })


})