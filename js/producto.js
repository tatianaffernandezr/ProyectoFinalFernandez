function renderProducto() {
    const producto = obtenerProductoLS();
    let contenido = `<div class="col-md-6 offset-md-3 text-center">
        <a href="prducto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
        <p class="colorFuente">${producto.nombre}</p>
        <p class="colorFuente">${producto.descripcion}</p>
        <p class="colorFuente">$ ${producto.precio}</p>
        </a>
        </div>`;
    document.getElementById("producto").innerHTML = contenido;
}
renderProducto();