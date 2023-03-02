let singer ={
    name:'Milton',
    lastName:'nascimento',
    nickname:'Bituca',
    age:77,
    bestAlbuns:['Travessia','Clube da esquina','Minas'],
    bornInfo: {// o que vou fazer é atribuir com outro objeto. E dentro desse objeto eu vou ter outras propriedades. 
        city:'Rio de Janeiro',
        state:'Rio de Janeiro'
    }
};
// 1) Uma forma de acessar propriedades dentro de um objeto.
// console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' +singer.age + ' anos.');

// 2) Outra forma de acessar propriedades dentro de um onjeto. Porem usando chaves.

// console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' +singer['age'] + ' anos.');


// Criando novas propriedades de forma dinâmica.
// Criando uma propriedade chamada fullName e atribuir valor a ela.
singer['fullName'] = singer.name + ' ' +singer.lastName;
// Sai uma tabela
console.table(singer);
console.log('O cantor ' + singer.name + ' nasceu no estado do ' + singer.bornInfo.state + 'Rio de Janeiro')

