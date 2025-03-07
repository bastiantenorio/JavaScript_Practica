// Metodos de tipo strink

let palabra = 'javascript';
document.writeln('El texto es: ', palabra, '<br>')

// Tamaño de un texto
document.writeln('Extracción de caracteres: ', palabra.length, '<br>')

// Extraccion de caracteres usando slice y unos parametors d eentrada para sacar ls primeros 4 caracteres
document.writeln('Extracción de caracteres: ', palabra.slice(0,4), '<br>')

// Extraccion de los ultimos 3 cracteres con indice negativo
document.writeln('Extracción de caracteres: ', palabra.slice(-3), '<br>')

// extraccion de caracteres utilizando el metodo subtrig
document.writeln('Extracción de caracteres: ', palabra.substring(0,5), '<br>')

// ambiar texto de una variable
let saludo = 'Hola a todos';
document.writeln(saludo, '<br>')

saludo = saludo.replace('Hola a todos', 'adios a todos');
document.writeln(saludo, '<br>')

// Convertir un texto en mayusculas sonstenidas
document.writeln(palabra.toUpperCase(), '<br>')

// Convertir un texto en minusculas sonstenidas
document.writeln(palabra.toLowerCase(), '<br>')

// Unir un texto con otro 
let texto = 'Bienvenidos al curso deeeeeeeeeeeee '
document.writeln(texto.concat(palabra), '<br>')

// Elimina espacios en blanco
let textoEspaciado = 'Que tal perrrrrrrrrraaaaaasssss        uuuuuuuuuuu    eeeeeeeeeeee';
document.writeln(textoEspaciado, '<br>')
document.writeln(textoEspaciado.trimStart(), '<br>')

// Cantidades de caracteres de una palabra
document.writeln(palabra.split('script'), '<br>')
document.writeln(palabra.split('java'), '<br>')