// O método slice possibilita extrair uma substring dado a posição inicial e final na string em que esse método foi chamado

const message = 'Hi My Name Is Ariyan';

// Extração da esquerda para a direita
console.log(message.slice(0, 2)); // out: Hi

// Extracação da esquerda para a esquerda
console.log(message.slice(-2)); // out: an

// Diferença entre substring e substr:

// Recupere a substring que começa em 2 e termina em 10
console.log(message.substring(2, 10));

// Recupere uma substring de tamanho 10 que inicie em 2
console.log(message.substr(2, 10));