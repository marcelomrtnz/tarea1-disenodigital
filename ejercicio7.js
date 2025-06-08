//una función que reciba un arreglo de palabras y retorne un objeto donde las claves sean las palabras y los valores la cantidad de veces que aparecen

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

function contarPalabras(listaPalabras) {
    const conteoPalabras = {}

    listaPalabras.forEach( palabra => conteoPalabras[palabra] = conteoPalabras[palabra]? conteoPalabras[palabra] + 1 : 1)

    return conteoPalabras
}

const resultado = contarPalabras(palabras);
console.log(resultado);
//{ hola: 3, adiós: 1, gracias: 2 }
