//* funcion recibe sueldos y determina cual es el mayor sueldo y devuelve el mismo

function CalculaSueldoMayor(sueldos) {
  let mayor = 0;
  for (let i = 0; i < sueldos.length; i++) {
    if (sueldos[i] > mayor) {
      mayor = sueldos[i];
    }
  }
  return mayor;
}

let salarios = [1500, 4500, 7000, 12000, 1000, 2000, 800, 700, 300, 4000];
let mayorSueldo = CalculaSueldoMayor(salarios);
console.log(mayorSueldo);

//* mismo ejercicio usando funciones

function CalculaSalarioMayor(sueldos) {
  return Math.max(...sueldos);
}
let salarioMayor = CalculaSalarioMayor(salarios);
console.log(salarioMayor);
