let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

//É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro adicionando 1 à soma.

