const jsonData = require('./dados.json')

var inArray = jsonData.map(function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
});
console.log(inArray);

const maxFaturamento = jsonData.reduce(function(prev, current) { 
	return prev.valor > current.valor ? prev : current; 
});

const minFaturamento = jsonData.reduce(function(prev, current) { 
	return prev.valor < current.valor < 0  ? prev : current; 
});

console.log(maxFaturamento);
console.log(minFaturamento);


function media(valor, dias) {
    return console.log("Esta é a média de valor de todos os dias somados: " + Math.round(valor / dias))
}

media(438173, 30) //valor de todos os dias juntos e a quantidade de dias no mês, assim teremos a média


let sum = 0
for (let i = 0; i < 30; i++) {
   sum += jsonData[i].valor  
   console.log((sum))
}
return Math.round(sum)

//resultado do faturamento de todos os dias é 438.173

