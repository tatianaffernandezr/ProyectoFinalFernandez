
const Productos = [
    {id:1, nombre: "Reiki Usui", Duracion:1, precio:6500},
    {id:2, nombre: "Karmic Reiki", Duracion:1, precio:7800},
    {id:3, nombre: "Barras de Acces", Duracion:40, precio:11000},
    {id:4, nombre: "Gemoterapia", Duracion:1, precio:3500},
    {id:5, nombre: "Meditacion", Duracion:2, precio:4900},
    {id:6, nombre: "Registros Akashicos", Duracion:1, precio:12000},
]

const guardarProductosLS = (Productos) => [
    localStorage.setItem("Productos", JSON.stringify(Productos))
]

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("Productos")) || []; 
}
const guardarCarritoLS = (Productos) => [
    localStorage.setItem("Carrito", JSON.stringify(Productos))
]

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("Carrito")) || []; 
}

const totalProductos = () => {
    const Productos = obtenerCarritoLS();
    return Carrito.length;
}

function renderProductos(){
    const Productos = obtenerProductosLS();
    let contenido = ""
}

const renderTotalCarrito = () => {

    document.getElementById("totalCarrito").innerHTML = totalProductos();
}

guardarProductosLS(Productos);
renderProductos();