//* Implementa una función que tome un arreglo de objetos, donde cada objeto tiene una propiedad "categoria", y devuelva un nuevo arreglo que solo contenga los objetos de una categoría específica.

function filtrarPorCategoria(objetos, categoriaBuscada) {
  // Utiliza el método filter para crear un nuevo arreglo con objetos que tienen la categoría deseada
  const objetosFiltrados = objetos.filter(
    (objeto) => objeto.categoria === categoriaBuscada
  );
  return objetosFiltrados;
}

// Ejemplo de uso
const productos = [
  { nombre: "Laptop", categoria: "Electrónica" },
  { nombre: "Silla", categoria: "Muebles" },
  { nombre: "Teléfono", categoria: "Electrónica" },
  { nombre: "Mesa", categoria: "Muebles" },
  { nombre: "Libro", categoria: "Libros" },
];

const categoriaBuscada = "Libros";
const productosFiltrados = filtrarPorCategoria(productos, categoriaBuscada);

console.log(
  `Productos en la categoría "${categoriaBuscada}":`,
  productosFiltrados
);
