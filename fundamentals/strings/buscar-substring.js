// Pesquisar substring em uma string.
// Os métodos abaixo sempre retornam a posição do primeiro caractere do padrão informado

let message = 'Hi My name is Hi Ariyan';

// Busca da esquerda para a direita
console.log(message.search('Hi')); // out: 0
console.log(message.search(/hi/i)); // out: 0
console.log(message.indexOf('Hi')); // out: 0

// Busca da direita para a esquerda
console.log(message.lastIndexOf('Hi')); // out: 14