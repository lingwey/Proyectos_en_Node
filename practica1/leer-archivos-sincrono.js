const fs = require('node:fs');

console.log('leyendo el primer archivos')
const texto = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(texto)

console.log('leyendo el segundo archivos')
const texto2 = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log(texto2)