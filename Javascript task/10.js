function calculateArr(words){
    for (let word of words){
        let cons = 0, voc = 0;
        for (let l of word){
            if ('aeiou'.includes(l)){
                voc++;
            } else {
                cons++;
            }
        }
        console.log(`Numarul de vocale pentru ${word} - ${voc} si consoane ${cons}`);
    }
}

const Arr = ['lion', 'simba', 'king'];
calculateArr(Arr);