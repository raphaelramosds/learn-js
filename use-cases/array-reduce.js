// Uma alternativa para somar todos os valores em um array seria utilizar o método reduce

const salaries = {kazi: 2000, jackma: 3000, jon: 4000};

const values = Object.values(salaries);

const sum = values.reduce((ac, curr) => ac + curr, 0);