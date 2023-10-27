var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Expected output: Sao Paulo

const DDD = +lines[0];

let CodeNumbers = {
    61: "Brasilia",
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte"
}

return CodeNumbers.hasOwnProperty(DDD) 
? console.log(CodeNumbers[DDD]) 
: console.log("DDD nao cadastrado")