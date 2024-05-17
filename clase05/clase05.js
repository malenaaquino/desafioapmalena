let productos = [
    { nombre: "Camiseta", stock: 10 },
    { nombre: "Pantalones", stock: 15 },
    { nombre: "Zapatos", stock: 5 },
    { nombre: "Sombrero", stock: 8 },
];

console.log("Listado de productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto: ${productos[i].nombre}, Stock: ${productos[i].stock}`);
}


console.log("Simulando ventas...");

for (let i = 0; i < 3; i++) {  
    if (productos.length > 0) {
        let productoVendido = productos.pop();
        console.log(`Producto vendido: ${productoVendido.nombre}`);
        
        
        console.log("Nuevo listado de productos:");
        for (let j = 0; j < productos.length; j++) {
            console.log(`Producto: ${productos[j].nombre}, Stock: ${productos[j].stock}`);
        }
    } else {
        console.log("No hay más productos en stock.");
        break;
    }
}
