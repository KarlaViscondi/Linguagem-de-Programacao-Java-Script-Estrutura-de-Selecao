function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value) 

    if (num1 <=50) {
        let perc = 0.05
        let valor = num1 + (num1 * perc)
        resposta.innerHTML = "O novo valor do produto é:" + valor
        if (valor <= 80) {
            resposta1.innerHTML = "</br>Produto Barato"
        } else if ((valor>80) && (valor<=120)){
            resposta1.innerHTML = "</br>Produto Normal"
        } else if ((valor>120) && (valor<=200)){
            resposta1.innerHTML = "</br>Produto Caro"
        } else if (valor>200){
            resposta1.innerHTML = "</br>Produto Muito Caro"
        }
    } else if ((num1>50) && (num1<=100)) {
        let perc = 0.10
        let valor = num1 + (num1 * perc)
        resposta.innerHTML = "O novo valor do produto é:" + valor
        if (valor <= 80) {
            resposta1.innerHTML = "</br>Produto Barato"
        } else if ((valor>80) && (valor<=120)){
            resposta1.innerHTML = "</br>Produto Normal"
        } else if ((valor>120) && (valor<=200)){
            resposta1.innerHTML = "</br>Produto Caro"
        } else if (valor>200){
            resposta1.innerHTML = "</br>Produto Muito Caro"
        }
    } else if (num1 > 100) {
        let perc = 0.15
        let valor = num1 + (num1 * perc)
        resposta.innerHTML = "O novo valor do produto é:" + valor
        if (valor <= 80) {
            resposta1.innerHTML = "</br>Produto Barato"
        } else if ((valor>80) && (valor<=120)){
            resposta1.innerHTML = "</br>Produto Normal"
        } else if ((valor>120) && (valor<=200)){
            resposta1.innerHTML = "</br>Produto Caro"
        } else if (valor>200){
            resposta1.innerHTML = "</br>Produto Muito Caro"
        }
    } 
}
