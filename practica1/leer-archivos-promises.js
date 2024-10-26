const fs = require('node:fs/promises');

console.log('leyendo el primer archivos')
fs.readFile('./archivo.txt', 'utf-8',)
.then(text => {
    console.log('primer texto:', text)
})

console.log("sumo algo mientras leo los textos---", 2+2)

console.log('leyendo el segundo archivos')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {
    console.log('segundo texto:',text)
})
    

