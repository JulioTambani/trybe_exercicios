let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Percorra o array imprimindo todos os valores contidos nele com a função console.log().

// for (let index=0;index<numbers.length;index+=1){
//     console.log(numbers[index]);
// }

// 2- Some todos os valores contidos no array e imprima o resultado.
// let num1 = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     num1 = num1 + numbers[index]
// }
// console.log(num1);

// 3-Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let resultado = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }
// console.log(resultado/numbers.length);

// 4- Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

// let resultado = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }

// if ((resultado / numbers.length) > 20) {
//     console.log('Valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }

// 5 - Utilizando for, descubra o maior valor contido no array e imprima-o.
// let maiorValor = numbers[0]
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorValor) {
//         maiorValor = numbers[index];
//     }
// }
// console.log(maiorValor);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

// let number = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2!== 0) {
//         number += 1;
//     }
// }
// if (number == 0) {
//     console.log('sem valor impar');
// } else {

//     console.log(number);
// }

// 7 - Utilizando for, descubra o menor valor contido no array e imprima-o.

// let menorNumero = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < menorNumero) {
//         menorNumero = numbers[index];
//     }
// }
// console.log(menorNumero);

// 8 - Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

// for (let index = 1; index <= 25; index += 1) {
//     console.log(index);
// }

// 9 -Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

// for (let index = 1; index <= 25; index += 1) {
//     console.log(index / 2);
// }