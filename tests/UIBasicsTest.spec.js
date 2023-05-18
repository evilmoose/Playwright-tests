import {test} from '@playwright/test';

// test(string, testfunction) 
// This test os for reference
test('First PLaywright test', async ({browser}) => {
    // playwright code goes here

    // chrome - plugins/cookies
    const context = await browser.newContext();

    const page = await context.newPage();
    
    await page.goto('http://rahulshettyacademy.com/loginpagePractise/');
})

test('Page Playwright test', async ({page}) => {
    
    await page.goto('http://rahulshettyacademy.com/loginpagePractise/');
    // continue with automation

} )