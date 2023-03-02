let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }

};
// console.log(player['name']);
// console.log(player['lastName']);
// console.log(player['age']);
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; // Ao tentar acessar uma chave inexistente, o JavaScript automaticamente criará essa chave.

console.log(player); //aqui para fazer o teste e imprimir a resolução.