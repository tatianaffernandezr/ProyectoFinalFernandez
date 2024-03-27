const productos = [
    {id:1, nombre: "Reiki Usui", imagen:"./imagenes-media/reiki-usui.png", descripcion:"En esta sesion se canaliza energias especificas relacionadas con el Karma. Algunas veces revelan episodios de vidas anteriores. Se dice que todo lo que hacemos se refleja en nosotros de vuelta, a veces estas vibraciones son enviadas a través del Aura. Si no cortamos el ciclo karmatico, estas “deudas” continuarán el campo áurico que obtenemos al nacer.", precio: 6500, categoria: "distancia"},
    {id:2, nombre: "Karmic Reiki", imagen:"./imagenes-media/karmic-reiki.png", descripcion:"En esta sesion se canaliza energias especificas relacionadas con el Karma. Algunas veces revelan episodios de vidas anteriores. Se dice que todo lo que hacemos se refleja en nosotros de vuelta, a veces estas vibraciones son enviadas a través del Aura. Si no cortamos el ciclo karmatico, estas “deudas” continuarán el campo áurico que obtenemos al nacer.", precio: 6740, categoria: "distancia"},
    {id:3, nombre: "Barras de Access", imagen:"./imagenes-media/barras-access.png", descripcion:"Las Barras de Access es una técnica de aplicación manual que consigue, mediante unos suaves toques en ciertos puntos específicos de la cabeza, que las ondas cerebrales cambien pasando de onda Beta (estado de vigilia) a onda Theta o Delta (estados de relajación profunda)", precio: 15000, categoria: "presencial"},
    {id:4, nombre: "Gemoterapia", imagen:"./imagenes-media/gemoterapia.png", descripcion:"La gemoterapia es la aplicación terapeútica de piedras y cristales con propiedades para encontrar el equilibrio y la relajación, además de regenerar la mente y el cuerpo.", precio: 4500, categoria: "distancia"},
    {id:5, nombre: "Meditación", imagen:"./imagenes-media/meditacion.png", descripcion:"Esta sesion nos permiten conectar con el aquí y ahora. Es un estado de presencia pura. Para meditar nos enfocamos en la respiracion, postura y espacio. Cada experiencia es única. Cada persona tiene su tiempo. Es una herramienta maravillosa para ayudarnos a enfocar, a tomar las cosas con mas tranquilidad.", precio: 4000, categoria: "distancia"},
    {id:6, nombre: "Registros Akashicos", imagen:"./imagenes-media/registros-akashicos.png", descripcion:"En el Akasha está registrada la historia del planeta, la historia personal de cada uno, el propósito en la Vida, el programa de nuestro destino futuro, de ahí el nombre de Registro Akáshico o Registro del Alma. Son los archivos y las matrices de todo lo ocurrido en el Universo. Son impresiones en el plano astral como un legajo de las vidas pasadas.", precio: 9800, categoria: "distancia"},
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}
const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [] ;
}
const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}
const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [] ;
}
const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0 ;
}
const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS();

    return carrito.length;
}
const renderTotalCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
}
const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}
const obtenerProductoLS = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);

    return producto;
}