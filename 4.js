// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

const valorSP = 67836.43
const valorDoMes = 438173.77

function calcPercentual(valorEstado, fatMensal) {
    let calc = Math.round((valorEstado/fatMensal)*100)

    return console.log(calc+"%")
}

calcPercentual(valorSP, valorDoMes)