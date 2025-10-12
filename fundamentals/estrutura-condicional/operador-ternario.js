const grade = 10;

// Operador ternário simples
const approved = grade > 6 ? 'Aproved' : 'Reproved';

// Operador ternário com mais de uma condicional
const mark = grade <= 5 ? 'Low'
    : grade <= 7 ? 'Average'
        : grade <= 10 ? 'High'
            : NaN;