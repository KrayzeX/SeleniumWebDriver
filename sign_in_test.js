const {By} = require('selenium-webdriver')
const { ignore, suite } = require('selenium-webdriver/testing')
require('chromedriver')

suite(function (env) {
    describe('Sign in test', function () {
        let driver

        before(async function () {
            driver = await env.builder()
                .forBrowser('chrome')
                .build()
        })

        it('Log into system', async function () {
            await driver.get('http://localhost:8080/litecart/admin/login.php?redirect_url=%2Flitecart%2Fadmin%2F')
            await driver.findElement(By.name('username')).sendKeys('testuser')
            await driver.findElement(By.name('password')).sendKeys('qwerty123456')
            await driver.findElement(By.name('login')).click()
        })

        after(() => driver.quit())
    })
})