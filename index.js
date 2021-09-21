const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

// console.clear()

//  console.log("process.argv",  process.argv)
//  const [,,base,  limite] = process.argv  

 console.log("argv",  argv.b)

 
 
 

// 
const base = 10

crearArchivo(base)
    .then( nombreARchivo => console.log(nombreARchivo))
    .catch( err => console.log(`Error: ${err}`))


