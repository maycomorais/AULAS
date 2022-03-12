//Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer, o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.
const prompt = require('prompt-sync')();
console.clear();
let peca1 = prompt('Qual peça você deseja? ');
let qpec1 = +prompt('Quantas unidades você deseja? ')
let vpec1 = 2.95
let peca2 = prompt('Qual a segunda peça você deseja? ');
let qpec2 = +prompt('Quantas unidades você deseja? ')
let vpec2 = 9.95
let total1 = qpec1 * vpec1
let total2 = qpec2 * vpec2
let total3 = total1 + total2
console.log(`O valor unitário de ${peca1} é de R$ ${vpec1}., O valor unitário de ${peca2} é de R$ ${vpec2},`);
console.log();
console.log(`NOTA FISCAL`);
console.log();
console.log(`PRODUTO --- UNIDADES --- VALOR UNITÁRIO --- VALOR`);
console.log();
console.log(`${peca1} ----- ${qpec1} ---------- ${vpec1} ---------- R$ ${total1}`);
console.log();
console.log(`${peca2} ----- ${qpec2} ---------- ${vpec2} ---------- R$ ${total2}`);
console.log();
console.log(`TOTAL ------------------------------------ R$${total3}`);