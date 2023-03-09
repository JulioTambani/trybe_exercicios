//Imagine novamente que você está em uma padaria e que pede um café. Dessa vez, se não tiver café, você indica para a pessoa atendente que pode ser um suco de laranja. Como escreveríamos isso em JavaScript?

let bebidaPrincipal = 'caf';
let bebidaAlternativa = 'ssuco de laranja';

if (bebidaPrincipal === 'café' || bebidaAlternativa === 'suco de laranja') {
    console.log("Obrigado(a) por me atender :D")
} else {
    console.log("Ei, eu não pedi isso!");
}

// erros colocados para dar mensagem diferente