/*Condicionales

Las condicionales son funcionalidades que permiten manejar la toma de decisiones en la ejecucion del codigo, Estas decisiones se basan en evaluar si una o mas condiciones son verdaderas o falsas, es decir, si se cumplen ciertas situaciones, parametros o condiciones especificas. Ahora bien, dpendiendo del resultado de esta evaluacion, el programa ejecutara un conjunto especifico de instrucciones.

Por ejemplo, se puesde verificar si se cumple una condicion determinada (como si una variable tiene valor especifico) y, segun el resultado, el programa ejecutara un conjunto de instrucciones u otro
*/

// Condicional If(){}else{}
let nombre, edad;
nombre= prompt('Ingrese su nombre...');
edad=prompt('Ingrese su edad...');
edad=parseInt(edad);

// La condicion if evalua si la edad del usuario es mayor o igual a 18.
if(edad>=18) {
    //Si esta condicion se cumple el sistema puede responder de la siguiente manera
    document.write(nombre, ' eres mayor de edad') 
}else{
    // La condicion else evalua en este caso que el usuario no sea mayor ni igual a 18. Tambien evalua que el usuario no coloque ningun dato.
    document.write(nombre, ' eres menor de edad')
}
document.write('<br>');

// Otra forma de hacerlo y controlar de mejor el flujo es el seguiente
// Condicional If(){}else{}
let Nombre, Edad;
Nombre=prompt('Ingrese su nombre...');
Edad=prompt('Ingrese su edad');
Edad=parseInt(Edad);// Convertimos el tipo de dato a entero para que la validacion de la condicion funcione correctamente

// La condicion if evalua si la edad del usuario es mayor o igual a 18
if (Edad >=18) {
    // Si esta condicion se cmple el sistema puede responder de la siguiente manera
    document.write(Nombre, ' eres mayor de edad');
}else{
    if(edad < 18){
        document.write(Nombre, ' eres menor de edad');
    }else{
        // La condicion else evalua si el usuario no ingreso ningun dato.
    document.write('No ingresaste ni tu nombre ni tu edad')
    }
}
    