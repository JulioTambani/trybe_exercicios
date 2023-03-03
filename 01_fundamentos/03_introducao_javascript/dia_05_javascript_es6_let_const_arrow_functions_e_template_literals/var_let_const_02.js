// Nesse exemplo, tem - se acesso à variável userAge dentro e fora do bloco de código.Experimente trocar o var por let e const.Qual é o resultado?Você tem acesso à variável declarada com o var dentro e fora do escopo do bloco.No entanto, não tem acesso à userAge fora do bloco de código quando utilizar let e const para declarar essa variável.Isso é interessante quando se quer trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código.Por ter um escopo mais abrangente, declarar variáveis com o var em aplicações mais complexas pode confundir até mesmo programadores mais experientes.

if (true) {
    // inicio do escopo do if
    var userAge = '20';
   //let userAge = '20';
   //const userAge = '20';

    console.log(userAge); // 20
    // fim do escopo do if
}
console.log(userAge); // 20