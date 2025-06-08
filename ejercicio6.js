//funcion que reciba dos arreglos y devuelva un arreglo que contenga todos los elementos sin repetir


const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

function combinarListasSinRepetir(lista1, lista2) {
    const listasCombinadas = [...lista1, ...lista2]
    const setListasCombinadas = new Set(listasCombinadas)
    return [ ...setListasCombinadas ]
}

const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);
//[ 'manzana', 'pera', 'banana', 'uva', 'sandía' ]