// *Claro, aquí tienes la traducción al español:

// *Dos amigos, Anna y Brian, están decidiendo cómo dividir la cuenta en una cena. Cada uno solo pagará por los elementos que consumen. Brian recibe la factura y calcula la parte que Anna debe pagar. Debes determinar si su cálculo es correcto.

// *Por ejemplo, supongamos que la factura tiene los siguientes precios: factura=[2,4,6]. Anna decide no comer el artículo k=factura[2], que cuesta 6. Si Brian calcula la factura correctamente, Anna pagará (2+4)/2=3. Si incluye el costo de factura[2], calculará (2+4+6)/2=6. En el segundo caso, debería reembolsarle 3 a Anna.

// *Descripción de la función

// *Completa la función "bonAppetit" en el editor de abajo. Debería imprimir "Bon Appétit" si la factura se divide de manera justa. De lo contrario, debería imprimir la cantidad entera de dinero que Brian le debe a Anna.

// *"bonAppetit" tiene los siguientes parámetros:

// *"bill": un array de números enteros que representan el costo de cada artículo ordenado.
// *"k": un número entero que representa el índice basado en cero del artículo que Anna no come.
// *"b": la cantidad de dinero que Anna contribuyó a la factura.

function bonAppetit(bill, k, b) {
  // Calcular la suma total de la factura excluyendo el ítem k
  let totalBill = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      totalBill += bill[i];
    }
  }

  // Calcular la cantidad que debería pagar Anna
  const annaShare = totalBill / 2;

  if (b === annaShare) {
    console.log("Bon Appétit");
  } else {
    const refund = b - annaShare;
    console.log(refund);
  }
}

// Ejemplo de uso:
const factura = [2, 4, 6];
const k = 2; // El índice del artículo que Anna no quiere pagar
const b = 6; // La cantidad que Anna pagó

bonAppetit(factura, k, b);
