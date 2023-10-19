//* Dado un texto comprobar que el email sea valido
//* Ejemplos: comprobarEmail("robert.rodriguez.777@gmail.com")
//* Devuelve true
//* como hacerlo con expresion regular

function comprobarEmail(email) {
  const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return expresionRegular.test(email);
}

console.log(comprobarEmail("robert.rodriguez.777@gmail.com"));
