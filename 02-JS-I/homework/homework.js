// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// 1. 
// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hello";

// 2. 
// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3.1416;

// 3. 
// Crea una variable booleana:
const nuevoBool = true;

// 4. 
// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// 5. 
// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// 6. 
// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // 1. 
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // 2. 
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}

function resta(x, y) {
  // 3. 
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}

function multiplica(x, y) {
  // 4. 
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}

function divide(x, y) {
  // 5. 
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}

function sonIguales(x, y) {
  // 6. 
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y)
    return true;

  return false;
}

function tienenMismaLongitud(str1, str2) {
  // 7. 
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length == str2.length)
    return true;

  return false;
}

function menosQueNoventa(num) {
  // 8. 
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  const NINETY = 90;
  if(num < NINETY)
    return true;

  return false;
}

function mayorQueCincuenta(num) {
  // 9. 
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  const FIFTY = 50;
  if(num > FIFTY)
    return true;

  return false;
}

function obtenerResto(x, y) {
  // 10.
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}

function esPar(num) {
  // 11.
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 == 0)
    return true;

  return false;
}

function esImpar(num) {
  // 12.
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return !esPar(num);
}

function elevarAlCuadrado(num) {
  // 13.
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  // 14.
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3);
}

function elevar(num, exponent) {
  // 15.
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  // 16.
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // 17.
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  // 18.
  // Generar un número al azar entre 0 y 1 y devolverlo
  // Pista: investigá qué hace el método Math.random()
  return Math.random();
}

function esPositivo(numero) {
  // 19.
  // La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  // Si el número es positivo, devolver ---> "Es positivo"
  // Si el número es negativo, devolver ---> "Es negativo"
  // Si el número es 0, devuelve false
  if (numero > 0)
    return "Es positivo";
  else if (numero < 0)
    return "Es negativo";
    else
      return false;
}

function agregarSimboloExclamacion(str) {
  // 20.
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  // 21.
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

function obtenerSaludo(nombre) {
  // 23.
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + agregarSimboloExclamacion(nombre);
}

function obtenerAreaRectangulo(alto, ancho) {
  // 24.
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}


function retornarPerimetro(lado){
  // 25.
  // Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  // Escribe tu código aquí
  const SIDE_SQUARE = 4;
  return SIDE_SQUARE * lado;
}


function areaDelTriangulo(base, altura){
  // 26.
  // Desarrolle una función que calcule el área de un triángulo.
  // Escribe tu código aquí
  return (base * altura) / 2;
}


function deEuroAdolar(euro){
  // 27.
  // Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  // como parámetro un número de euros y calcule el cambio en dólares.
  // Escribe tu código aquí
  const EXCHANGE_RATE = 1.2;
  return euro * EXCHANGE_RATE;
}


function esVocal(letra){
  // 28.
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  // Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  // que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  // Escribe tu código aquí
  if (letra.trim().length == 1) {
    switch (letra.toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u': return "Es vocal";
      default:  
    }  
  }
  
  return "Dato incorrecto";
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
