function maiorMenorNumero(array) { // O 'maoirMenorNumero é o nome da minha função. O 'array' será o meu parâmetro que são valores que serão lidos pela minha função.
    // Chamei de 'array', mas posso chamar com qualquer nome.
    let big = array[0]; // Meu maior número. Recebe a primeira posição do array.  
    let small = array[0]; // Meu menor número. Recebe a primeira posição do array.

    for (let index=1; index<array.length;index+=1){ //  Vou começar do primeiro número pois eu já peguei o valor '0' em cima, no 'let big = array[0]' e no 'let small = array[0];'        
        if (array[index]>big){ // Pergunto SE o meu elemento 'array[index]' for maior que o elemento 'big' significa que ele é maior.
            // Começa assim: Eu estou no index[1], então eu no número 2 .Vai perguntar se 2 é maior que 7 ? Pergunta assim: (array[index]>big). 2 não é maior que 7, então ele não entra como valor em 'big=array[index]'. Se for, por ex 9 é maior que 7, então 7 recebe 9, desta forma a minha variavel que é 'big' é reatribuida e vira o valor de 9.
            big=array[index]; // Se for maior o meu elemento 'big', ele passa então a receber o valor de array[index]           
        } else if (array[index]<small){ // Aqui eu pergunto se é menor valor e vou reatribuir o valor.
            small=array[index];            
        }
    }// Uso do 'return' para trazer alguma coisa. 
    return `maior: ${big} 
menor: ${small}`;
};
console.log(maiorMenorNumero([7, 2, 3, 1, 6, 9, 4, 5])); // preciso colocar o console.log para aparecer o valor.

//32 min