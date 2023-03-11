let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas'],
    bonrInfo:{
        city:'Rio de Janeiro',
        state:'RJ'
    }
};
singer['fullname']=singer.name+' '+singer.lastName;
console.log('O cantor '+singer.fullname+' nasceu no estado do '+singer.bonrInfo.state + ' Cidade '+singer.bonrInfo.city);