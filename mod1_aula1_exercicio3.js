//Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
const prompt = require('prompt-sync')();
console.clear();
console.log('Vamos descobrir quantos dias você já viveu neste pálido ponto azul? Para tanto, insira a quantidade de anos, meses e dias que você viveu até o momento.');
console.log();
let anos = +prompt('Quantos anos você tem? ');
let meses = +prompt('Quantos meses restaram? ');
let dias = +prompt('Quantos dias restaram? ');
let total = [(anos * 365) + (meses * 30) + dias];
console.log(`Você viveu ${total} dias até o momento.`);