//* Crea una biblioteca de funciones matemáticas que contenga las siguientes funciones. Recuerda que puedes usar unas dentro de otras si es necesario. Observa bien lo que hace cada función ya que, si las implementas en el orden adecuado, te puedes ahorrar mucho trabajo. Por ejemplo, la función esCapicua resulta trivial teniendo voltea y la función siguientePrimo también es muy fácil de implementar teniendo esPrimo.
// 1. esCapicua: Devuelve verdadero si el número que se pasa como parámetro es capicúa y falso en caso contrario.
// 2. esPrimo: Devuelve verdadero si el número que se pasa como parámetro
// es primo y falso en caso contrario.
// 3. siguientePrimo: Devuelve el menor primo que es mayor al número que
// se pasa como parámetro.
// 4. potencia: Dada una base y un exponente devuelve la potencia.
// 5. digitos: Cuenta el número de dígitos de un número entero.
// 6. voltea: Le da la vuelta a un número.
// 7. digitoN: Devuelve el dígito que está en la posición n de un número entero.
// Se empieza contando por el 0 y de izquierda a derecha.
// 8. posicionDeDigito: Da la posición de la primera ocurrencia de un dígito
// dentro de un número entero. Si no se encuentra, devuelve -1.
// 9. quitaPorDetras: Le quita a un número n dígitos por detrás (por la
// derecha).
// 10. quitaPorDelante: Le quita a un número n dígitos por delante (por la
// izquierda).
// 11. pegaPorDetras: Añade un dígito a un número por detrás.
// 12. pegaPorDelante: Añade un dígito a un número por delante.
// 13. trozoDeNumero: Toma como parámetros las posiciones inicial y final
// dentro de un número y devuelve el trozo correspondiente.
// 14. juntaNumeros: Pega dos números para formar uno.

//*6)Voltea un numero

function voltea(numero) {
  let invertido = parseInt(numero.toString().split("").reverse().join(""));
  return invertido;
}
let numeroAVoltear = 7771;
console.log(voltea(numeroAVoltear)); //Expected

//* 1) capicua - se lee igual de izq a derecha o de derecha a izquierda ejem 121, 3003, 1234321, 33, 445544,

function capicua(numero) {
  let invertido = voltea(numero);
  return numero === invertido ? true : false;
}
let verificarCapicua = 3003;
console.log(capicua(verificarCapicua));

//*2 funcion para ver si es primo devuelve verdadeero si es primo

function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(7));
console.log(esPrimo(8));

//* 4. siguientePrimo: Devuelve el menor primo que es mayor al número que se pasa como parámetro.

function siguientePrimoMayor(numero) {
  let siguienteNumero = numero + 1;

  while (true) {
    if (esPrimo(siguienteNumero)) {
      return siguienteNumero;
    }
    siguienteNumero++;
  }
}

console.log(siguientePrimoMayor(8));

function siguienteNumeroPrimo(numero) {
  for (let siguienteNumero = numero + 1; ; siguienteNumero++) {
    if (esPrimo(siguienteNumero)) {
      return siguienteNumero;
    }
  }
}

console.log(siguienteNumeroPrimo(6));

//* digitos: Cuenta el número de dígitos de un número entero.

function cuentaDigitos(numeroEntero) {
  return numeroEntero.toString().length;
}

let numeroEntero = 1234567;

console.log(cuentaDigitos(numeroEntero));

//* 8. posicionDeDigito: Da la posición de la primera ocurrencia de un dígito dentro de un número entero. Si no se encuentra, devuelve -1.

function posicionDigito(numero, digitoBuscado) {
  let numeroString = numero.toString();
  for (let i = 0; i < numeroString.length; i++) {
    if (parseInt(numeroString[i]) === digitoBuscado) {
      return i + 1;
    }
  }
}
let num = 37378379;
let digito = 9;
console.log(posicionDigito(num, digito));

//* 7. digitoN: Devuelve el dígito que está en la posición n de un número entero. Se empieza contando por el 0 y de izquierda a derecha.

function DevuelveDigito(numero, digitoBuscado) {
  let posicion = posicionDigito(numero, digitoBuscado);
  let numeroString = numero.toString();
  let digitoSeleccionado = numeroString[posicion];
  console.log("digitoSeleccionado", digitoSeleccionado);
  return digitoSeleccionado;
}

console.log(DevuelveDigito(7317237, 2));

//* 9. quitaPorDetras: Le quita a un número n dígitos por detrás (por la derecha).

function quitaPorDetras(numero, quitaDigitos) {
  let numeroString = numero.toString().split("");
  console.log(numeroString);
  numeroString.splice(numeroString.length - quitaDigitos, quitaDigitos);
  return parseInt(numeroString.join(""));
}

let numeroDigitos = 19383892;
let quitaDigitos = 4;
console.log(quitaPorDetras(numeroDigitos, quitaDigitos));

//* 10. quitaPorDelante: Le quita a un número n dígitos por delante (por la izquierda).

function quitaPorDelante(numero, quitaDigitos) {
  let numeroString = numero.toString().split("");
  console.log(numeroString);
  numeroString.splice(0, quitaDigitos);
  return parseInt(numeroString.join(""));
}

let numDigitos = 19383892;
let quitaDelanteDigitos = 4;
console.log(quitaPorDelante(numDigitos, quitaDelanteDigitos));

//* 11. pegaPorDetras: Añade un dígito a un número por detrás.

function pegaPorDetras(numero, digitoAnadir) {
  console.log(numero);
  let numeroString = numero.toString() + digitoAnadir.toString();
  return parseInt(numeroString);
}

let numeroOriginal = 12728294;
let numeroAPegar = 7;
console.log(pegaPorDetras(numeroOriginal, numeroAPegar));

//* 12. pegaPorDelante: Añade un dígito a un número por delante.

function pegaPorDelante(numero, digitoAnadir) {
  let numeroString = digitoAnadir.toString() + numero.toString();
  return parseInt(numeroString);
}
console.log(pegaPorDelante(numeroOriginal, numeroAPegar));

//* 14. juntaNumeros: Pega dos números para formar uno.

function juntaNumeros(num1, num2) {
  let numero1 = num1.toString();
  let numero2 = num2.toString();
  return parseInt(numero1 + numero2);
}
let numero1 = 45;
let numero2 = 77;
console.log(juntaNumeros(numero1, numero2));
