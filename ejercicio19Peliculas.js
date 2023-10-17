//* Dado un array de objetos de peliculas (titulo, director, vista) mostrar todas las peliculas indicando cual has visto y cual no

//* Ejemplos  misPeliculas(peliculas);

//* Devuelve:
//* Ya has visto: "El senor de los anillos de Peter Jackson"
//* Te falta por ver: "La liga de la justicia de Zack Snyder"

function misPeliculas(peliculas) {
  let mensaje = "";
  for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    const estado = pelicula.visto ? "Ya has visto" : "Te falta por ver";
    mensaje += `${estado}: "${pelicula.titulo} de ${pelicula.director}"\n`;
  }
  return mensaje;
}

const peliculas = [
  {
    titulo: "Titanic",
    director: "James Cameron",
    visto: true,
  },
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    visto: true,
  },
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    visto: false,
  },
  {
    titulo: "Jurassic Park",
    director: "Steven Spielberg",
    visto: true,
  },
  {
    titulo: "Avatar",
    director: "James Cameron",
    visto: false,
  },
];

// misPeliculas(peliculas);
console.log(misPeliculas(peliculas));
