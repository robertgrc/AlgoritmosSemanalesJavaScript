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

function obtenerSignoZodiacal(dia, mes) {
  // Definir los rangos de fechas para cada signo zodiacal
  const signos = [
    { nombre: "Aries", rango: { inicio: [21, 3], fin: [20, 4] } },
    { nombre: "Tauro", rango: { inicio: [21, 4], fin: [20, 5] } },
    { nombre: "Géminis", rango: { inicio: [21, 5], fin: [21, 6] } },
    { nombre: "Cáncer", rango: { inicio: [22, 6], fin: [23, 7] } },
    { nombre: "Leo", rango: { inicio: [24, 7], fin: [23, 8] } },
    { nombre: "Virgo", rango: { inicio: [24, 8], fin: [23, 9] } },
    { nombre: "Libra", rango: { inicio: [24, 9], fin: [22, 10] } },
    { nombre: "Escorpio", rango: { inicio: [23, 10], fin: [22, 11] } },
    { nombre: "Sagitario", rango: { inicio: [23, 11], fin: [21, 12] } },
    { nombre: "Capricornio", rango: { inicio: [22, 12], fin: [20, 1] } },
    { nombre: "Acuario", rango: { inicio: [21, 1], fin: [19, 2] } },
    { nombre: "Piscis", rango: { inicio: [20, 2], fin: [20, 3] } },
  ];

  // Buscar el signo zodiacal correspondiente
  let signoZodiacal = "Desconocido";

  for (const signo of signos) {
    const inicio = signo.rango.inicio;
    const fin = signo.rango.fin;
    if (
      (mes === inicio[1] && dia >= inicio[0]) ||
      (mes === fin[1] && dia <= fin[0])
    ) {
      signoZodiacal = signo.nombre;
      break;
    }
  }

  return signoZodiacal;
}

// Ejemplo de uso:
const diaCumple = 10;
const mesCumple = 4;
const signo = obtenerSignoZodiacal(diaCumple, mesCumple);
console.log(`Tu signo zodiacal es: ${signo}`);
console.log(obtenerSignoZodiacal(10, 7));
