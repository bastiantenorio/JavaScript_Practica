let a, b, c, d, sum, rest, mult, div, resid, potenc;

// pedir datos al usuario
a = prompt('ingrese el primer valor: ')
b = prompt('ingrese el segundo valor: ')

// sumar
sum = a + b;
rest = a - b;
mult = a * b;
div = a / b;
resid = a % b;
potenc = a ** b;

// Mostrar resultado sin parseo
document.writeln('El resultado de la suma es: ', sum)
document.writeln('<br>');
document.writeln('El resultado de la resta es: ', rest)
document.writeln('<br>');
document.writeln('El resultado de la multiplicación es: ', mult)
document.writeln('<br>');
document.writeln('El resultado de la división es: ', div)
document.writeln('<br>');
document.writeln('El resultado del residuo es: ', resid)
document.writeln('<br>');
document.writeln('El resultado de la potencia es: ', potenc)
document.writeln('<br>');

// Pedir datos al usuario pero en caso de que estmos dividiendo número hay que parsear o convertirlos en el dato correcto pora que no de un error por el operador.
document.writeln('<br>');

c = parseFloat(prompt('Ingrese el primer valor: '))
d = parseFloat(prompt('Ingrese el primer valor: '))

sum = c + d;
rest = c - d;
mult = c * d;
div = c / d;
resid = c % d;
potenc = c ** d;

// Mostrar resultado con parseo
document.writeln('El resultado de la suma es: ', sum)
document.writeln('<br>');
document.writeln('El resultado de la resta es: ', rest)
document.writeln('<br>');
document.writeln('El resultado de la multiplicación es: ', mult)
document.writeln('<br>');
document.writeln('El resultado de la división es: ', div)
document.writeln('<br>');
document.writeln('El resultado del residuo es: ', resid)
document.writeln('<br>');
document.writeln('El resultado de la potencia es: ', potenc)
document.writeln('<br>');