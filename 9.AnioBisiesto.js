// *Dado un año indicar si es bisiesto.
// *Nota: un año es bisiesto si es un número divisible por 4, pero no si es divisible por 100, excepto que también sea divisible por 400.

function bisiesto(year) {
  if ((year % 4 === 0 && year !== 100) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(bisiesto(2001));
