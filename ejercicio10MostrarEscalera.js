//* Dado un numero, mostrar una escalera con escalones de "[-]" usando el numero para los niveles de la escalera

//* ejemplo: escalera(4)
// [-]
// [-][-]
// [-][-][-]
// [-][-][-][-]

function escalera(numero) {
  let escalera_completa = "";

  for (let nivel = 1; nivel <= numero; nivel++) {
    let escalones = "";
    for (let escalon = 1; escalon <= nivel; escalon++) {
      escalones += "[-]";
    }
    escalera_completa += escalones + "\n";
  }
  return escalera_completa;
}

console.log(escalera(7));
