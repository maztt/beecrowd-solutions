var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.replaceAll("\r", "").split('\n');

// Expected output: 3, 8, 5

let crowScreams = 0;
let sumOfBinaries = 0;

const blinksToBinaries = {
    "---": 0,
    "--*": 1,
    "-*-": 2,
    "-**": 3,
    "*--": 4,
    "*-*": 5,
    "**-": 6,
    "***": 7
}

while (crowScreams != 3) {
    for (const input of lines) {
        if (input == "caw caw") {
            crowScreams++;
            console.log(sumOfBinaries);
            sumOfBinaries = 0;
        }
        
        if (blinksToBinaries.hasOwnProperty(input)) {
            sumOfBinaries += blinksToBinaries[input] 
        }
    }
}