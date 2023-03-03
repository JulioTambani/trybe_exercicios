// 1) Ordene o array numbers em ordem crescente e imprima seus valores.
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// 2) Ordene o array numbers em ordem decrescente e imprima seus valores.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) { // aqui foi trocado o sinal para dar certo 
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);


// 3) Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do 
// novo array deverá ser igual ao valor correspondente no array numbers multiplicado 
// pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a
//  multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do 
//  novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte),
//   e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. 
//   Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (index < (numbers.length - 1)) { 
//     newArray.push(numbers[index] * numbers[index + 1]);
//   } else {
//     newArray.push(numbers[index] * 2);
//   }
// }

// console.log(newArray);

// 4) Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição
// for para escrever os códigos a seguir:
//Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela 
// um quadrado feito de asteriscos de tamanho n.

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine = inputLine + symbol;
// };
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   console.log(inputLine);
// };

// 5)Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo
// com 5 asteriscos de base.

// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//   console.log(inputLine);
//   inputLine = inputLine + symbol;
// };

// 6)