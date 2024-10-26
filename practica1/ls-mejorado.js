const fs = require('node:fs/promises');
const path = require('node:path');

const carpeta = process.argv[2] ?? "."

async function ls (carpeta) {
    let archivos
    try{
       archivos = await fs.readdir(carpeta)
    }catch{
        console.error(`no se puedo leer la carpeta ${carpeta}`)
        process.exit(1)
    }

 const archivosPromesas = archivos.map(async archivo =>{
    const archivoPath = path.join(carpeta, archivo)
    let stats

    try{
        stats = await fs.stat(archivoPath)
    } catch{
        console.error(`nno se pudo leer el archivo: ${archivoPath}`)
        process.exit(1)
    }
    const esCarpeta = stats.isDirectory()
    const tipoArchivo = esCarpeta ? 'C-':'A-'
    const pesoArchivo = stats.size.toString()
    const archivoModificado = stats.mtime.toLocaleString()

    return (`${tipoArchivo} ${archivo.padEnd(20)} ${pesoArchivo.padStart(20)} ${archivoModificado}`)
 })

 const archivosInfo = await Promise.all(archivosPromesas)

 archivosInfo.forEach(archivoInfo => {
    console.log(archivoInfo)
 })

}

ls(carpeta)