let numberOne = Number(prompt("Digite o primeiro numero:"))
let numberTwo = Number(prompt("Digite o Segundo numero:"))
let operacao = prompt("Digite a operação desejada:")

switch(operacao){
    case "+":
        result = numberOne + numberTwo;
        alert("O resultado foi: " + result);
    break
    case "-":
        result = numberOne - numberTwo;
        alert("O resultado foi: " + result);
    break
    case "*":
        result = numberOne * numberTwo;
        alert("O resultado foi: " + result);
    break
    case "/":
        result = numberOne / numberTwo;
        alert("O resultado foi: " + result);
    break
    case "%":
        result = numberOne % numberTwo;
        alert("O resultado foi: " + result);
    break
    default:
        alert("Operação invalida");
}

if((result % 2) == 0){
    alert("O resultado da operação é um numero par")
}else{
    alert("O resultado da operação é um numero impar")
}

if(numberOne == numberTwo){
    alert("Os numeros digitados são iguais")

}else{
    alert("Os numeros digitados são diferentes")
}
