// Recuperar todos os objetos que satisfazem a condição com o método filter

const doctors = [
    {name: 'Kazi', age: 20},
    {name: 'Jack', age: 30},
    {name: 'Ariyan', age: 40},
];

// Recupera o primeiro objeto que satisfaz a condição
const result = doctors.find(function (doctor) {
    return doctor.age >= 30;
});

// Recupera todos os objetos que satisfazem a condição
const results = doctors.filter(function (doctor) {
    return doctor.age >= 30;
});