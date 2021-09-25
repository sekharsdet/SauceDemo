import getConfigByEnv from "./getConfigByEnv"


const browserfy = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')

export default (on: any, config: Cypress.PluginConfigOptions) => {
    const options = {
        ...browserfy.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
    }

    on('file:preprocessor', cucumber(options))

    on('before:browser:launch', (browser: any = {}, launchOptions: any) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            launchOptions.args.push('--start-maximized')
            return launchOptions
        }
        if (browser.name === 'electron') {
            launchOptions.preferences.maximized = true
            return launchOptions
        }
    })
   
    return getConfigByEnv(config)

}



