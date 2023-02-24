/*
Lidando com arrays
Considere esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1) Percorra o array imprimindo todos os valores contidos nele com a função console.log().

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index <= 9; index = index + 1) {
    console.log('Questão 1: ' + numbers[index]);
}

2) Some todos os valores contidos no array e imprima o resultado.
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numeros.length; index += 1) {
    resultado += numeros[index];
}
console.log('Questão 2: ' + resultado);


3) Calcule e imprima a média aritmética dos valores contidos no array. 
A média aritmética é o resultado da soma de todos os elementos dividido pelo 
número total de elementos.
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numeros.length; index += 1) {
    resultado += numeros[index];
}
console.log('Questão 3: '+resultado/numeros.length);


4) Com base no código que acabou de gerar, faça com que: caso o valor final seja 
maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, 
imprima a mensagem “Valor menor ou igual a 20”.

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numeros.length; index += 1) {
    resultado += numeros[index];
}
let mediaAritmetica= resultado/numeros.length;

if(mediaAritmetica>20){
    console.log('Valor maior que 20')
}else{
    console.log('Valor menor ou igual a 20')
}


5) Utilizando for, descubra o maior valor contido no array e imprima-o.

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numeros[0]; //falo q o maior numero é o primeiro.
for (let index = 1; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero) {
        maiorNumero = numeros[index]
    }
}
console.log(maiorNumero);

6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista 
nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    resultado += 1;
  }
}

if (resultado === 0) {
  console.log('Não tem valor ímpar');
} else {
  console.log(resultado);
}



7) Utilizando for, descubra o menor valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}

console.log(menorValor);


8) Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);


9) Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2..
dos elementos por 2.
*/
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

