//* Escribir una función que dada una cadena de caracteres, devuelva:
//* c) Las palabras que comiencen con la letra ‘A’. Por ejemplo, si recibe 'Antes de ayer' debe devolver 'Antes ayer'

function DevuelvePalabrasConA(cadena) {
  let PalabrasSeparadas = cadena.split(" ");
  let PalabrasConA = [];
  let mapeoPalabras = PalabrasSeparadas.map((palabra) => {
    if (palabra.charAt(0) === "a" || palabra.charAt(0) === "A") {
      PalabrasConA.push(palabra);
    }
  });
  let respuestaPalabrasConA = PalabrasConA.join(" ");
  return respuestaPalabrasConA;
}

console.log(DevuelvePalabrasConA("Antes de ayer vine a Acapulco en avion"));
