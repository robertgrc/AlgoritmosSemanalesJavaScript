//* Dados dos numeros devolver los resultados de las operaciones basicas entre ellos( suma, resta, producto, division)
//* ejemplo Calculadora(5,5)
//* devuelve
//* La suma es 10
//* La resta es 0
//* La division es 1
//* La multiplicacion es 25

function calculadora(numero1, numero2) {
  let resultado = `
                    la suma es: ${numero1 + numero2}
                    la resta es: ${numero1 - numero2}                   
                    la multiplicacion es: ${
                      numero1 * numero2
                    }                   
                    la division es: ${numero1 / numero2}                   
                  `;
  return resultado;
}

console.log(calculadora(7, 7));
