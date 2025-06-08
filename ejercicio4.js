//Funcion que reciba objeto persona y retorne copia con nuevo nombre y ++edad 
const persona = { nombre: 'Luis', edad: 30 }

function modificarPersona(datosPersona, nuevoNombre) {
    return { nombre: nuevoNombre, edad: ++datosPersona.edad }
}

const nuevaPersona = modificarPersona(persona, 'Carlos')
console.log(nuevaPersona)
//{ nombre: 'Carlos', edad: 31 }