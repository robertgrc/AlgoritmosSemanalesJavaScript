//*Escribir funciones que dadas dos cadenas de caracteres:
//* a) Indique si la segunda cadena es una subcadena de la primera. Por ejemplo, 'cadena' es una subcadena de 'subcadena'.

function Subcadena(string1, string2) {
  if (string1.includes(string2)) {
    return "es subcadena";
  } else {
    return "no es subcadena";
  }
  // string1.includes(string2)? return "es Subcadena": return
}

console.log(Subcadena("subcadena", "cadena"));

//* Con operador ternario

function esSubcadena(string1, string2) {
  return string1.includes(string2) ? true : false;
}

console.log(esSubcadena("subcadena", "cadena"));
