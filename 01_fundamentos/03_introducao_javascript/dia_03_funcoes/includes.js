let nomes=['Julio','joao','maria'];
function bomDia(pessoa) {
    if(nomes.includes(pessoa)){
        return pessoa + ', Bom dia!'
    }else{
        return 'não consta na lista de nomes'
    }
}
console.log(bomDia('Julio'));  // Julio, Bom dia!
console.log(bomDia('marta')); // não consta na lista de nomes
