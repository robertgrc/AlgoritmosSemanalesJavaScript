//* Escribe un programa que muestre 20 notas generadas al azar. Las notas deben aparecer de la forma: suspenso, suficiente, bien, notable o sobresaliente. Al final aparecerá el número de suspensos, el número de suficientes, el número de bienes, etc.

function notasGeneradasAlAzar(cantidadNotas) {
  let mensaje = ["suspenso", "suficiente", "bien", "notable"];
  let suspensos = 0;
  let suficientes = 0;
  let bienes = 0;
  let notables = 0;
  let respuesta = [];
  for (let i = 0; i < cantidadNotas; i++) {
    let nota = Math.floor(Math.random() * 100);
    if (nota <= 50) {
      suspensos++;
      console.log(`Suspenso`);
    }
    if (nota > 50 && nota <= 60) {
      suficientes++;
      console.log(`Suficiente`);
    }
    if (nota > 60 && nota <= 80) {
      bienes++;
      console.log(`Bien`);
    }
    if (nota > 80 && nota <= 100) {
      notables++;
      console.log(`notable`);
    }
  }
  return {
    respuesta,
    suspensos,
    suficientes,
    bienes,
    notables,
  };
}
const cantidadNotas = 20;
console.log(notasGeneradasAlAzar(cantidadNotas));
