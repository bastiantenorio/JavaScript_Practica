/* Los tipos de datos son las distintas definicines o posibilidades que tenemos para almacenar datos en nuestras variables.
     
Cuando declaramos una variable y la iniciamos, le estamos asignando un valor y ese valor tiene un tipo de dato bien sea tipo: entero, decimal, caracter, booleano e incluso, puede ser una lista, una estructura entre otros.  */

let nombre = 'Kesly'; //  Variable de tipo string
let cantidad =55; // Variable de tipo entero (int)
let precio = 10.85; // variable de tipo decimal
let verdadero  = true; //Variablede tipo booleanoo
let falso  = false; //Variablede tipo booleanoo
let nulo = null; // Variable de tipo nulo

document.writeln(nombre);
document.writeln('<br>');

document.writeln(cantidad);
document.writeln('<br>');

document.writeln(precio);
document.writeln('<br>');

document.writeln(verdadero);
document.writeln('<br>');

document.writeln(falso);
document.writeln('<br>');

document.writeln(nulo);
document.writeln('<br>');

//  Javascript también maneja tipo  de datos objetc. Esto signica que, es un tipo de dato que puede contener propiedades y métodos.

let persona = {nombre:'sebastian', edad: 38, estatura:1.68, sexo:'Masculino'};

document.writeln(persona.nombre) // Para traer el contenido de la variable persona se debe llamar a la variable y seguido colocar el pundo dado que es de punto objetc e inmediatamente dirá que tipo de dato desea ver para asignarlo
document.writeln('<br>');

document.writeln(
'nombre: ', persona.nombre, ' ', '<br>',
'Estatura: ', persona.estatura, ' ', '<br>',
'Edad: ', persona.edad, ' ', '<br>',
'Genero: ', persona.sexo,  
); //concatenacion y separador de cadena vacío y salto de línea con <br>.