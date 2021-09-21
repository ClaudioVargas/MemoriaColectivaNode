const fs = require('fs')



const crearArchivo = async (base) => {
    console.log("base", base)
    try {
        let salida = ''
        for (let i = 1; i <= base; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        console.log("salida", salida)
        //  CREAR ARCHIVO
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}`
    } catch (error) {
        throw error
    }



}

module.exports = {
    crearArchivo
}
