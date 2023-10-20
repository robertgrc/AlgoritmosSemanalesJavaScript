//* Dado un array de objetos, devolver cuales son las aficiones de los usuarios

//* Ejemplo  aficiones(usuarios)

//* {informatica:6, cine:7, fubtol:2, videojuegos:1}

function aficiones(usuarios) {
  mapeo = {};
  for (let user of usuarios) {
    for (let aficion of user.aficiones) {
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
