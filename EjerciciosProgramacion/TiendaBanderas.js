//* La tienda online BanderaDeEspaña.es vende banderas personalizadas de la máxima calidad y nos ha pedido hacer un configurador que calcule el precio según el alto y el ancho. El precio base de una bandera es de 2 euros el centímetro cuadrado. Si la queremos con un escudo bordado, el precio se incrementa en 2.50 € independientemente del tamaño. Los gastos de envío son 3.25 €. El IVA ya está incluido en todas las tarifas.

function tiendaBanderas(banderas) {
  let precios = banderas.map((bandera) => {
    let Area = bandera.alto * bandera.ancho;
    if (bandera.bordado) {
      let precio = Area * 4.5;
      return precio;
    } else {
      let precio = Area * 2;
      return precio;
    }
  });
  console.log(precios);
  return precios;
}

// Ejemplo de uso
const banderas = [
  { alto: 14, ancho: 20, bordado: true },
  { alto: 7, ancho: 40, bordado: false },
];

let precioBanderas = tiendaBanderas(banderas);
console.log(`el precio de la bandera es de: ${precioBanderas[0]} €`);
console.log(`el precio de la bandera es de: ${precioBanderas[1]} €`);
