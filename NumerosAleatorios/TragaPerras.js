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

function simularTragaperras() {
  const figuras = ["corazón", "diamante", "herradura", "campana", "limón"];

  // Generar una tirada aleatoria
  const tirada = [];
  for (let i = 0; i < 3; i++) {
    const figuraAleatoria = figuras[Math.floor(Math.random() * figuras.length)];
    tirada.push(figuraAleatoria);
  }

  // Mostrar la tirada
  console.log(tirada.join(" "));

  // Evaluar el resultado
  if (tirada[0] === tirada[1] && tirada[1] === tirada[2]) {
    console.log("Enhorabuena, ha ganado 10 monedas");
  } else if (
    tirada[0] === tirada[1] ||
    tirada[1] === tirada[2] ||
    tirada[0] === tirada[2]
  ) {
    console.log("Bien, ha recuperado su moneda");
  } else {
    console.log("Lo siento, ha perdido");
  }
}

// Ejemplo de uso
simularTragaperras();
