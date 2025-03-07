/* array y arreglos

Un Array es una estructura de datos que se utiliza para alamacenar una coleccion ordenada de elementos: estos elementos pueden ser cadenas de texto, valores numericos, valores booleanos, entre otros. Igualmente podria ser un conjunto de funciones e inclusive otros arrays.

Cracteristicas de los Arrays en Javascript:
1. Contienen indices numericos. (un array almacena elementos en posiciones numericas llamadas indices, siendo el primer elemento la posicion o indice 0, el segundo elemento corresponde al indice 1, el tercer elemento corresponde al indice 2, y asi sucesivamente).
2. Longitud dinamica. (Pueden crecer o reducirse dinamicamente en funcion de la cantidad de elementos que contenga).
3. Tienen heterogeneidad. (Contienen elementos de diferentes tipos de datos en la misma estructura; numeros, cadenas entre otros).
*/
// Declaracion de un array vacio
let numeros =[];
// llenar array con elementos, cada elemento dentro de un array se separa con coma.
numeros=[15,80,650,50.30,-10];
document.write('Elementos: ', numeros);
document.write('<br>');
// Tambien un array puede crarse directamente sin declarar let es decir directamente.
Numeros=[5,10,15,30,-3,84];
document.write('Elementos: ', Numeros)
document.write('<br>');

//Visualizar uno o alguno de los elementos del array segun parametro o indice indicado.
document.write('Elemento discriminado: ', numeros[3])
document.write('<br>');
document.write('Elemento discriminado: ', Numeros[0])
document.write('<br>');

// Cambiar un elemento del array indicando el indice de posicion y /o ubicacion existente y el valor del elemento a cambiar.
numeros [3]=84;
document.write('Cambio de un elemento: ', numeros)
document.write('<br>-----------------------------');
document.write('<br>');


// Array con valores de tipo texto o string
let frutas = ['Manzanas','Peras','Mandarinas','Naranjas','Kiwi'];
document.write('Diversas frutas: ', frutas);
document.write('<br>');

// Metodos de los Array

// Ver cantidad de elementos
document.write('Cantidad: ', frutas.length);
document.write('<br>');

// Conocer ultimo elemento del array
/* El .lenth da la cantidad total de elementos del array, si se le antepone el menos uno, como resultado el sistema busca la cantidad completa de elementos y le resta uno yendo a la posicion final de los elementos asi:
Numeros = [5,10,15,30,-3,84];
La variable Numeros contiene 6 elementos donde sus indices van del 0 al 5, por lo tanto, al contar los elementos obtendremos 6 -1 - 5 obteniendo como resultado la posicion 5 del indice que sera igual a 84
*/
document.write('Ultimo elemento: ', Numeros[Numeros.length-1]);
document.write('<br>');

// Formantear tipo de datos en una array de tipo entero a string o texto
document.write('Convertir en cadenas de texto: ', numeros.toString());
document.write('<br>');

// Unir tipos de array en la funcion .concat
let letras = ['a','b','c',];
let numero = [1,2,3];
document.write('Alfanumerico: ', letras.concat(numero));
document.write('<br>');

// Eliminar el ultimo elemento de un arrayutilizando la funcion .pop
numeros.pop();
document.write('Elementos: ', numeros);
document.write('<br>');

// Agregar un elemennto al final de un array utilizando la funcion .push y el elemento a agregar al final de array.
numeros.push(-5);
document.write('Elementos: ', numeros);
document.write('<br>');

// Eliminar el primer elemento de un array utilizando la funcion .shift
numeros.shift();
document.write('Elementos: ', numeros);
document.write('<br>');

// Insertar un elemento al inicio de un array utilizando la funcion .unshift y el elemento a agregar al inicio del array. Obviamente cambia el orden de los indices del array.
numeros.unshift(12);
document.write('Elementos: ', numeros);
document.write('<br>');

//Eliminar elementos a apartir de un parametro especifico de ubicacion o indice en un Array. El primer parametro recibe la posicion y el segundo parametro recibe la cantidad de elementos a eliminar. en este caso la variable nuemros contiene los siguientes elementos: 12,80,650,84,-5 por lo tanto el resultado es 12,-5 dado que, elimina 3 elementos desde la posicion 1.
numeros.splice(1,3);
document.write('Elementos: ', numeros);
document.write('<br>');

//Copiar elementos de un Array con la funcion .slice recibe dos parametros el primero el indice o ubicacion del elemento y el segundo parametro la cantidad de elementos a mostrar con excepcion del ultimo.
let cantidades = [100,200,500,600,900];
let copia = cantidades.slice(1,4);// En este caso el resultado es 200,500,600 y el 900 que es el 4 elemento no es mostrara. 
document.write('Copia de un array: ', copia);
document.write('<br>');

// Funcion .sort organiza los elementos de un array alfabeticamente
let abecedario = ['A','X','Z','C','D','B','R','S','W','K','T',];
document.write(abecedario);
document.write('<br>');
document.write(abecedario.sort());
document.write('<br>');

// Funcion .reverse organiza los elementos de un array alfabeticamento pero en inversa; es decir, al reves del ultimo al primero.
document.write(abecedario.reverse());
document.write('<br>');

// Crear un array con valores inalterables, para ello se utiliza la palabra reservada const que seria constante y esta no puede ser alterada en sus elementos definidos.
const autos = ['BMW','Audi','Chevrolet','Mazda','Ferrari','Ford',];
document.write('Automoviles: ', autos);
document.write('<br>');

// Intentar reeplazar un valor del array autos
// autos - [0]='Campero';
// document.write('Automoviles: ', autos);
// document.write('<br>');