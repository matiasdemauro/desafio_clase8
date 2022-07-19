console.log('Lógica');

nombre_vendedor = prompt('Plantilla STOCK para vendedores.' + "\n"  + 'Ingrese nombre.')
ingreso = new Date()
alert('Vendedor:' + '  ' + nombre_vendedor + "\n" + 'Fecha de ingreso:' +' ' + ingreso.toLocaleString())
const tituloo = document.getElementById('title');
tituloo.innerHTML = `
<h1 class='d-flex justify-content-center'>STOCK DE PRODUCTOS</h1>
`


//productos[0].nombre='hola'  //puedeo cambiar una propiedad del elemento
const contenedorProductos = document.getElementById('contenedorProductos');
//una vez capturado el div de id 'contenedorProductos' voy a modificar ese elemento a traves del DOM utilizando innerHTML:
contenedorProductos.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
`
//pinto mis cards con todos los elementos del array objeto.
function mostrarProducto(arrayProductos){
    contenedorProductos.innerHTML=''
    arrayProductos.forEach(element => {
    contenedorProductos.innerHTML+=`
    <div class="card" style="width: 18rem;">
    <img src="${element.img}" class="card-img-top" alt="...">
    <div class="card-body text-center">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">Categoría: ${element.categoria}</p>
        <a href="#" class="btn btn-primary">Stock disponible: ${element.stock}</a>
    </div>
</div>
`  
    });
};
mostrarProducto(productos);
//filtro el array producto y guardo los elementos con categoría mesas en un array de nombre 'grupo_mesas'
console.log('Categoría: MESAS');
let grupo_mesas = productos.filter(e => e.categoria === 'mesas');
console.log(grupo_mesas);
//utilizo el metodo find para buscar el producto cuyo id:2
let encontrado = [];
console.log('busco el elemento de id:2');
encontrado.push( productos.find(e => e.id === 2));
console.log(encontrado);
//tipeando en console -> console.log(encontrado) se mostrara el elemento del array productos que cumple con la condicion planteada dentro de productos.find()
//Tipeando la función mostrarProducto(encontrado) con el array de 1 elemento nos mostrará solo esa card, debido a que en la funcion tengo el código de card.

