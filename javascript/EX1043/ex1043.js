var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

// Expected output: Area = 10.0

const A = +lines[0];
const B = +lines[1];
const C = +lines[2];

if (
    A + B > C &&
    A + C > B &&
    B + C > A
) { 
    const perimetro = (A + B + C).toFixed(1)
    return console.log(`Perimetro = ${perimetro}`)
}

const area = (0.5 * C * (A + B)).toFixed(1)
return console.log(`Area = ${area}`)