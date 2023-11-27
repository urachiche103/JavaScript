// Declara 3 variables con los nombres y valores siguientes 
// 	firstName = 'Jon'; 
// 	lastName = 'Snow'; 
// 	age = 24; 
// Muestralos por consola de esta forma: 
// 	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

// let character = {firstName: 'Jon', lastName: 'Snow', age: 24};
function character(firstName, lastName, age) {
    return `Mi nombres es: ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
}

console.log(character('Jon', 'Snow', 24));

