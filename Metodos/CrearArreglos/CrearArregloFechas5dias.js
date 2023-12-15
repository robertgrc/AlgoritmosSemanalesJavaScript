// Crear un arreglo de fechas para los próximos 5 días
const fechaInicial = new Date();
const arreglo5 = Array.from({ length: 5 }, (_, index) => {
  const nuevaFecha = new Date(fechaInicial);
  nuevaFecha.setDate(fechaInicial.getDate() + index);
  return nuevaFecha;
});
console.log(arreglo5);

// expected  [Thu Dec 14 2023 12:00:57 GMT-0400 (Bolivia Time), Fri Dec 15 2023 12:00:57 GMT-0400 (Bolivia Time), Sat Dec 16 2023 12:00:57 GMT-0400 (Bolivia Time), Sun Dec 17 2023 12:00:57 GMT-0400 (Bolivia Time), Mon Dec 18 2023 12:00:57 GMT-0400 (Bolivia Time)]
