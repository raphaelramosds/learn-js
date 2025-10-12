// A cópia de um objeto no Javascript pode ser feita com o método assign da classe Object

const user = {
    name: 'Kazi',
    age: 40
}

// Trazer as propriedades de user para o objeto vazio {}
const userCopy = Object.assign({}, user);