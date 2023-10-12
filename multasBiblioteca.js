// ¡Tu biblioteca local necesita tu ayuda! Dadas las fechas previstas y reales de devolución de un libro de la biblioteca, crea un programa que calcule la multa (si la hubiera). La estructura de multas es la siguiente:

//* Si el libro se devuelve en la fecha de devolución prevista o antes, no se cobrará ninguna multa (es decir: multa = 0 )
//* Si el libro se devuelve después de la fecha de devolución prevista, pero dentro del mismo mes y año naturales de la fecha de devolución prevista, se cobrará .   multa=15Hackos * numero de dias retrasado
//*  Si el libro se devuelve después del mes de devolución previsto, pero dentro del mismo año natural que la fecha de devolución prevista, se cobrará           multa=500hackos * numero de meses retrasado
//* Si el libro se devuelve después del año natural en que se esperaba, se aplica una multa fija  multa= 10000Hackos
//* Los cargos se basan únicamente en la medida menos precisa del retraso. Por ejemplo, tanto si un libro debe devolverse el 1 de enero de 2017 como el 31 de diciembre de 2017, si se devuelve el 1 de enero de 2018, se trata de un año de retraso y la multa sería de 10000 Hackos

// d1,m1,y1= 14, 7, 2018
// d2,m2,y2= 5, 7, 2018
// Los primeros valores son la fecha de devolución y los segundos la fecha de vencimiento. Los años son los mismos y los meses son los mismos. El libro lleva días de retraso. Devolución . 14 -5 = 9 dias retraso return 9*15 = 135

// Descripción de la función
// Complete la función libraryFine en el editor de abajo.
// libraryFine tiene los siguientes parámetros:
// d1, m1, y1: fecha de devolución día, mes y año, cada uno un entero
// d2, m2, y2: fecha devuelta día, mes y año, cada uno un entero

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (
    y1 < y2 ||
    (y1 === y2 && m1 < m2) ||
    (y1 === y2 && m1 === m2 && d1 <= d2)
  ) {
    return 0;
  } else if (y1 === y2 && m1 === m2) {
    //Dentro del mismo anio y mes, multa basada en dias de retraso
    const daysLate = d1 - d2;
    return 15 * daysLate;
  } else if (y1 === y2 && m1 > m2) {
    //Dentro del mismo anio multa basada en meses de retraso
    const monthsLate = m1 - m2;
    return 500 * monthsLate;
  } else if (y1 > y2) {
    const yearsLate = y1 - y2;
    return 10000 * yearsLate;
  }
}

// Ejemplo de uso:
const d1 = 14,
  m1 = 7,
  y1 = 2018;
const d2 = 5,
  m2 = 7,
  y2 = 2018;

const multa = libraryFine(d1, m1, y1, d2, m2, y2);
console.log("Multa: " + multa);
