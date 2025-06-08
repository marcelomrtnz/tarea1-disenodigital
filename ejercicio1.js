//Agrupar elementos por una propiedad especifica

const datos = [
    { categoria: 'fruta', nombre: 'manzana' },
    { categoria: 'verdura', nombre: 'zanahoria' },
    { categoria: 'fruta', nombre: 'banana' },
    { categoria: 'verdura', nombre: 'lechuga' }
];

function agrupador(dataset, propiedad) {
    const resultadoAgrupacion = {}

    dataset.forEach( data => {
        const valorPropiedad = data[propiedad]
        if ( resultadoAgrupacion[valorPropiedad] ) resultadoAgrupacion[valorPropiedad].push(data)
        else  resultadoAgrupacion[valorPropiedad] = [data]
     })

    return resultadoAgrupacion
}

console.log(agrupador(datos, "categoria"))
/*
{
  fruta: [
    { categoria: 'fruta', nombre: 'manzana' },
    { categoria: 'fruta', nombre: 'banana' }
  ],
  verdura: [
    { categoria: 'verdura', nombre: 'zanahoria' },
    { categoria: 'verdura', nombre: 'lechuga' }
  ]
}
*/

console.log(agrupador(datos, "nombre"))
/*
{
  manzana: [ { categoria: 'fruta', nombre: 'manzana' } ],
  zanahoria: [ { categoria: 'verdura', nombre: 'zanahoria' } ],
  banana: [ { categoria: 'fruta', nombre: 'banana' } ],
  lechuga: [ { categoria: 'verdura', nombre: 'lechuga' } ]
}
*/