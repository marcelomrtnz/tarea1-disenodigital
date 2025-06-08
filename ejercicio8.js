const productos = [
    { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
    { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
    { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];

function filtrarDisponibles( productos, categoria ) {
    return productos.filter( producto => producto.stock && producto.categoria === categoria )
}

const resultado = filtrarDisponibles(productos, 'ropa');
console.log(resultado);

//[{ nombre: 'Camisa', categoria: 'ropa', stock: 10}]