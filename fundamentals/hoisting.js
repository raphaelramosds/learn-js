// Ao declarar uma função sem ser como expression, é possível chamá-la após ou antes da linha que ela foi declarada, ou seja, ocorre hoisting.

// Definindo a função como declaration (function)

foo(); // out: true
function foo () {
    return true;
}

// Mas, nao ha hoisting se a função for definida como expression (const)

bar(); // out: TypeError: bar is not a function
const bar = function () {
    return true;
}