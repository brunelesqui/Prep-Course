// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // 1.
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // 2.
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // 3. 
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // 4.
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // 5.
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // 6.
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // 7. 
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let phrase = '';
  for(let i = 0; i < palabras.length; i++) {
    phrase += palabras[i];
    if(i < (palabras.length - 1)) 
      phrase += " ";
  }
  return phrase;

  //return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // 8.
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    if(array[i] === elemento)
      return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // 9.
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sum = 0;
  for(let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;
}


function promedioResultadosTest(resultadosTest) {
  // 10.
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sum = 0;
  for(let i = 0; i < resultadosTest.length; i++) {
    sum += resultadosTest[i];
  }
  return sum / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // 11.
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  numeros.sort(function(a, b){return a-b});
  return numeros[numeros.length - 1];
}


function multiplicarArgumentos() {
  // 12.
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length == 0)
    return 0;

  let result = arguments[0];
  for(let i = 1; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}


function cuentoElementos(arreglo){
  // 13.
  // Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  // Escribe tu código aquí
  const REQUIREMENT = 18;
  let REQ_PASS = 0;
  for(let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > REQUIREMENT)
      REQ_PASS++;
  }
  return REQ_PASS;
}


function diaDeLaSemana(numeroDeDia) {
  // 14.
  // Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  // Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  // si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  // Escribe tu código aquí   
  const dayOfweek = ['', 'Es fin de semana', 'Es dia Laboral', 'Es dia Laboral', 'Es dia Laboral',
    'Es dia Laboral', 'Es dia Laboral', 'Es fin de semana'];
  return dayOfweek[numeroDeDia];
} 


function empiezaConNueve(n) {
  // 15.
  // Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  // inicia con 9 y false en otro caso.
  // Escribe tu código aquí
  const INIT = '9';
  let nString = n.toString();
  if(nString[0] == INIT)
    return true;
  return false;
}


function todosIguales(arreglo) {
  // 16.
  // Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  // retornar true, caso contrario retornar false.
  // Escribe tu código aquí  
  let EQUAL_TO = arreglo[0];
  for(let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] != EQUAL_TO)
      return false;
  }
  return true;
} 


function mesesDelAño(array) {
  // 17.
  // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const MONTHS = ['Enero', 'Marzo', 'Noviembre'];
  const flags = [0, 0, 0];
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    for(let j= 0; j < MONTHS.length; j++) {
      if(array[i] == MONTHS[j]) {
        newArray.push(array[i]);
        flags[j] = true;
      }
    }
  }
  for(let i = 0; i < flags.length; i++) {
    if(!flags[i])
      return "No se encontraron los meses pedidos";
  }

  return newArray;
}


function mayorACien(array) {
  // 18.
  // La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  // valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArray = [];
  const MAJOR = 100;
  for (let i = 0; i < array.length; i++) {
    if(array[i] > MAJOR)
      newArray.push(array[i]);
  }
  return newArray;
}


function breakStatement(numero) {
  // 19.
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array. 
  // Devolver el array
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  // devolver: "Se interrumpió la ejecución"
  // Pista: usá el statement 'break'
  // Tu código:
  const LIMIT = 10;
  let i = 0;
  let newArray = [];
  do {
    numero += 2;
    newArray.push(numero);
    if(numero == i) {
      break;
    }
  } while(++i < LIMIT);
  if(numero == i)
    return "Se interrumpió la ejecución";

  return newArray;
}


function continueStatement(numero) {
  // 20. 
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array.    
  // Devolver el array
  // Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  // Pista: usá el statement 'continue'
  // Tu código:
  const LIMIT = 10;
  const PASS = 5;
  let i = 0;
  let newArray = [];
  do {
    if(i == PASS) {
      continue;
    }
    numero += 2;
    newArray.push(numero);
  } while(++i < LIMIT);

  return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
