function sumArr(array){
    let count = 0, sum = 0;
    for (const number of array){
        if (number > 0){
            count++;
        } else {
            sum += number;
        }
    }
    return `${count} ${sum}`;
}



const array = [1, -1, 2, 3, -300];


console.log(sumArr(array))