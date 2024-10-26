const fs = require('node:fs');
const stats = fs.statSync("./archivo.txt")

console.log('es un fichero? -->', stats.isFile())
console.log('es un diccionario? -->', stats.isDirectory())
console.log('es un es un enlace simbolico? -->', stats.isSymbolicLink())
console.log('tamaño del archivo/file -->', stats.size,'bytes')