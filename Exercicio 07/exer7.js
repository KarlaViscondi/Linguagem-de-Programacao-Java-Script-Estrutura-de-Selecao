function calcular(){
    let num1 = document.getElementById("num1").value 

    if (num1 <500) {
        let sal = parseFloat(num1) + parseFloat(num1 * 0.30)
        resposta.innerHTML = "O salário com reajuste é: " + sal
    } else {
        resposta.innerHTML = "Não tem direito ao aumento"
    }
}