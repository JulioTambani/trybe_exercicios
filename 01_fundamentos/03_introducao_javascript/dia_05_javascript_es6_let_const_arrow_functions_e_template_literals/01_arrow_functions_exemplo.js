// function contaPalavra(frase){
//     return frase.split(' ').lenght;
// }
// console.log(contaPalavra('Fala tribo, beleza?'));


// Para 1 parametro não precisa de ()

// const contaPalavra = frase => frase.split(' ').lenght;
// console.log(contaPalavra('Fala tribo, beleza?'));


// Para objetos:
// usar o ()!!!

// function objetoPessoa(nome,idade){
//     return{
//         nome:nome,
//         idade:idade
//     }
// }
// console.log(objetoPessoa('Joaquim',25));

const objetoPessoa=(nome,idade)=>({nome:nome,idade:idade}); // usar o ()!!!
console.log(objetoPessoa('Joaquim',25));