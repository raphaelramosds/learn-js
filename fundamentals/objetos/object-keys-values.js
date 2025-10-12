// Listar o nome das propriedades e os valores de um objeto

const user = {
    name: 'kazi',
    age: 40,
    isMarried: true,
    selectColor: null,
};

// Listar propriedades
console.log(Object.keys(user)); // out: name, age, isMarried, selectColor

// Listar valores
console.log(Object.values(user)); // out: kazi, 40, true, null