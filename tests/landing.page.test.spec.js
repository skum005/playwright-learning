import {test} from '@playwright/test'
import { PageObjectManager } from './pages/pagemanager'

test.beforeEach('Launch website', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Interact with landing page elements', async({page}) => {
    const pm = new PageObjectManager(page)
    await pm.getLandingPage().enterName('Rishi')
})