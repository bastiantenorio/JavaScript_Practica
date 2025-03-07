/*
var en javascript, se utiliza para declarar variables y su alcance puede ser global o dentro de una función, dependiendo de donde se declare.

Las variables declaradas con var se elevan (hosting), lo que significa que su declaraicon se mueve al inicio del contexto en el que se encuentra (Glabal o de Función).

Una variable declarad con var puede ser re-declarada y re-iniicializada sin causa errores.. aunque esto puede generar errores innecessarios.
*/

var nombre; // se declara la variable
nombre = 'dhaniel'// se inicializa la variable
var apellido = 'Martinez'

//// En javascript las intrucciones son case sensitive y esto significa que son sensibles a mayúsculas a minúsculas

var Nombre; // se declara la variable
Nombre = 'Kesly'// se inicializa la variable
var Apellido = 'Otero'

var _nombre = 'Bach';
var NOMBRE = 'Chistina';
var $_NoMbre = 'Splinter';

document.writeln(nombre);
document.writeln(Nombre);
document.writeln(apellido);
document.writeln(Apellido);
document.writeln(_nombre);
document.writeln(NOMBRE);
document.writeln($_NoMbre);

// let en javascript, es otra forma de declarar variables. A diferencia de var. las variables declaradas con let tienen alcance de bloque, lo que significa que solo son accecibles dentro del bloque de código donde se declaran.

// Ejemplo: dentro de un if, for, etc. Además let no permite la re-declaración de la misma variable dentro del mismo bloque.

// Si intentas acceder a una variable declarada con let anetes de su inicializacion obtendrás un error.

let saludo = 'hola';
let Saludo = 'Hola';
let _saludo = '_hola';
let SALUDO = 'HOLA';
let $_Saludo = '$ Hola';

document.writeln(saludo);
document.writeln(Saludo);
document.writeln(_saludo);
document.writeln(SALUDO);
document.writeln($_Saludo);