//* Dado un objeto comprobar si existe una propiedad en concreto
//* existePropiedad(miObjeto, "nombre") //si el objeto tiene la propiedad devuelve true sino false
//* devuelve: true

function existePropiedad(objeto, propiedad) {
  if (
    typeof objeto === "object" &&
    typeof propiedad === "string" &&
    hasOwnProperty.call(objeto, propiedad)
  ) {
    return true;
  } else {
    return false;
  }
}

let usuario = {
  nombre: "koala",
  apellido: "naraku",
};

console.log(existePropiedad(usuario, "nombre"));
