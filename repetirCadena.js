// * Dada una cadena s, que consta de letras 'a' y 'b', y un número entero n, debes encontrar cuántas veces aparece la letra 'a' en la cadena repetida hasta un longitud de n. La cadena s se repite cuantas veces sea necesario para alcanzar la longitud n.

function repeatedString(s, n) {
  const aCountInString = s.split("").filter((char) => char === "a").length;
  const repeatCount = Math.floor(n / s.length);
  const remainder = n % s.length;

  const totalAInRepeats = aCountInString * repeatCount;
  const totalAInRemainder = s
    .slice(0, remainder)
    .split("")
    .filter((char) => char === "a").length;

  const totalA = totalAInRepeats + totalAInRemainder;
  return totalA;
}
