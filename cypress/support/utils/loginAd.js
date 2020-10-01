const puppeteer = require('puppeteer')

exports.loginAd = async function loginAd({email, senha}){
    const credentials = await puppeteer.launch({headless: false}).then(async browser =>{
        try {
            let page = await browser.newPage()
            page.setViewport({ width: 1280, height: 760 });
            await page.goto('https://hw1.opensrv.com.br')
            await page.waitFor(2000)
            await page.click('#header button')
            await page.waitFor(2000)
            await page.click('input[type="email"]')
            await page.type('input[type="email"]', email, {delay: 50})
            await page.click('input[type="submit"]')
            await page.waitFor(2000)
            await page.click('input[type="password"]')
            await page.type('input[type="password"]', senha, {delay: 50})
            await page.click('input[type="submit"]')
            await page.waitFor(2000)

            let localStorage1 = await page.evaluate(() => {
                let values = {};
                for (var i = 0, len = window.localStorage.length; i < len; ++i) {
                  if (
                    window.localStorage.key(i).startsWith("current") ||
                    window.localStorage.key(i).startsWith('{"authority":')
                  ) {
                    values[window.localStorage.key(i)] = window.localStorage.getItem(
                        window.localStorage.key(i)
                    );
                  }
                }
                return values;
            });
            browser.close();
            return localStorage1

        } catch (error){
            cy.log(error)
            browser.close()
            return "error"
        }
    })
    return credentials
}
