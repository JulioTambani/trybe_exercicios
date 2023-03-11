// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {
  nome: 'Julio',
  email: 'juliotambani@gmail.com',
  telefone:41991468720,
  github:'JulioTambani',
}
console.log(student);

let newKey='linkedIn';
let linkedIn='www.linkedin.com/in/julionmelo';

function addProperty(object,key,value){
  object[key]=value;
};
addProperty(student,newKey,linkedIn);
console.log(student);