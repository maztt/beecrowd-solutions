var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Expected output: TOTAL = R$ 1884.58

const name = lines[0];
const salary = +lines[1];
const sales = +lines[2];
const commissionPercent = 15/100;
const totalSalary =  salary + (sales * commissionPercent);

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);