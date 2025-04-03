const cristal = 0.004

function conversor(){

    const valor = prompt("Digite um valor de Cristais:")

    const resultado = cristal * valor
    const qtd_cristal = valor < 2 ? "Cristal" : "Cristais"
    const qtd_real = resultado < 2 ? "Real" : "Reais"

    if (valor > 0){
        alert("Valor de Cristais: " + cristal + "\n\n" + valor + " " + qtd_cristal + " equivale a " + resultado + " " + qtd_real)
    } else {
        alert("Valor inválido")
    }

}