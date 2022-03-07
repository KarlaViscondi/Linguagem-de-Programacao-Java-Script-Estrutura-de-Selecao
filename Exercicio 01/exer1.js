function calcular(){
    let nota1 = document.getElementById("num1").value 
    let nota2 = document.getElementById("num2").value
    let nota3 = document.getElementById("num3").value
    let nota4 = document.getElementById("num4").value
    let soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)
    let media  = soma / 4

    if (media >= 7) {
        resposta.innerHTML = "Aprovado " + "<br/>A média é: " + media
    } else {
        resposta.innerHTML = "Reprovado " + "<br/>A média é: " + media
    }
}