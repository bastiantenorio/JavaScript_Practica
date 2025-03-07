/*Sintáxis 

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
// switch (key) evalua la condicion de la llave
// case value: se ejcuta si key coincide con value
//break: evita que el codigo caiga en los siguientes case
//deafult: se ejecuta si ningun case coincide 

let valor
valor = parseInt(prompt('ingrese un numero entre 1 y 3'));
switch (valor) {
    case 1:
        document.writeln('usted ingreso el numero ', valor);
        break;

        case 2:
        document.writeln('usted ingreso el numero ', valor);
        break;

        case 3:
        document.writeln('usted ingreso el numero', valor);88
        break;

    default:
        document.writeln('usted ingreso un numero fuera de rango ');
        break;
}
document.write('<br>');