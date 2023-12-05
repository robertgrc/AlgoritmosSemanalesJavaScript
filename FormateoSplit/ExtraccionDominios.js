//* Dada una lista de direcciones de correo electrónico en formato "usuario@dominio.com", utiliza map para crear una nueva lista que contenga solo los dominios de cada dirección de correo.

function obtieneDominio(listaCorreos) {
  const dominios = listaCorreos.map((correo) => correo.split("@")[1]);
  return dominios;
}

let correos = ["cameron@dominio.com", "mada@gmail.com", "lambert@hotmail.com"];

let dominios = obtieneDominio(correos);
console.log(dominios);

//* lo mismo pero mostrando los dominios mas el @

function obtieneDominioV2(listaCorreos) {
  const dominios = listaCorreos.map((correo) => `@${correo.split("@")[1]}`);
  return dominios;
}

let correos2 = ["cameron@dominio.com", "mada@gmail.com", "lambert@hotmail.com"];

let dominios2 = obtieneDominioV2(correos2);
console.log(dominios2);

//* devuelve lo que esta antes del @

function obtieneDominioV3(listaCorreos) {
  const antesDominios = listaCorreos.map((correo) => correo.split("@")[0]);
  return antesDominios;
}

let correos3 = ["cameron@dominio.com", "mada@gmail.com", "lambert@hotmail.com"];

let dominios3 = obtieneDominioV3(correos2);
console.log(dominios3);
