function pigIt(str){
    let result = str.replace(/\b(\w)/g, "");
    return result;
    }
    const str = ('Pig latin is cool');
    console.log(pigIt(str));