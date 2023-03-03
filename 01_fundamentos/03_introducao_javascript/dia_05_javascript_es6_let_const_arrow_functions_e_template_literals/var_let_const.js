// Tente rodar a função userInfo em seu editor de código. Nesse caso, a variável 
// userEmail foi declarada dentro do escopo da função userInfo. Agora, experimente mover
//  o console.log(userEmail) para fora da função e a execute novamente. Você verá um erro 
//  que relata que userEmail não é definida – a variável só é reconhecida dentro do 
//  escopo da função. O que aconteceria se você trocasse o let por var e const? Não 
//  deixe de fazer esse teste! Você verá que, nos três casos, não se tem acesso à variável
//   fora do escopo da função userInfo. Então, como saber qual expressão utilizar para 
//   declarar variáveis?

function userInfo() {
  // let userEmail = 'maria@email.com';
  // var userEmail = 'maria@email.com';
  // const userEmail = 'maria@email.com';
  
  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//  console.log(userEmail);
} 
console.log(userEmail);

userInfo();

