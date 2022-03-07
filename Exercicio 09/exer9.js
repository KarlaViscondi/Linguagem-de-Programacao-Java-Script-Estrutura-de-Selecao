function calcular(){
    let num1 = document.getElementById("num1").value 

    if (num1 <=200) {
        let sal = (num1 * 0.10)
        resposta.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    } else if ((num1>200) && (num1<=300)) {
        let sal = (num1 * 0.20)
        resposta.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    } else if ((num1>300) && (num1<=400)) {
        let sal = (num1 * 0.25)
        resposta.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    } else if (num1>400) {
        let sal = (num1 * 0.30)
        resposta.innerHTML = "O saldo médio é: " + num1 + "<br/>O valor de crédito é: " + sal
    }
}
