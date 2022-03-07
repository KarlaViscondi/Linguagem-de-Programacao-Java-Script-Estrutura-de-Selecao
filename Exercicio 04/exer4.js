function calcular(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value

    if ((num1<num3) && (num2<num3)) {
        resposta.innerHTML = "O número maior é: " + num3
    } else if ((num1<num2) && (num3<num2)) {
        resposta.innerHTML = "O número maior é: " + num2
    } else if ((num3<num1) && (num2<num1)) {
        resposta.innerHTML = "O número maior é: " + num1
    } else {
        resposta.innerHTML = "Tem números repetidos"
    }
}