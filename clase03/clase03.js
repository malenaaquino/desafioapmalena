
const nombrePorducto = 'pantalones';

const precioUnitario = 7000;
let cantidadDeseada = prompt( `Ingrese la cantidad de ${nombrePorducto} que desea comprar: `)

parseInt(cantidadDeseada)

let costoTotalSinDescuentos = precioUnitario * cantidadDeseada

if(cantidadDeseada >= 5 ) { 
   costoTotalSinDescuentos *= 0.9
}
alert( `El costo total de ${cantidadDeseada} ${nombrePorducto} es: $${costoTotalSinDescuentos}`)