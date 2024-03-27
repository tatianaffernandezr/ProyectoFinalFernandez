function renderProductos() {
    const productos = obtenerProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-4 text-center">
            <a href="prducto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
                <img src="${producto.imagen}" alt="${producto.nombre}" height="244" />
                <p class="colorFuente Rajdhani">${producto.nombre}</p>
            </a>
        </div>`;
    }
    document.getElementById("productos").innerHTML = contenido;
}
renderProductos();

