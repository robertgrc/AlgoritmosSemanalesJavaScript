//* Realiza un simulador de máquina tragaperras simplificada que cumpla los siguientes requisitos:
//* a) El ordenador mostrará una tirada que consiste en mostrar 3 figuras. Hay 5 figuras posibles: corazón, diamante, herradura, campana y limón.
//* b) Si las tres figuras son diferentes se debe mostrar el mensaje “Lo siento, ha perdido”.
//* c) Si hay dos figuras iguales y una diferente se debe mostrar el mensaje “Bien, ha recuperado su moneda”.
//* d) Si las tres figuras son iguales se debe mostrar “Enhorabuena, ha ganado 10 monedas”.
// Ejemplo 1:
// diamante diamante limón
// Bien, ha recuperado su moneda
// Ejemplo 2:
// herradura campana diamante
// Lo siento, ha perdido
// Ejemplo 3:
// corazón corazón corazón
// Enhorabuena, ha ganado 10 monedas

function tragaperras() {
  let respuesta = "";
  let figuras = ["corazon", "diamante", "herradura", "campana", "limon"];
  let contadorCorazon = 0;
  let contadorDiamante = 0;
  let contadorHerradura = 0;
  let contadorCampana = 0;
  let contadorLimon = 0;
  let seleccionado = [];
  for (let i = 0; i < 3; i++) {
    let figuraRandom = figuras[Math.floor(Math.random() * figuras.length)];
    if (figuraRandom === "corazon") {
      contadorCorazon++;
    }
    if (figuraRandom === "diamante") {
      contadorDiamante++;
    }
    if (figuraRandom === "herradura") {
      contadorHerradura++;
    }
    if (figuraRandom === "campana") {
      contadorCampana++;
    }
    if (figuraRandom === "limon") {
      contadorLimon++;
    }
    seleccionado.push(figuraRandom);
  }
  if (
    contadorCorazon <= 1 &&
    contadorDiamante <= 1 &&
    contadorHerradura <= 1 &&
    contadorCampana <= 1 &&
    contadorLimon <= 1
  ) {
    respuesta = "Lo siento, ha perdido";
  }
  if (
    contadorCorazon === 2 ||
    contadorDiamante === 2 ||
    contadorHerradura === 2 ||
    contadorCampana === 2 ||
    contadorLimon === 2
  ) {
    respuesta = "Bien, ha recuperado su moneda";
  }
  if (
    contadorCorazon === 3 ||
    contadorDiamante === 3 ||
    contadorHerradura === 3 ||
    contadorCampana === 3 ||
    contadorLimon === 3
  ) {
    respuesta = "Enhorabuena, ha ganado 10 monedas";
  }

  console.log("Corazones", contadorCorazon);
  console.log("Diamantes", contadorDiamante);
  console.log("Herraduras", contadorHerradura);
  console.log("Campanas", contadorCampana);
  console.log("Limones", contadorLimon);
  return respuesta;
}

console.log(tragaperras());
