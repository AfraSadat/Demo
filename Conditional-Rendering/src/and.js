let person;

person = { name: { first: 'Afra', last: 'Sadat' } };
console.log(person && person.name && person.name.first); 

person = null; 
console.log(person && person.name && person.name.first); 

let shouldDisplay;

shouldDisplay = true;
console.log(shouldDisplay && 'Display'); 

shouldDisplay = false;
console.log(shouldDisplay && 'Display'); 