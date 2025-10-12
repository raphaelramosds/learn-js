// Utilizando o método splice, é possível remover do início, do fim e de qualquer posição

const numbers = [12, 13, 14, 17, 18];
const newNumbers = [1, 3, 5];
const numbersLength = numbers.length;

// Quantidade de elementos para remover
const quantity = 1;

// Remover do final
numbers.splice(numbersLength-1, quantity); // ou numbers.pop()

// Remover do início
numbers.splice(0, quantity); // ou numbers.shift()

// Remover do meio
numbers.splice(numbersLength/2-1, quantity);