function renderProducto() {
    const producto = obtenerProductoLS();
    let contenido = `<div class="col-md-6 offset-md-3 text-center"
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
        <p class="colorFuente" Rajdhani>${producto.nombre}</p>
        <p class="colorFuente" Rajdhani>${producto.descripcion}</p>
        <p class="colorFuente" Rajdhani>$${producto.precio}</p>
        </a>
        </div>`;
    document.getElementById("producto").innerHTML = contenido;
}
renderProductos();