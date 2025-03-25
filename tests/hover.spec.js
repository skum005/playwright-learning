import {test, expect} from '@playwright/test'

test.beforeEach('Open browser & launch website', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Hover', async({page}) => {
    const elementToHover = page.locator('button#mousehover')
    await page.pause()
    await elementToHover.scrollIntoViewIfNeeded()
    await elementToHover.hover()
    const topLink = page.locator('a[href*="top"]')
    topLink.click()
})