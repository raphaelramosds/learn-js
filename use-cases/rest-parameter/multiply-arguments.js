// Enviar quantos parametros forem necessarios
console.log(multiply(1,2,3,4,5));

// Destruturar os argumentos com o Rest Parameter (...) e multiplicar eles
function multiply(...args) {
    return args.reduce((calc, curr) => calc * curr, 1);
}