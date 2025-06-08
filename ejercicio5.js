//escriba una función que reciba un arreglo de objetos y elimine duplicados basándose en una propiedad específica

const elementos = [
    { id: 1, nombre: 'A' },
    { id: 2, nombre: 'B' },
    { id: 1, nombre: 'A' }
];

function eliminarDuplicados(dataset, propiedad) {
    const datasetSinDuplicados = []

    dataset.forEach(entrada => {
        if ( datasetSinDuplicados.findIndex( data => data[propiedad] === entrada[propiedad] ) > -1) return;
        datasetSinDuplicados.push(entrada)
    })

    return datasetSinDuplicados
}

const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);