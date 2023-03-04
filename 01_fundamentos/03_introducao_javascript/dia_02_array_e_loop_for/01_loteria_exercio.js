let lotteryNumbers = [];
let firstGame = [12, 47, 2, 31, 58, 8];


// Nesta parte foi criado uma forma de não gerar número que já existe.


for (let index = 0; index < 6; index += 1) {
    let randomNumber=(Math.ceil(Math.random() * 60)); // declaro uma let randomNumber que é os meus números aletatórios ( descrito em (Math.ceil(Math.random() * 60)) )
    if (!lotteryNumbers.includes(randomNumber)){   // Usando includes, server para perguntar se dentro do meu array 'lotteryNumber' ele vai incluir tal valor? E ai vai me responder se sim ou não. Eu vou perguntar se ele inclui o 'randomNumber' que foi gerado em cima  'Se' o meu array lotteryNumbers 

    // (Math.ceil(Math.random() * 60)) Eu vou gerar um número aleatório.
    // randomNumber , eu vou guardar esse número aleatório.
    // if (lotteryNumbers.includes(randomNumber  serve para perguntar se o número que existem em cima, ela já existe nesse array? Então eu quero que seja gerado outro. 
    // Mas eu uso uma negação com exclamação para dizer que não existe.
    // if (!lotteryNumbers.includes(randomNumber 
    // Se esse meu número não existir no meu LotteryNumbers, eu faço o 'push'
    // Não inclui?, não tem? Ai eu coloco..
    // o Else (e se tiver?), se ele  entra no else é pq o numero ele tem no meu array, já existe, está repetido.
    // Se está repetido, eu vou láno meu for e diminuo ,ou seja, ele vai entrar novamente e vai repetir o processo de for. E ele vai repetir até ele não incluir. (o index -=1 serve para ele tirar, não contar essa vez. eu qeuero que ele conte novamente. Eu ignoro essa rodada.) 
    
        lotteryNumbers.push(randomNumber);
}else{
    index-=1;
}
} 
let numberOfhits = 0;
let hits = [];
for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
            numberOfhits += 1;
            hits.push(lotteryNumbers[indexLottery]);
        }
    }
}
console.log('Números sorteados:', lotteryNumbers);
console.log('Meu jogo:', firstGame);
console.log('Quantidade de acertos:', numberOfhits);
console.log('Números acertados:', hits);