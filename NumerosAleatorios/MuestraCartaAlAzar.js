//* funcion recibe parametro numero de cartas para sacar al azar  cartas 1-13

function muestraCartaAlAzar(numeroCartas) {
  let DiezCartasAlAzar = [];
  let respuesta = "";
  for (let i = 0; i < numeroCartas; i++) {
    let cartaAzar = Math.floor(Math.random() * 13 + 1);
    switch (cartaAzar) {
      case 1:
        respuesta = "A";
        break;
      case 2:
        respuesta = "2";
        break;
      case 3:
        respuesta = "3";
        break;
      case 4:
        respuesta = "4";
        break;
      case 5:
        respuesta = "5";
        break;
      case 6:
        respuesta = "6";
        break;
      case 7:
        respuesta = "7";
        break;
      case 8:
        respuesta = "8";
        break;
      case 9:
        respuesta = "9";
        break;
      case 10:
        respuesta = "10";
        break;
      case 11:
        respuesta = "J";
        break;
      case 12:
        respuesta = "Q";
        break;
      case 13:
        respuesta = "K";
        break;

      default:
        break;
    }
    DiezCartasAlAzar.push(respuesta);
  }
  return DiezCartasAlAzar;
}
let numeroCartas = 7;

console.log(`${numeroCartas} cartas al Azar ${muestraCartaAlAzar(7)}`);
