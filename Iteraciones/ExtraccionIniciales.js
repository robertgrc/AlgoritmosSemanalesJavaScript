//* Dada una lista de nombres, utiliza map para crear una nueva lista que contenga las iniciales de cada nombre.

function ExtraeIniciales(lista) {
  return lista.map((nombre) => nombre.charAt(0));
}

let nombres = ["Aldair", "Jerome", "David", "Moises"];

let iniciales = ExtraeIniciales(nombres);
console.log(iniciales);

//* Con For

function ExtraeInicialesV2(lista) {
  let Iniciales = [];
  for (let i = 0; i < lista.length; i++) {
    let inicial = lista[i].charAt(0);
    Iniciales.push(inicial);
  }
  return Iniciales;
}

let nombres2 = ["Aldair", "Jerome", "David", "Moises"];

let iniciales2 = ExtraeInicialesV2(nombres2);
console.log(iniciales2);
