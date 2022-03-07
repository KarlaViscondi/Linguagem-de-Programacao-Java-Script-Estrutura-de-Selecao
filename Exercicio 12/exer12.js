function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value) 

    if (num1 <=350) {
        let grat = parseFloat(100)
        let imp = 0.07
        let sal_imp = num1 * imp
        let sal= num1 + grat - sal_imp
        resposta.innerHTML = "O valor do salário atualizado é:" + sal
    } else if ((num1>350) && (num1<600)) {
        let grat = parseFloat(75)
        let imp = 0.07
        let sal_imp = num1 * imp
        let sal= num1 + grat - sal_imp
        resposta.innerHTML = "O valor do salário atualizado é:" + sal
    } else if ((num1>=600) && (num1<=900)) {
        let grat = parseFloat(50)
        let imp = 0.07
        let sal_imp = num1 * imp
        let sal= num1 + grat - sal_imp
        resposta.innerHTML = "O valor do salário atualizado é:" + sal
    } else if (num1 > 900) {
        let grat = parseFloat(35)
        let imp = 0.07
        let sal_imp = num1 * imp
        let sal= num1 + grat - sal_imp
        resposta.innerHTML = "O salário não teve reajuste!"
    }
}
