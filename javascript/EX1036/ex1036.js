var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

// Expected output:
// R1 = -0.02466
// R2 = -19.68408

const A = lines[0];
const B = lines[1];
const C = lines[2];
const delta = (B * B) - (4 * A * C);

if (A != 0 && delta > 0) {
    const R1 = (-B + Math.sqrt(delta)) / (2 * A);
    const R2 = (-B - Math.sqrt(delta)) / (2 * A);
    
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
    return;
}

return console.log("Impossivel calcular");