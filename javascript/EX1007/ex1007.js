var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.replaceAll("\r", "").split('\n');

// Expected output: DIFERENCA = 86

const checarSeOInputTemLetras = lines.join("").match(/[a-z]/i)
if (checarSeOInputTemLetras) {
    console.log("Insira somente números.")
    return;
}

const A = lines[0];
const B = lines[1];
const C = lines[2];
const D = lines[3];
const diferenca = (A * B - C * D);

console.log(`DIFERENCA = ${diferenca}`);