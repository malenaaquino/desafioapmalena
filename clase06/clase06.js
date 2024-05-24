let producto = {
    nombre: "Camiseta",
    precio: 29.99,
    cantidadDisponible: 100
};

producto.nombre = "Zapatillas";

producto.categoria = "calzado";

delete producto.cantidadDisponible;

console.log(producto);