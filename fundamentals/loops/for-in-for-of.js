let numbers = [8.3, 2.5, 7.2, 0.2, 9.2];

// Em listas, o for..in é utilizado para iterar nos índices do array
for (let index in numbers) console.log(index); // out: 0 1 2 3 4

// Enquanto que o for..of itera sobre os valores
for (let val of numbers) console.log(val); // out: 8.3  2.5 7.2 0.2 9.2