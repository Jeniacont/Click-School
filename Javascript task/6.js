//Avind o lista de studenti afisati lista studentilor doar nume/prenume si nota medie

const studenti = [ 
    {
        nume: 'Bill',
        prenume: 'Gates',
        note: [8, 9, 10, 10, 8]
    },
    {
        nume: 'Olea',
        prenume: 'Gates',
        note: [8, 9, 10, 10, 8, 10, 10]
    },
    {
        nume: 'John',
        prenume: 'Doe',
        note: [8, 9, 10, 8, 10, 5]
 
    },
    {
        nume: 'Lara',
        prenume: 'Croft',
        note: [8, 5, 10, 5, 10, 5]
 
    }];


    let afisare = arr => arr.map( el => console.log(`${el.nume} ${el.prenume} ${(el.note.reduce((a, b) => a + b, 0) / el.note.length).toFixed(2)}.`));

    afisare(studenti);

   

    