// Do not change any of the function names

function mayuscula(nombre) {
  // 1.
  // La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  // ej: Recibe "mario" ----> Devuelve "Mario"
  // Tu código:
  let newName = nombre.toUpperCase()[0];
  newName += nombre.substring(1);
  return newName;
}

function invocarCallback(cb) {
  // 2.
  // Invoca al callback `cb`
  // Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  // 3.
  // Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  // Devolver el callback pasándole como argumentos los números recibidos.
  // Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // 4.
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Tu código:
  cb(numeros.reduce(function(acc, i) { return acc + i; }, 0));
}

function forEach(array, cb) {
  // 5.
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  // Tu código:
  array.forEach(cb);
}

function map(array, cb) {
  // 6. 
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  const newArray = array.map(cb);
  return newArray;
}

function filter(array) {
  // 7.
  // Filtrar todos los elementos del array que comiencen con la letra "a".
  // Devolver un nuevo array con los elementos que cumplen la condición
  // Tu código:
  const newArray = array.filter(function(element) {
    if(element.toUpperCase().startsWith('A', 0))
      return element;
  });
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
