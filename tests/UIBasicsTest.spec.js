import {test} from '@playwright/test';

// test(string, testfunction)
test('First PLaywright test', async ({browser}) => {
    // playwright code goes here

    // chrome - plugins/cookies
    const context = await browser.newContext();
    
    
} )