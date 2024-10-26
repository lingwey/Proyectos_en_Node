const path = require('node:path')

//obtine el tipo de separador segun el sistema operativo
console.log(path.sep)

//crea ruta con path.join
const filePath = path.join('contenedor', 'carpeta', 'archivo.txt')
console.log(filePath)

//obtine el nombre del archivo exclullendo las carpetas contenedoras
const base = path.basename('contenedor/carpeta/archivo.txt')
console.log(base)

//obtine el nombre del archivos sin la extencion
const nombreArchivo = path.basename('contenedor/carpeta/archivo.txt', 'txt')
console.log(nombreArchivo)

//obtiene el tipo de extencion del archivo
const tipoExtencion = path.extname('contenedor/carpeta/archivo.txt')
console.log(tipoExtencion)
