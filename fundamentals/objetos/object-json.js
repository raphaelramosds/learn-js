// Converter objeto em formato JSON

const user = {name : 'Raphael', age: 23};

// Serializar objeto em uma string com formatação JSON
const userJson = JSON.stringify(user);

// Comparação do objeto e da sua forma em JSON
console.log(user, typeof user)
console.log(userJson, typeof userJson)

// Converter de volta para objeto
const userObject = JSON.parse(userJson)