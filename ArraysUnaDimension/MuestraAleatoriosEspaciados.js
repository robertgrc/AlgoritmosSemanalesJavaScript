//* Escribe un programa que genere 100 números aleatorios del 0 al 20 y que los muestre por pantalla separados por espacios. El programa pedirá entonces por teclado dos valores y a continuación cambiará todas las ocurrencias del primer valor por el segundo en la lista generada anteriormente. Los números que se han cambiado deben aparecer entrecomillados

function generaAleatorios(num, caracter) {
  let numeros = "";
  for (let i = 0; i < num; i++) {
    let aleatorio = Math.floor(Math.random() * 21);
    numeros += ` ${aleatorio}`;
  }

  //*1ra forma de reemplazar Caracter
  //   let cadenaReemplazandoCaracter = numeros.split(" ").join(caracter);

  //*2da forma de reemplazarCaracter
  let cadenaReemplazandoCaracter = numeros.replace(/ /g, caracter);
  return {
    numeros,
    cadenaReemplazandoCaracter,
  };
}

console.log(generaAleatorios(100, "*").numeros);
console.log(generaAleatorios(100, "*").cadenaReemplazandoCaracter);
