// Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.
const prompt = require('prompt-sync')();
console.clear();
let nota1 = +prompt('Insira a primeira nota: ');
let nota2 = +prompt('Insira a segunda nota: ');
let pond1 = 4
let pond2 = 6
let medP = [(nota1 * pond1) + (nota2 * pond2)] / (pond1 + pond2);
console.log('Sua média ponderada foi: ', medP)