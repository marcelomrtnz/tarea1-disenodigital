const edades = [19, 25, 32, 17];

function verificarMayoresDeEdad(edades) {
    return edades.reduce((acumulador, edad) => edad >= 18 && acumulador, true)
}

const resultado = verificarMayoresDeEdad(edades);
console.log(resultado);
//false