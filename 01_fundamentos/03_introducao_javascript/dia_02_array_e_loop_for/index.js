/*
Lidando com arrays
Considere esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1) Percorra o array imprimindo todos os valores contidos nele com a função console.log().
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index <= 9; index = index + 1) {
    console.log('Questão 1: ' + numbers[index]);
}
/*
2) Some todos os valores contidos no array e imprima o resultado.*/
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numeros.length; index += 1) {
    resultado += numeros[index];
}
console.log('Questão 2: ' + resultado);

/*
3) Calcule e imprima a média aritmética dos valores contidos no array.
4) A média aritmética é o resultado da soma de todos os elementos dividido pelo 
número total de elementos.
5) Com base no código que acabou de gerar, faça com que: caso o valor final seja 
maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, 
6) imprima a mensagem “Valor menor ou igual a 20”.
7) Utilizando for, descubra o maior valor contido no array e imprima-o.
8) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista 
nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
9) Utilizando for, descubra o menor valor contido no array e imprima-o.
10) Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
11) Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2..
dos elementos por 2.
*/