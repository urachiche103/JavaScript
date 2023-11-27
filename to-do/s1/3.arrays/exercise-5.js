// Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
const firstCharacter = rickAndMortyCharacters[0];
const lastCharacter = rickAndMortyCharacters[rickAndMortyCharacters.length - 1];
console.log(firstCharacter, lastCharacter);