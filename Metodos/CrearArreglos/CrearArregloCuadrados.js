// Crear un arreglo de los cuadrados de los números del 1 al 5
const arreglo2 = Array.from({ length: 5 }, (_, index) => (index + 1) ** 2);
console.log(arreglo2); // Resultado: [1, 4, 9, 16, 25]

//*  Claro, desglosemos la expresión (_, index) => (index + 1) ** 2):

//*  (_, index): Esto utiliza la desestructuración de argumentos. El guion bajo _ se utiliza para indicar que no se va a utilizar el primer parámetro (es simplemente ignorado), y index es el segundo parámetro que se asigna a la variable index. Esto es común cuando estás utilizando un método o función que proporciona varios parámetros, pero solo necesitas uno de ellos.

//*  (index + 1): Aquí, se está tomando el valor del índice y se le suma 1. Esto se hace para ajustar el índice a partir de 0 a un rango que comienza desde 1. Por ejemplo, si estás trabajando con un arreglo y quieres que los elementos se numeren desde 1 en lugar de desde 0.

//* ** 2: Esto es el operador de exponente. Eleva el resultado de (index + 1) al cuadrado. En este caso, está calculando el cuadrado de cada número resultante del paso anterior.

//*  En resumen, la expresión (index + 1) ** 2 está calculando el cuadrado del índice incrementado en 1. Este tipo de expresión se podría utilizar en un contexto donde necesitas calcular algún valor basado en el índice de un arreglo, como en la creación de un arreglo de cuadrados de números.
