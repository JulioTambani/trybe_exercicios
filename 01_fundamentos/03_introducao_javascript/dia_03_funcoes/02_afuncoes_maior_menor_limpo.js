function maiorMenorNumero(array) {  
    let maior = array[0];  
    let menor = array[0]; 

    for (let index=1; index<array.length;index+=1){
        if (array[index]>maior){
            maior=array[index];            
        } else if (array[index]<menor){
            menor=array[index];            
        }
    }
    return `maior: ${maior} 
menor: ${menor}`;
};
console.log(maiorMenorNumero([7, 2, 3, 1, 6, 9, 4, 5]));