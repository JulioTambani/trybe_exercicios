let lotteryNumbers = [];

for (let index = 0; index < 6; index += 1) { // vai rodar 6x pq meu array está vazio
    //   console.log(`Número ${index} = ${lotteryNumbers[index]}`);
    //   console.log(Math.ceil(Math.random() * 60)); // arredonda para cima usando o Math.CEIL
    //   console.log(Math.floor(Math.random() * 60)); // arredonda para cima usando o Math.FLOOR.


    lotteryNumbers.push(Math.ceil(Math.random() * 60)); // Vou chamar meu lotteryNumbers que é um array vazio usando o push, ou seja, para cada fez que o meu for executar euirei gerar um número aleatório  "(Math.random()*60)"  vou arredondar para cima "Math.ceil(Math.random()*60)" e colocar no meu array "lotteryNumbers".
}
    console.log(lotteryNumbers);
