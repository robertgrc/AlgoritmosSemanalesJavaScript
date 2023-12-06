//* A continuación tienes un ejemplo completo en Java. Se pide al usuario un número de mes y el programa da el nombre del mes que corresponde a ese número.

function DevuelveMes(numero) {
  let mes = "";
  switch (numero) {
    case 1:
      mes = "Enero";
      break;
    case 2:
      mes = "Febrero";
      break;
    case 3:
      mes = "Marzo";
      break;
    case 4:
      mes = "Abril";
      break;
    case 5:
      mes = "Mayo";
      break;
    case 6:
      mes = "Junio";
      break;
    case 7:
      mes = "Julio";
      break;
    case 8:
      mes = "Agosto";
      break;
    case 9:
      mes = "Septiembre";
      break;
    case 10:
      mes = "Octubre";
      break;
    case 11:
      mes = "Noviembre";
      break;
    case 12:
      mes = "Diciembre";
      break;

    default:
      console.log("Numero fuera de Rango");
  }
  return mes;
}
console.log(DevuelveMes(7));
console.log(DevuelveMes(9));
console.log(DevuelveMes(10));
console.log(DevuelveMes(13));
console.log(DevuelveMes(11));
