function calcular(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value

    if (num1 < num2) {
        resposta.innerHTML = "O número menor é: " + num1
    } else {
        resposta.innerHTML = "O número menor é: " + num2
    }
}