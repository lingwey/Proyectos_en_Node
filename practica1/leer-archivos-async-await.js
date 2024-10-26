import readFile from 'node:fs/promises';

async function init (){
    console.log('leyendo el primer archivos')
    const text1 = await readFile('./archivo.txt', 'utf-8',)
    console.log('primer texto:', text1)

    console.log("sumo algo mientras leo los textos---", 2+2)

    console.log('leyendo el segundo archivos')
    const text2 = await readFile('./segundo.txt', 'utf-8archivo2.txt', 'utf-8')
    console.log('segundo texto:',text2)
}
    
init()
