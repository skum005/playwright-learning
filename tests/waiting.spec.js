import {test, expect} from '@playwright/test'

test.beforeEach('Open browser and load website', async({page})=> {
    await page.goto('http://uitestingplayground.com/ajax')
})

// playwright waits for default wait time of 30 seconds before performing certain actions. 
// Please note that not all actions are considered to be waited by playwright. 
// refer this article about playwright auto checks here - https://playwright.dev/docs/actionability
test('Click on an element that loads data after 15 seconds and extract text', async({page}) => {
    const ajaxButton = page.locator('#ajaxButton')
    await ajaxButton.click()
    const text = await page.locator('.bg-success').textContent()
    expect(text).toEqual('Data loaded with AJAX get request.')
})

// For extracting text from list of elements auto waiting is not applied. Hence we need to explicitly wait 
test('Extract text from list of elements', async({page}) => {
    const ajaxButton = page.locator('#ajaxButton')
    await ajaxButton.click()
    const outputElement = page.locator('.bg-success')
    await outputElement.waitFor({state: 'attached'})
    const text = await outputElement.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

// default wait time for locator assertions is 5 seconds 
test('Example of locator assertion timeouts - this test fails due to less wait time', async({page})=> {
    const ajaxButton = page.locator('#ajaxButton')
    await ajaxButton.click()
    const text = await page.locator('.bg-success')
    await expect(text).toHaveText('Data loaded with AJAX get request.')
})

// override assertion timeout
test('Override assertion timeout', async({page})=> {
    await page.locator('#ajaxButton').click()
    const textElement = page.locator('.bg-success')
    await expect(textElement).toHaveText('Data loaded with AJAX get request.', {timeout : 20000})
})

// different waiting mechanisms
test('Wait for locator/element', async({page})=>{
    await page.locator('#ajaxButton').click()
    const locator = '.bg-success'
    await page.waitForSelector(locator, {timeout : 20000})
    const text = await page.locator(locator).textContent()
    expect(text).toEqual('Data loaded with AJAX get request.')
})

test('Wait for api response', async({page})=> {
    await page.locator('#ajaxButton').click()
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata', {timeout : 20000})
    const text = await page.locator('.bg-success').textContent()
    expect(text).toEqual('Data loaded with AJAX get request.')
})

// not recommended
test.only('Wait for all network requests to complete', async({page})=> {
    await page.locator('#ajaxButton').click()
    await page.waitForLoadState('networkidle')
    const text = await page.locator('.bg-success').textContent()
    expect(text).toEqual('Data loaded with AJAX get request.')
})