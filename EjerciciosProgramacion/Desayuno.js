//* Realiza un programa que calcule el precio de un desayuno. El programa preguntará primero qué ha tomado el usuario de comer: palmera, donut o pitufo. La palmera vale 14.5 € y el donut 10 €. En caso de tomar pitufo, 16.5 €. Por último se pregunta por la bebida:  zumo o café a 11.5 y 14.2 respectivamente

function PrecioDesayuno(desayunos) {
  let precioComida = 0;
  let precioBebida = 0;
  let preciosDesayuno = desayunos.map((desayuno) => {
    switch (desayuno.comida) {
      case "palmera":
        precioComida = 14.5;
        break;
      case "donut":
        precioComida = 10;
        break;
      case "pitufo":
        precioComida = 16.5;
        break;
      default:
        console.log("Dato de comida invalido");
    }
    switch (desayuno.bebida) {
      case "cafe":
        precioBebida = 11.5;
        break;
      case "zumo":
        precioBebida = 14.2;
        break;
      default:
        console.log("Dato invalido de Bebida");
    }
    console.log(`precio de Bebidas: ${precioBebida}€`);
    console.log(`precio de Comidas: ${precioComida}€`);
    return precioBebida + precioComida;
  });
  return preciosDesayuno;
}

// Ejemplo de uso
const desayunos = [
  { comida: "palmera", bebida: "zumo" },
  { comida: "donut", bebida: "cafe" },
];

let preciosDesayunos = PrecioDesayuno(desayunos);
console.log(
  `El precio todal del desayuno es de: ${preciosDesayunos[0].toFixed(2)}`
);
console.log(
  `El precio todal del desayuno es de: ${preciosDesayunos[1].toFixed(2)}`
);
