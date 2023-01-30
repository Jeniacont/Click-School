let isPolindrom = (string) => string.toString().split('').reverse().join('') == string;

const arr = [];
for (let i = 0; i <= 10000; i++) {
    if(isPolindrom(i)) {
        arr.push(i)
    }
}   

console.log(arr);