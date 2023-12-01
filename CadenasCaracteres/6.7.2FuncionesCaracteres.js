//*Escribir funciones que dadas dos cadenas de caracteres:
//* b) Devuelva la que sea anterior en orden alfábetico. Por ejemplo, si recibe 'kde' y 'gnome'debe devolver 'gnome'.

function cadenaAnterior(cadena1, cadena2) {
  const comparacion = cadena1.localeCompare(cadena2);

  if (comparacion < 0) {
    return cadena1;
  } else if (comparacion > 0) {
    return cadena2;
  } else {
    return "Ambas cadenas son iguales";
  }
}

// Ejemplo de uso
const resultado = cadenaAnterior("kde", "gnome");
console.log(resultado); // Salida esperada: 'gnome'

//* En este ejemplo, localeCompare devuelve un número negativo si cadena1 es anterior a cadena2, un número positivo si cadena1 es posterior a cadena2, y cero si ambas cadenas son iguales. Luego, la función compara este resultado y devuelve la cadena correspondiente.
