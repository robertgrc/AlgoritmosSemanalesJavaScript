//* Dada una lista de direcciones en formato "calle, ciudad", utiliza map para cambiar el formato de cada dirección a "ciudad - calle".

function CambiaFormatoDireccion(lista) {
  return lista.map((direccion) => {
    const [calle, ciudad] = direccion.split(", ");
    console.log("calle", calle, "ciudad", ciudad);
    return `${ciudad}, ${calle}`;
  });
}

let direcciones = [
  "sigloXX, cochabamba",
  "av peru, cochabamba",
  "murillo, La Paz",
  "rosaleda, Santa Cruz",
];

let direccionFormateda = CambiaFormatoDireccion(direcciones);
console.log(direccionFormateda);
//expected ==> ['cochabamba, sigloXX', 'cochabamba, av peru', 'La Paz, murillo', 'Santa Cruz, rosaleda']
