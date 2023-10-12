// * Enunciado: Crea una función que sume 2 números y retorne su resultado pasados unos segundos.
// * - Recibirá por parámetros los 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.
// * - Si el lenguaje lo soporta, deberá retornar el resultado de forma asíncrona, es decir, sin detener la ejecución del programa principal. Se podría ejecutar varias veces al mismo tiempo.

function sumaConRetraso(a, b, segundos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = a + b;
      resolve(resultado);
    }, segundos * 1000);
  });
}

async function main() {
  try {
    const resultado = await sumaConRetraso(3, 5, 2);
    console.log("La suma es:", resultado);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

main();
