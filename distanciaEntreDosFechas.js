// * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
// * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
// * - La función recibirá dos String y retornará un Int.
// * - La diferencia en días será absoluta (no importa el orden de las fechas).
// * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.

function calcularDiferenciaEnDias(fechaStr1, fechaStr2) {
  // Función para verificar si una cadena de texto es una fecha válida
  function esFechaValida(fechaStr) {
    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexFecha.test(fechaStr)) {
      throw new Error(
        `"${fechaStr}" no es una fecha válida. El formato debe ser "dd/MM/yyyy".`
      );
    }
    const partesFecha = fechaStr.split("/");
    const dia = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10) - 1; // Restamos 1 porque los meses en JavaScript van de 0 a 11
    const año = parseInt(partesFecha[2], 10);
    const fecha = new Date(año, mes, dia);
    if (isNaN(fecha.getTime())) {
      throw new Error(`"${fechaStr}" no es una fecha válida.`);
    }
    return fecha;
  }

  // Parsear las fechas
  const fecha1 = esFechaValida(fechaStr1);
  const fecha2 = esFechaValida(fechaStr2);

  // Calcular la diferencia en días (valor absoluto)
  const diferenciaEnTiempo = Math.abs(fecha1 - fecha2);
  const diferenciaEnDias = Math.floor(
    diferenciaEnTiempo / (1000 * 60 * 60 * 24)
  );

  return diferenciaEnDias;
}

// Ejemplo de uso
const fecha1 = "10/05/2023";
const fecha2 = "15/05/2023";

try {
  const diferencia = calcularDiferenciaEnDias(fecha1, fecha2);
  console.log(`La diferencia en días entre las fechas es: ${diferencia} días`);
} catch (error) {
  console.error(error.message);
}
