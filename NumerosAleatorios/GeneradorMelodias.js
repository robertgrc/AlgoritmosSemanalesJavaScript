//* Realiza un generador de melodía con las siguientes condiciones:
//* a) Las notas deben estar generadas al azar. Las 7 notas son do, re, mi, fa, sol,
//* la y si.
//* b) Una melodía está formada por un número aleatorio de notas mayor o igual
//* a 4, menor o igual a 28 y siempre múltiplo de 4 (4, 8, 12…).
//* c) Cada grupo de 4 notas será un compás y estará separado del siguiente
//* compás mediante la barra vertical “|” (Alt + 1). El final de la melodía se marca
//* con dos barras.
//* d) La última nota de la melodía debe coincidir con la primera.
// Ejemplo 1:
// do mi fa mi | si do sol fa | fa re si do | sol mi re do ||
// Ejemplo 2:
// la re mi sol | fa mi mi si | do la sol fa | fa re si sol | do sol mi re | fa la do la ||

function generarMelodia() {
  const notas = ["do", "re", "mi", "fa", "sol", "la", "si"];
  const longitudMelodia = Math.floor(Math.random() * 7) * 4 + 4; // Múltiplo de 4 entre 4 y 28
  let melodia = "";

  for (let i = 0; i < longitudMelodia; i++) {
    const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];

    // Agrega la nota a la melodía
    melodia += notaAleatoria;

    // Cada 4 notas, agrega una barra vertical
    if ((i + 1) % 4 === 0 && i !== longitudMelodia - 1) {
      melodia += "|";
    }
  }

  // La última nota debe coincidir con la primera
  melodia += notas[Math.floor(Math.random() * notas.length)];

  return melodia;
}

// Ejemplo de uso
const melodiaGenerada = generarMelodia();
console.log(melodiaGenerada);
