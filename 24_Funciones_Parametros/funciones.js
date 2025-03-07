let total

function suma(valor1, valor2){
    valor1=parseInt(prompt("Ingrese el primer numero:"))
    valor2=parseInt(prompt("Ingrese el segundo numero:"))
    total= valor1+valor2
    document.write((`El resultado es ${total} <br>`))
}

suma();