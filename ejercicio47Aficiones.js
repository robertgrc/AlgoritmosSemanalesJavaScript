//* Dado un array de objetos, devolver cuales son las aficiones de los usuarios

//* Ejemplo  aficiones(usuarios)

//* {informatica:6, cine:7, fubtol:2, videojuegos:1}

function aficiones(arrObj) {
  let mapeo = {};
  for (let objeto of arrObj) {
    for (let aficion of objeto.aficiones) {
      if (!mapeo[aficion]) {
        mapeo[aficion] = 1;
      } else {
        mapeo[aficion]++;
      }
    }
  }
  return mapeo;
}

const usuarios = [
  { nombre: "victor", aficiones: ["informatica", "cine", "videojuegos"] },
  { nombre: "Juan", aficiones: ["cine", "fubol", "tenis"] },
  { nombre: "Paco", aficiones: ["informatica", "cine", "surf"] },
  { nombre: "Pepe", aficiones: ["informatica", "cine", "videojuegos"] },
];
console.log(aficiones(usuarios));
