/*
var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
var indexOfOla = names.indexOf('Ola');

console.log('szukana wartość znajduje się na ' + indexOfOla + ' pozycji tablicy');

console.log(names[indexOfOla]);



var values = [1, 2, 3, 4, 5, 6];
    var multipliedValues = values.map(function(value) {
    return value * 10;
});

console.log(values);
console.log(multipliedValues);

var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var namesWithoutOla = names.filter(function(name) {
    console.log('name in filter: ' + name);
    return name != 'Ola';
});

console.log(namesWithoutOla);
*/

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName ='Marian'
console.log(allNames)
if (allNames.indexOf(newName) === -1) {
		var allNames2 = allNames.push(newName);
} else {
	console.log('Imię Marian występuje w tablicy allNames');
};
console.log(allNames2); //co zrobić żeby wyświetlić zawartość tablicy??
console.log(allNames[7]);