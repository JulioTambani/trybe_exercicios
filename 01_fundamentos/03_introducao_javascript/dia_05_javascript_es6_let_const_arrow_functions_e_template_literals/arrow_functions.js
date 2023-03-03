// Um dos motivos da criação de arrow functions é facilitar a criação e utilização de funções em JavaScript, ou seja, arrow functions são alternativas para declarar funções escrevendo menos código. Observe, a seguir, como ficaria a função printName utilizando a sintaxe da arrow function.

const printNameLucas = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printNameLucas());


// A função está sendo atribuída a uma variável do tipo const. Atribuir uma função a uma variável é muito útil para definir a função exatamente onde ela precisa ser chamada, ou seja, definir a função apenas onde se precisa dela, o que é uma boa prática, pois torna o código mais simples de entender.Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function permite simplificar ainda mais a função printName por meio da omissão do return e das chaves.

const printName = () => 'Lucas';
console.log(printName());

// Além disso, pode-se omitir os parênteses apenas em um cenário: quando a função recebe somente um argumento, como no exemplo a seguir.

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos.

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));