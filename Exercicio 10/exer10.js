function calcular(){
    let num1 = document.getElementById("num1").value 

    if (num1 <=12000) {
        let dis = 0.05
        let custo= parseFloat(num1) + parseFloat(num1 * dis)
        resposta.innerHTML = "O valor do carro é:" + custo
    } else if ((num1>12000) && (num1<=25000)) {
        let dis = 0.10
        let imp = 0.15
        let dis1 = (num1 * dis)
        let imp1 = (num1 * imp)
        let custo =  parseFloat(dis1) + parseFloat(imp1) + parseFloat(num1)
        resposta.innerHTML = "O valor do carro é:" + custo
    } else if (num1>25000) {
        let dis = 0.15
        let imp = 0.20
        let dis1 = (num1 * dis)
        let imp1 = (num1 * imp)
        let custo =  parseFloat(dis1) + parseFloat(imp1) + parseFloat(num1)
        resposta.innerHTML = "O valor do carro é:" + custo
    }
}
