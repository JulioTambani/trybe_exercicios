let lotteryNumbers = []; // O número aleatório da lotérica. Array vazio pois vai gerar 6x o meu array.
let firstGame = [12, 47, 2, 31, 58, 8]; // O meu jogo.

for (let index = 0; index < 6; index += 1) { // Vai rodar 6x pq meu array está vazio. E vai colocar no lotteryNumbers usando o 'push loga abaixo'.
    //   console.log(`Número ${index} = ${lotteryNumbers[index]}`);
    //   console.log(Math.ceil(Math.random() * 60)); // arredonda para cima usando o Math.CEIL
    //   console.log(Math.floor(Math.random() * 60)); // arredonda para cima usando o Math.FLOOR.
    lotteryNumbers.push(Math.ceil(Math.random() * 60)); // Vou chamar meu lotteryNumbers que é um array vazio usando o push, ou seja, para cada fez que o meu 'for' executar eu irei gerar um número aleatório  "(Math.random()*60)"  vou arredondar para cima "Math.ceil(Math.random()*60)" usando o 'ceil' e colocar no meu array "lotteryNumbers" usando o 'push'.
}
//Comparação do sorteio com o meu jogo (mas a ordem daria na mesma.. --- sorteio com meu jogo - meu jogo com o sorteio ---)
let numberOfhits = 0; // numero de acertos, começa em zero pois nãoacertei nenhum até agora.
let hits = []; // criar uma variável chamada 'hits=[]' que é um array vazio para mostrar todos os números que foram acertados. esma lógica com o 'push' anteriormente.    
for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) { // o primeiro for vai ser da loteria, pois vou comparar com o meu jogo. indexLottery é o index da minha loteria, começa no 0 e vai até indexLoterry ser menor que o array lotterynumbers.(que agora o lotteryNumbers tem 6 numeros devido ao laço de repetição criado anteriormente)
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {// indexGame é o meu jogo. O indexGame vai até ele ser menor que o meu firstGame.length que é o tamanho do meu array no meu jogo e vai de 1 em 1. Eu tenho um for dentro do outro! 
        // Agora preciso criar a verificação, preciso perguntar se o numero da loteria for igual ao numero do jogo isso quer dizer que eu acertei (é uma condição)
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]) { // SE o meu numero lotteryNumber na posição indexLottery for estritamento igual ao numero firstGame na posição indexGame isso significa que acertei o numero, se acertei o número eufaço o q? Eu posso criar uma variável que guarda essa informação. No caso eu crio 'let numberOfhits = numero de acertos'
            // se eu entrar nesse if é pq eu acertei um numero e por isso, logo eu posso pegar o 'numberOfHits' e incrementar um (+=1). Posso tbm criar uma variavel chamada 'hits=[] array vazio' para mostrar todos os numeros que foram acertados.   
            numberOfhits += 1;
            hits.push(lotteryNumbers[indexLottery]); // Posso por tanto lotteryNumbers[indexLottery] ou firstGame[indexGame] pois são iguais. Server para mostrar todos os números que foram acertados.
        }
    }
}

// Mostra os resultados.
console.log('Números sorteados:', lotteryNumbers); // Números sorteados.
console.log('Meu jogo:', firstGame); // Meu jogo.
console.log('Quantidade de acertos:', numberOfhits); // Quantidade de acertos.
console.log('Números acertados:', hits); // Números acertados.  