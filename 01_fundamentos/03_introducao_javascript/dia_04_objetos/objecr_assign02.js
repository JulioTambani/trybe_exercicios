let person = {
    name: 'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }