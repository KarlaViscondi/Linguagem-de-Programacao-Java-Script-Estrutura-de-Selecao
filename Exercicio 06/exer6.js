function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let escolha = parseFloat(document.getElementById("escolha").value)

    if (escolha == 1) {
        let elevado = (num1 ** num2)
        resposta.innerHTML = "O resultado é: " + elevado
    } else if (escolha == 2) {
        let raiz1 = Math.sqrt(num1)
        let raiz2 = Math.sqrt(num2)
        resposta.innerHTML = "A raiz quadrada do 1º número é: " + raiz1.toFixed(2) + "</br>A raiz quadrada do 2º número é: " + raiz2.toFixed(2)
    } else if (escolha == 3) {
        let raiz1 = Math.cbrt(num1)
        let raiz2 = Math.cbrt(num2)
        resposta.innerHTML = "A raiz cúbica do 1º número é: " + raiz1.toFixed(2) + "</br>A raiz cúbica do 2º número é: " + raiz2.toFixed(2)
    } else {
        resposta.innerHTML = "Opção inválida"
    }
}