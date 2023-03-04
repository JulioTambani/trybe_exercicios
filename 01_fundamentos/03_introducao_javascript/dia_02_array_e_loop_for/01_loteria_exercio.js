let lotteryNumbers = [];
let firstGame = [12, 47, 2, 31, 58, 8];

for (let index = 0; index < 6; index += 1) {
    lotteryNumbers.push(Math.ceil(Math.random() * 60));
} //
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
console.log(lotteryNumbers);
console.log(firstGame);
console.log(numberOfhits);
console.log(hits);