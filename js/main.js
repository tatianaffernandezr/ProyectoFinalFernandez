(async () => {
      const { value: email } = await Swal.fire({
      title: "Suscribite a nuestro Newsletter",
      input: "email",
      inputLabel: "Ingresa tu email",
      inputPlaceholder: "Te suscribiste exitosamente!",
    });
    if (email) {
      Swal.fire(`Entered email: ${email}`);
    }
})()

const productos = [
    {id:1, nombre: "Reiki Usui", Duracion:1, precio:6500, categoria:"distancia"},
    {id:2, nombre: "Karmic Reiki", Duracion:1, precio:7800, categoria: "distancia"},
    {id:3, nombre: "Barras de Acces", Duracion:40, precio:11000, categoria: "presencial"},
    {id:4, nombre: "Gemoterapia", Duracion:1, precio:3500, categoria: "presencial"},
    {id:5, nombre: "Meditacion", Duracion:2, precio:4900, categoria: "distancia"},
    {id:6, nombre: "Registros Akashicos", Duracion:1, precio:12000, categoria: "distancia"},
]

const guardarCarritoLS = (productos) => {

}
const obtenerCarritoLS = (productos) => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("categoria")) || "";
}
const cantidadTotalProductos = () => {
    const carrito = obtenerCarritoLS();

    return carrito.length;
}

const renderTotalCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantidadTotalProductos();
}

const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}
const verProductosPorCategoria = (id) => {
    localStorage.setItem("categoria", JSON.stringify(id));
}
const obtenerProductosPorCategoria = () => {
    const productos = obtenerProductosLS();
    const categoria = obtenerIdPorCategoriaLS();
    console.log(categoria);
    const producrosFiltrados = categoria ? productos.filter(item => item.categoria === categoria) : productos;
    
    return producrosFiltrados;

}
const obtenerProductosLS = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);
}