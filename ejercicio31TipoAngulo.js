//*  Dado un numero, indicar que tipo de angulo es
//*  angulo agudo<90
//*  angulo recto=90
//*  angulo obtuso>90
//*  angulo llano = 180
//*  angulo concavo >180
//*  angulo completo = 360

function devuelveTipoAngulo(angulo) {
  let respuesta = "";
  if (angulo === 360) {
    respuesta = "Angulo Completo";
  } else if (angulo < 360 && angulo > 180) {
    respuesta = "Angulo Concavo";
  } else if (angulo === 180) {
    respuesta = "Angulo Llano";
  } else if (angulo < 180 && angulo > 90) {
    respuesta = "Angulo Obtuso";
  } else if (angulo === 90) {
    respuesta = "Angulo Recto";
  } else if (angulo < 90 && angulo > 0) {
    respuesta = "Angulo Agudo";
  }
  return respuesta;
}

console.log(devuelveTipoAngulo(144));
console.log(devuelveTipoAngulo(77));
console.log(devuelveTipoAngulo(90));
console.log(devuelveTipoAngulo(360));
console.log(devuelveTipoAngulo(290));
