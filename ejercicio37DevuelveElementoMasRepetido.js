//* Dado un array o un texto devolver el elemento o palabras que mas aparece
//* elQueMasAparece([1,2,3,4,1])
//* elQueMasAparece("robert franz robert")
//* Devuelve:  ==> 1    ==> robert

function DevuelveMasRepetido(datos) {
  let mapeo = {};
  let masFrecuente = "";
  let valorMasFrecuente = 0;

  if (typeof datos === "string") {
    datos = datos.split(" ");
  }

  for (let elemento of datos) {
    if (mapeo[elemento]) {
      mapeo[elemento]++;
    } else {
      mapeo[elemento] = 1;
    }
  }
  //   console.log(mapeo);

  for (let elemento in mapeo) {
    if (mapeo[elemento] > valorMasFrecuente) {
      valorMasFrecuente = mapeo[elemento];
      masFrecuente = elemento;
    }
  }
  console.log(masFrecuente, valorMasFrecuente);
  return {
    mas_frecuente: masFrecuente,
    mayor_valor: valorMasFrecuente,
  };
}

console.log(DevuelveMasRepetido([1, 2, 3, 4, 1, 7, 7, 7]));
console.log(DevuelveMasRepetido("robert franz robert"));
