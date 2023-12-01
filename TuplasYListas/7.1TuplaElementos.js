//* Escribir una función que reciba una tupla de elementos e indique si se encuentran ordenados de menor a mayor o no

function VerificaSiEstanOrdenados(tupla) {
  for (let i = 0; i < tupla.length; i++) {
    if (tupla[i] > tupla[i + 1]) {
      return "No esta ordenado de menor a mayor";
    } else {
      return "Esta ordenado de menor a mayor";
    }
  }
}

const tupla1 = [1, 2, 3, 4, 5];
const tupla2 = [5, 3, 8, 2, 1];

console.log(VerificaSiEstanOrdenados(tupla1));
console.log(VerificaSiEstanOrdenados(tupla2));

//* con

function VerificaMenorAMayor(tupla) {
  for (let i = 0; i < tupla.length; i++) {
    return tupla[i] > tupla[i + 1] ? false : true;
  }
}

const tupla3 = [1, 2, 3, 4, 5];
const tupla4 = [5, 3, 8, 2, 1];

console.log(VerificaMenorAMayor(tupla3));
console.log(VerificaMenorAMayor(tupla4));
