//* Dada una lista de nombres, utiliza map para agregar un saludo a cada nombre. Por ejemplo, convertir "Juan" a "Hola, Juan".

function Saludo(lista, saludo) {
  return lista.map((nombre) => saludo + nombre);
}

let listaNombres = ["Robert Rodriguez", "Conor Callaguer", "Cesare Casadei"];
let saludo = ["Hola, "];
let saludoFormateado = Saludo(listaNombres, saludo);
console.log(saludoFormateado);
