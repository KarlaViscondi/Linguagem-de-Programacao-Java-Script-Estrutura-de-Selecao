function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let escolha = parseFloat(document.getElementById("escolha").value)

    if (escolha == 1) {
        let media = (num1 + num2) / 2
        resposta.innerHTML = "O resultado é: " + media
    } else if (escolha == 2) {
        if (num1>num2) {
            let sub = (num1 - num2)
            resposta.innerHTML = "O resultado é: " + sub
        } else if (num2>num1) {
            let sub = (num2 - num1)
            resposta.innerHTML = "O resultado é: " + sub
        }
    } else if (escolha == 3) {
        let mult = (num1 * num2)
        resposta.innerHTML = "O resultado é: " + mult
    } else if (escolha == 4) {
        if (num2!=0) {
            let div = (num1 / num2)
            resposta.innerHTML = "O resultado é: " + div
        } else {
            resposta.innerHTML = "O segundo número é inválido "
        }
    } else {
        resposta.innerHTML = "Opção inválida"
    }
}