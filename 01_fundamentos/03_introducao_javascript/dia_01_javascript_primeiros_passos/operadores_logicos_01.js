//Operador AND - O operador “AND“ (ou &&, no JavaScript) é binário. Isso significa que ele precisa de dois elementos para funcionar corretamente.
// Para exercitar, mude os valores das variáveis. Você verá que a condição não vai ser atendida e que, portanto, a mensagem impressa será outra.

let comida = 'pão na chapa';
let bebida = 'café';

if (bebida === 'café' && comida === 'pão na chapa') {
  console.log('Muito obrigado(a) pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}