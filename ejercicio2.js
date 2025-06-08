//Simular una llamada asincrona con obtenerUsuario(id) que retorne { id, nombre }. Devolver "Usuarios cargados: Juan y María"
const usuarios = [ "Maria", "Juan" ]

function obtenerUsuario( id ) {
    return new Promise( resolve => {
        setTimeout(() => resolve({ id, nombre: usuarios.pop()}), 500)
    })
} 


obtenerUsuario(1).then( primerUsuario => {
    obtenerUsuario(2).then( segundoUsuario => {
        console.log(`Usuarios cargados: ${primerUsuario.nombre} y ${segundoUsuario.nombre}`)
    })
})