/* 1.Pentru tabloul dat, filtrați toate elementele care nu conțin e .
let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'] */


let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];
const result = items.filter(item => !item.includes('e'));
console.log(result);