function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value) 

    if (num1 <=300) {
        let perc = 0.15
        let sal= (num1) + num1 * perc
        resposta.innerHTML = "O valor do salário atualizado é:" + sal
    } else if ((num1>300) && (num1<=600)) {
        let perc = 0.10
        let sal= (num1) + num1 * perc
        resposta.innerHTML = "O valor do salário atualizado é:" + sal
    } else if ((num1>600) && (num1<=900)) {
        let perc = 0.05
        let sal= (num1) + num1 * perc
        resposta.innerHTML = "O valor do salário atualizado é:" + sal
    } else {
        resposta.innerHTML = "O salário não teve reajuste!"
    }
}
