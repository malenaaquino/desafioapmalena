function sumarProductos(precioUnitario, cantidadDeseada) {  
    let totalGastado = precioUnitario * cantidadDeseada;  
    return totalGastado;  
}  

let precio = 1000; 
let cantidad = prompt( `Ingrese la cantidad de que desea comprar: `);  
let totalCompra = sumarProductos(precio, cantidad);  
console.log("El total gastado en el producto es: $" + totalCompra); 