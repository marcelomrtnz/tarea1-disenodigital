//Dado un arreglo de objetos con valores y pesos, calcula el promedio ponderado. Resultado esperado: 83
const notas = [
    { valor: 90, peso: 0.5 },
    { valor: 80, peso: 0.3 },
    { valor: 70, peso: 0.2 }
];

const promedioPonderado = notas.reduce(( acumulador, { valor, peso }) => acumulador + (valor * peso), 0)

console.log(promedioPonderado)
//83