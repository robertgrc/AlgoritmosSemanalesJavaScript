function dibujarCuadrado(lado) {
  for (let i = 0; i < lado; i++) {
    let linea = "";
    for (let j = 0; j < lado; j++) {
      if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
        linea += "* ";
      } else {
        linea += "  ";
      }
    }
    console.log(linea);
  }
}

function dibujarTriangulo(lado) {
  for (let i = 0; i < lado; i++) {
    let linea = "";
    for (let j = 0; j < 2 * lado - 1; j++) {
      if (j >= lado - i - 1 && j <= lado + i - 1) {
        linea += "* ";
      } else {
        linea += "  ";
      }
    }
    console.log(linea);
  }
}

function dibujarCirculo(radio) {
  for (let i = -radio; i <= radio; i++) {
    let linea = "";
    for (let j = -radio; j <= radio; j++) {
      if (i ** 2 + j ** 2 <= radio ** 2) {
        linea += "* ";
      } else {
        linea += "  ";
      }
    }
    console.log(linea);
  }
}

const opcion = prompt(
  "Elige la figura que deseas dibujar:\n1. Cuadrado\n2. Triángulo\n3. Círculo"
);

if (opcion === "1") {
  const lado = parseInt(prompt("Ingrese el tamaño del lado del cuadrado:"));
  dibujarCuadrado(lado);
} else if (opcion === "2") {
  const lado = parseInt(prompt("Ingrese el tamaño del lado del triángulo:"));
  dibujarTriangulo(lado);
} else if (opcion === "3") {
  const radio = parseInt(prompt("Ingrese el radio del círculo:"));
  dibujarCirculo(radio);
} else {
  console.log("Opción no válida.");
}
