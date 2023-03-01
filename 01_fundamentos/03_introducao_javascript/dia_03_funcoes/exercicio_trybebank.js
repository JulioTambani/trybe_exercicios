function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}

console.log(cumprimentaCliente('Julio')) // Olá, Isaac. Essa é sua conta do TrybeBank

//  Desenvolva cada exercício a seguir com o uso de funções.

// Considere a variável saldo, que representa a quantia em conta de 
// determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

let saldo = 200;

function somaSaldo(valor) {
  return valor + saldo;
}

function subtraiaSaldo(valor) {
  return saldo - valor;
}

function multipliqueSaldo(valor) {
  return saldo * valor;
}

function dividaSaldo(valor) {
  return saldo / valor
}

console.log('O valor total que foi somado é de ' + somaSaldo(100));
console.log('O valor total que foi subtraido é de ' + subtraiaSaldo(50));
console.log('O valor total que foi multiplicado é de ' + multipliqueSaldo(2));
console.log('O valor total após ser dividido é de ' + dividaSaldo(5));