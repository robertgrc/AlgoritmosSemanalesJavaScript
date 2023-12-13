//* Realiza un programa que genere una secuencia de cinco monedas de curso legal lanzadas al aire. Las monedas disponibles son de 1 céntimo, 2 céntimos, 5 céntimos, 10 céntimos, 20 céntimos, 50 céntimos, 1 euro y 2 euros. Las dos posiciones posibles son cara y cruz.
// Ejemplo:
// 2 céntimos - cara
// 20 céntimos - cruz
// 50 céntimos - cruz
// 1 euro - cruz
// 2 euros - cara

function secuenciaMonedas() {
  let monedas = [
    "1 centimo",
    "2 centimos",
    "5 centimos",
    "10 centimos",
    "20 centimos",
    "50 centimos",
    "1 euro ",
    "2 euros",
  ];
  let posicion = ["cara", "cruz"];

  let listaMonedas = [];

  for (let i = 0; i < 5; i++) {
    let monedaAleatoria = monedas[Math.floor(Math.random() * monedas.length)];
    let caraAleatoria = posicion[Math.floor(Math.random() * posicion.length)];
    let informacion = `${monedaAleatoria} - ${caraAleatoria}`;
    console.log(informacion);
    listaMonedas.push(informacion);
  }
  return listaMonedas;
}

console.log(secuenciaMonedas());
