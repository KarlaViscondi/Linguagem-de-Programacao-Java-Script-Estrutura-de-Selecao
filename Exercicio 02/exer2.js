function calcular(){
    let nota1 = document.getElementById("num1").value 
    let nota2 = document.getElementById("num2").value
    let soma = parseFloat(nota1) + parseFloat(nota2) 
    let media  = soma / 2

    if (media <=3) {
        resposta.innerHTML = "Reprovado " + "<br/>A média é: " + media
    } else if ((media >3) && (media <=7)) {
        resposta.innerHTML = "Exame" + "<br/>A média é: " + media
    } else {
        resposta.innerHTML = "Aprovado " + "<br/>A média é: " + media
    }
}