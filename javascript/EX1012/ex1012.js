var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

// Expected output:
// TRIANGULO: 96.520
// CIRCULO: 725.833
// TRAPEZIO: 175.560
// QUADRADO: 108.160
// RETANGULO: 132.080

const A = +lines[0];
const B = +lines[1];
const C = +lines[2];
const pi = 3.14159;

const triangulo = (A * C) / 2;
const circulo = pi * (C * C);
const trapezio = 0.5 * (A + B) * C;
const quadrado = B * B;
const retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
