//*  Suponiendo que el primer día del año fue lunes, escribir una función que reciba un número con el día del año (de 1 a 366) y devuelva el día de la semana que le toca. Por ejemplo: si recibe '3' debe devolver 'miércoles', si recibe '9' debe devolver 'martes'.

function devuelveDiaSemana(diaDelAnio) {
  const diasSemana = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  const primerDiaDelAnio = 1;
  const dia = (primerDiaDelAnio + diaDelAnio - 1) % 7;
  return diasSemana[dia];
}

console.log(devuelveDiaSemana(3)); // Debería mostrar 'miércoles'
console.log(devuelveDiaSemana(9)); // Debería mostrar 'martes'
console.log(devuelveDiaSemana(15));
console.log(devuelveDiaSemana(16));
