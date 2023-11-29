//* Programa de astrología: el usuario debe ingresar el día y mes de su cumpleaños
//* y el programa le debe decir a qué signo corresponde.
//* Aries: 21 de marzo al 20 de abril. Tauro: 21 de abril al 20 de mayo.
//* Geminis: 21 de mayo al 21 de junio. Cancer: 22 de junio al 23 de julio.
//* Leo: 24 de julio al 23 de agosto. Virgo: 24 de agosto al 23 de septiembre.
//* Libra: 24 de septiembre al 22 de octubre. Escorpio: 23 de octubre al 22 de noviembre.
//*Sagitario: 23 de noviembre al 21 de diciembre.
//*Capricornio: 22 de diciembre al 20 de enero.
//*Acuario: 21 de enero al 19 de febrero.
//*Piscis: 20 de febrero al 20 de marzo

function astrologia(dia, mes) {
  let signoAstral = "";
  if ((dia >= 21 && mes === 1) || (dia <= 19 && mes === 2)) {
    signoAstral = "Acuario";
  } else if ((dia >= 20 && mes === 2) || (dia <= 20 && mes === 3)) {
    signoAstral = "Pisis";
  } else if ((dia >= 21 && mes === 3) || (dia <= 21 && mes === 4)) {
    signoAstral = "Aries";
  } else if ((dia >= 21 && mes === 4) || (dia <= 20 && mes === 5)) {
    signoAstral = "Tauro";
  } else if ((dia >= 21 && mes === 5) || (dia <= 21 && mes === 6)) {
    signoAstral = "Geminis";
  } else if ((dia >= 22 && mes === 6) || (dia <= 23 && mes === 7)) {
    signoAstral = "Cancer";
  } else if ((dia >= 24 && mes === 7) || (dia <= 23 && mes === 8)) {
    signoAstral = "Leo";
  } else if ((dia >= 24 && mes === 8) || (dia <= 23 && mes === 9)) {
    signoAstral = "Virgo";
  } else if ((dia >= 24 && mes === 9) || (dia <= 22 && mes === 10)) {
    signoAstral = "Libra";
  } else if ((dia >= 23 && mes === 10) || (dia <= 22 && mes === 11)) {
    signoAstral = "Escorpio";
  } else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    signoAstral = "Sagitario";
  } else if ((dia >= 22 && mes === 12) || (dia <= 21 && mes === 1)) {
    signoAstral = "capricornio";
  } else {
    return "Error Fecha Invalida";
  }
  return signoAstral;
}

console.log(astrologia(22, 1));
console.log(astrologia(20, 2));
console.log(astrologia(21, 3));
console.log(astrologia(10, 7));
console.log(astrologia(1, 4));
console.log(astrologia(25, 11));
console.log(astrologia(25, 13));
