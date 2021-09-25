
const path = require('path')


export default (config: Cypress.PluginConfigOptions) => {
    const file = config.env.fileConfig || 'qa'
    const pathToConfigFile = path.resolve(
        config.projectRoot,
        'config',
        `${file}.json`,
    )
    return require(pathToConfigFile)
}