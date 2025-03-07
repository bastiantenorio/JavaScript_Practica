/*
Operadores lógicos
 */

let a, b;
a=20;
b=30;

document.writeln(a == b, '<br>');

// Operador && (y). Las condicionales deben cumplirse para retornar true de lo contrario retornará false.

let nacionalidad, edad;

nacionalidad= prompt('Ingrese su País: ');
edad=prompt('Ingrse su edad: ');

if (nacionalidad == 'Colombia' && edad >= 18){
    document.writeln('Eres una persona de nacionalidad ', nacionalidad)
}else {
    document.writeln('Mo eres una persona Colombiana ', nacionalidad)
}
document.writeln('<br>');

// Operador || (o)
let dia, mes, anio;

// Solicitar el dia, mes, y año y verificar que los valores sean numéricos
dia = prompt('Ingrese el dia: ')
mes = prompt('Ingrese el mes: ')
anio = prompt('Ingrese el año: ')

// Convertir los valores a enteros
dia = parseInt(dia);
mes =parseInt(mes);
mes =parseInt(anio);

// Validamos que los valores ingresados sean números válidos
if (isNaN(dia) || isNaN(mes) || isNaN(anio)){
    alert('Ingrese números ')
}else if (mes ==1 || mes ==2 || mes ==3){
    document.writeln('Pertenece al primer trimestre del año')
}else{
    document.writeln('No pertenece al primer trimestre del año')
}
document.writeln('<br>');