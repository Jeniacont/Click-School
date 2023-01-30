//3. Pentru tabloul dat, filtrați toate elementele care încep cu den sau se termină cu ly
// let items = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\n', 'dent']

let items = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\n', 'dent', 'lolya', 'fly\t', '\ndentist']

let regexptotal = (/ly$|ly\s$|^den|^\sden|^\d\sden/gi)

const result3 = items.filter(item => !item.match(regexptotal));

console.log(result3);