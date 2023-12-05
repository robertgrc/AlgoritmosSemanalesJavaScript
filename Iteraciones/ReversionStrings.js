//* Dada una lista de strings, utiliza map para crear una nueva lista que contenga cada string revertido.

function listaInvertida(lista) {
  let listaSeparada = lista.slice(" ");
  let inviertePalabras = listaSeparada.map((palabra) =>
    palabra.split("").reverse().join("")
  );
  console.log(inviertePalabras);
  return inviertePalabras;
}

let listaEquipos = [
  "manchester city",
  "Chelsea",
  "liverpool",
  "Manchester United",
  "Tothenham",
];

console.log(listaInvertida(listaEquipos));

function inviertePalabra(palabra) {
  let invertido = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invertido += palabra[i];
  }
  return invertido;
}
console.log(inviertePalabra("palabra"));

function listaLetrasInvertidas(lista) {
  return lista.map((equipo) => inviertePalabra(equipo));
}

let listaEquipos2 = [
  "manchester city",
  "Chelsea",
  "liverpool",
  "Manchester United",
  "Tothenham",
];

console.log(listaLetrasInvertidas(listaEquipos2));
