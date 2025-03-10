import {test, expect} from '@playwright/test'

test.beforeEach('Open browser and launch website - set testtimeout for a spec file', async({page}, testInfo) => {
    // increase test timeout by 2 seconds for this test suite alone
    testInfo.setTimeout(testInfo.timeout + 2000)
    await page.goto('http://uitestingplayground.com/ajax')
})

test('override test timeout here', async({page}) => {
    // overriding test timeout
    test.setTimeout(20000)
    await page.locator('#ajaxButton').click()
    const text = await page.locator('.bg-success').textContent()
    expect(text).toEqual('Data loaded with AJAX get request.')
})

test('Override action timeout here - intentional fail', async({page}) => {
    await page.locator('#ajaxButton').click()
    const text = await page.locator('.bg-success').textContent({timeout: 10000})
    expect(text).toEqual('Data loaded with AJAX get request.')
})

test('Override assertion timeout here', async({page}) => {
    await page.locator('#ajaxButton').click()
    const textElement = page.locator('.bg-success')
    await expect(textElement).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test('Triple test timeout using test.slow()', async({page}) => {
    test.slow()
})