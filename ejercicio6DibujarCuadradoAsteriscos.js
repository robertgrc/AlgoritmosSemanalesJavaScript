//* Dibujar un cuadrado hueco con asteriscos
//* La funcion debe recibir el tamano del lado a dibujar con asteriscos *

function lado(numero) {
  let lado = "";
  for (let i = 0; i < numero; i++) {
    lado += "*";
  }
  return lado;
}

function cuadrado(numero) {
  let dibujo = lado(numero) + "\n";
  let contenido = "";
  for (let i = 0; i < numero - 2; i++) {
    contenido = "*";
    for (let x = 0; x < numero - 2; x++) {
      contenido += " ";
    }
    contenido += "*";
    dibujo += contenido + "\n";
  }
  dibujo += lado(numero);
  return dibujo;
}

console.log("dibujo:", console.log(cuadrado(7)));
