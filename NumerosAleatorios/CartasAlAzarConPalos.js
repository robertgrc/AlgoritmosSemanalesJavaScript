//* Realiza un programa que muestre al azar el nombre de una carta de la baraja francesa. Esta baraja está dividida en cuatro palos: picas, corazones, diamantes y tréboles. Cada palo está formado por 13 cartas, de las cuales 9 cartas son numerales y 4 literales: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K y A (que sería el 1). Para convertir un número en una cadena de caracteres podemos usar String.valueOf(n)

function sacarCartasAlAzar(numeroCartas) {
  const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
  const valores = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const cartasSacadas = [];
  for (let i = 0; i < numeroCartas; i++) {
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
    const carta = `${valorAleatorio} de ${paloAleatorio}`;
    cartasSacadas.push(carta);
  }
  return cartasSacadas;
}

let numeroCartas = 4;

console.log(sacarCartasAlAzar(numeroCartas));

// Math.random(): La función Math.random() devuelve un número decimal pseudoaleatorio en el rango [0, 1). Es decir, puede devolver cualquier número decimal entre 0 (inclusive) y 1 (exclusive).

// Math.floor(Math.random() * palos.length): Aquí, Math.random() * palos.length genera un número decimal en el rango [0, longitud de palos). Luego, Math.floor() redondea hacia abajo ese número decimal, convirtiéndolo en un número entero en el rango [0, longitud de palos - 1]. Esto se utiliza como índice para seleccionar un palo aleatorio del array palos.

//  La función Math.floor no genera un índice directamente, sino que redondea hacia abajo un número decimal al entero más cercano.
