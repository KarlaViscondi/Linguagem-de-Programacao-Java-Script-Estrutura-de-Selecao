function calcular(){
    let num1 = document.getElementById("num1").value 

    if (num1 <=300) {
        let sal = parseFloat(num1) + parseFloat(num1 * 0.35)
        resposta.innerHTML = "O salário com reajuste é: " + sal
    } else {
        let sal = parseFloat(num1) + parseFloat(num1 * 0.15)
        resposta.innerHTML = "O salário com reajuste é: " + sal
    }
}