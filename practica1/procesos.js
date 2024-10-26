//argumentos de entrada
//console.log(process.argv)

//muestra el current working directory
console.log(process.cwd())

//control de eventos de procesos
process.on('exit',()=>{
    //limpiar procesos
})
//platform
console.log(process.env.VAR)

// controla el proceso de salida
//process.exit()
