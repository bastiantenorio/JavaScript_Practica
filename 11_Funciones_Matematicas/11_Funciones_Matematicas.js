/*  Las funciones matematicas se utilizan con la clase math. Esta clase contiene funciones matematicas que perimiten realizar operaciones dentro del codigo 
*/

// Redondear cifras
var precio = Math.round(399.53);
document.writeln('Precio redondeado: ', precio, '<br>');

var precio = Math.round(399.43);
document.writeln('Precio redondeado: ', precio, '<br>');

// Covierte el valor a un entero
var precio = Math.ceil(299.83);
document.writeln('Valor convertido a entero: ', precio, '<br>');

var precio = Math.ceil(299.23);
document.writeln('Valor convertido a entero: ', precio, '<br>');


var precio = Math.floor(240.93);
document.writeln('Valor convertido a entero: ', precio, '<br>');

var precio = Math.floor(540.28);
document.writeln('Valor convertido a entero: ', precio, '<br>');

// Calcular el seno de un ángulo
var seno = Math.sin(45);
document.writeln('Seno de un ángulo 45 grados: ', seno, '<br>');

// Calcular el coseno
var coseno = Math.cos(45);
document.writeln('coseno de un ángulo 45 grados: ', coseno, '<br>');

// Calcular la tangente
var tangente = Math.tan(45);
document.writeln('Tangente de un ángulo 45 grados: ', tangente, '<br>');

var expo = Math.exp(2);
document.writeln('El exponencial Calculado de 2 es: ', expo, '<br>');

var expont = Math.pow(4,2);
document.writeln('El exponente calculado es: ', expont, '<br>');

var logaritmo = Math.log(10);
document.writeln('El logaritmo de 10 es: ', logaritmo, '<br>');

var absoluto = Math.abs(-10)
document.writeln('El valor absoluto de -10 es: ', absoluto, '<br>');

var maximo = Math.max(10, 50, 600, 1, 9)
document.writeln('El maximo de una secuencia numerica es: ', maximo, '<br>');

var minimo = Math.min(10, 50, 600, 1, 9)
document.writeln('El minimo de una secuencia numerica es: ', minimo, '<br>');

var aleatorio = Math.random();
document.writeln('El valor aleatorio es: ', aleatorio, '<br>');
var aleatorio = Math.random(5,6); //aleatorio pero en un rango
document.writeln('El valor aleatorio es: ', aleatorio, '<br>');
var aleatorio = Math.round(Math.random()*5); 
document.writeln('El valor aleatorio es: ', aleatorio, '<br>');

var raiz = Math.sqrt(81)
document.writeln('La raiz de 81 es: ', raiz, '<br>');