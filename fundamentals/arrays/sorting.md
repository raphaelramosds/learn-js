# Ordenando listas

O método sort, sem uma função de comparação que considere números inteiros, não vai ordenar corretamente o array abaixo.

```js
const numbers = [9, 1, 10, 2, 4, 5];
console.log(numbers.sort()); // out: [1, 10, 2, 4, 5, 9]
console.log(numbers.sort((a,b) => a - b)); // out: [1, 2, 4, 5, 9, 10]
```

Logo, como visto acima, a solução é definir uma função de comparação, que retorna

- 0 caso os dois elementos sejam iguais
- -1 caso o primeiro elemento for menor
- 1 caso o segundo elemento for menor

Também podemos ordenar por uma propriedade em específico como mostrado abaixo

```js
const doctors = [
    {name: 'Kazi', age: 49},
    {name: 'Ariyan', age: 33},
    {name: 'Jack Ma', age: 12},
    {name: 'Child Ariyan', age: 1},
];
 
// Ordenar por idade ASC
doctors.sort((dA, dB) => dA.age - dB.age);
console.log(doctors);
 
// Ordenar por nome ASC
doctors.sort((dA, dB) => dA.name > dB.name ? 1 
    : dA.name < dB.name ? -1 
    : 0);
```