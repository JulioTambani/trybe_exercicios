/*Utilize if/else para escrever um código que defina três números em variáveis 
e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código 
deve retornar false.
Bônus: use somente um if.*/


let a = 3;
let b = 2;
let c = 4;
let resposta = false;

if (a % 3 === 0 || b % 3 === 0 || c % 3 === 0) {
    resposta = true
}
console.log(resposta);