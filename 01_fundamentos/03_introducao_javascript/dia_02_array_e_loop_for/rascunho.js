let lotteryNumbers = []; // numero aletario da loteria
let firstGame = [12, 47, 2, 31, 58, 8] // meu jogo

for (let index = 0; index < 6; index += 1) { // vai rodar 6x pq meu array está vazio
    //   console.log(`Número ${index} = ${lotteryNumbers[index]}`);
    //   console.log(Math.ceil(Math.random() * 60)); // arredonda para cima usando o Math.CEIL
    //   console.log(Math.floor(Math.random() * 60)); // arredonda para cima usando o Math.FLOOR.
    lotteryNumbers.push(Math.ceil(Math.random() * 60)); // Vou chamar meu lotteryNumbers que é um array vazio usando o push, ou seja, para cada fez que o meu for executar euirei gerar um número aleatório  "(Math.random()*60)"  vou arredondar para cima "Math.ceil(Math.random()*60)" e colocar no meu array "lotteryNumbers".

    //Comparação do sorteio com o meu jogo (mas a ordem daria na mesma)
    for (let indexLottery = 0; indexLottery<lotteryNumbers.length; indexLottery+=1) { // o primeiro for vai ser da loteria, pois vou comprar com o meu jogo. 
        for (let indexGame=0; indexGame<firstGame.length;indexGame+=1) // indexGame é o meu jogo. O indexGame vai até ele ser menor que o meu firstGame.length que é o tamanho do meu array no meu jogo e vai de 1 em 1. Eu tenho um for dentro do outro! 
    }


}
console.log(lotteryNumbers);
