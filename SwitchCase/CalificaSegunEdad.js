//* Crea un programa que tome la edad de una persona e imprima un mensaje clasificándola en categorías como "niño", "adolescente", "adulto joven" y "adulto".

function ClasificaEdades(edad) {
  let mensaje = "";
  switch (true) {
    case edad >= 0 && edad < 2:
      mensaje = "bebe";
      break;
    case edad >= 5 && edad < 10:
      mensaje = "niño";
      break;
    case edad >= 10 && edad < 18:
      mensaje = "adolescente";
      break;
    case edad >= 18 && edad < 60:
      mensaje = "adulto";
      break;
    case edad >= 60 && edad < 120:
      mensaje = "AdultoMayor";
      break;

    default:
      break;
  }
  return mensaje;
}
console.log(ClasificaEdades(1));
console.log(ClasificaEdades(5));
console.log(ClasificaEdades(13));
console.log(ClasificaEdades(18));
console.log(ClasificaEdades(33));
console.log(ClasificaEdades(70));
