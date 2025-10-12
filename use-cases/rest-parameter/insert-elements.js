// Utilizando o método splice com o Rest Parameter, é possível inserir no início, no fim e em qualquer posição

const numbers = [12, 13, 14, 17, 18];
const newNumbers = [1, 3, 5];
const numbersLength = numbers.length;

// Inserir no final
numbers.splice(numbersLength, 0, ...newNumbers); // ou numbers.push(...newNumbers)

// Inserir no começo
numbers.splice(0, 0, ...newNumbers); // ou numbers.unshift(...newNumbers);

// Inserir no meio
numbers.splice(numbersLength/2-1, 0, ...newNumbers);