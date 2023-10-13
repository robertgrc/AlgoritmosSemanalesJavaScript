// *Dos gatos y un ratón se encuentran en distintas posiciones sobre una línea. Se le darán sus posiciones iniciales. Tu tarea es determinar qué gato alcanzará primero al ratón, suponiendo que el ratón no se mueve y los gatos viajan a la misma velocidad. Si los gatos llegan al mismo tiempo, el ratón podrá moverse y escapará mientras ellos pelean.
// *Se le proporcionan q consultas en forma de x, y, que representan las posiciones respectivas para los gatos A y B, y para el mouse C. Complete la función catAndMouse para devolver la respuesta adecuada a cada consulta, que se imprimirá en una nueva línea. .
// *Si el gato A atrapa al ratón primero, imprime Gato A.
// *Si el gato B atrapa el ratón primero, imprime Gato B.
// *Si ambos gatos alcanzan al ratón al mismo tiempo, imprime Ratón C mientras los dos gatos pelean y el ratón escapa.
// *Ejemplo
// *x=2; y=5 ; z=4
// *Los gatos están en las posiciones 2 (Cat A) y 5 (Cat B), y el mouse está en la posición 4. El gato B, en la posición 5 llegará primero ya que está a solo 1 unidad de distancia mientras que el otro está a 2 unidades. Devuelve 'Gato B'.

function catAndMouse(x, y, z) {
  const distanceToCatA = Math.abs(z - x);
  const distanceToCatB = Math.abs(z - y);

  if (distanceToCatA < distanceToCatB) {
    return "Cat A";
  } else if (distanceToCatB < distanceToCatA) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

// Ejemplo de uso
const x = 2;
const y = 5;
const z = 4;

const result = catAndMouse(x, y, z);
console.log(result); // Debería imprimir 'Cat B'
