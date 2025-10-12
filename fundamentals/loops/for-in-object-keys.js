// Recuperar chaves de um objeto

const objs = { name: 'Jacques L\'Croix', age: 24 };

// Usando for .. in
for (let keys in objs) console.log(keys)

// Usando o método keys da classe Object
console.log(Object.keys(objs))