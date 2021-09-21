const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'descripcion de prueba'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Base debe ser un numero'
        }
        return true
    })
    .argv

module.exports = argv