//1
const Dog = {
    nume : 'Rudy',
    rasa : 'Dobermann',
    culoareaParului : 'Negru',
    anulNasterii : 2020,
    vaccine : [],
    pasaport : 'Da',
    virsta : () => {return 2022 - Dog.anulNasterii}
}


Dog.descriere = () => {
    return ` Numele cainelui> ${Dog.nume}\n Rasa> ${Dog.rasa}\n Culoarea parului> ${Dog.culoareaParului}\n Anul nasterii> ${Dog.anulNasterii}\n Vaccine> ${Dog.vaccine}\n Pasaport> ${Dog.pasaport}`;
 }


console.log(Dog.descriere());
//2
console.log(` Cainele are virsta de> ${Dog.virsta()} ani`);
//3
Dog.vaccine.push('hepatită canină');

console.log(` !!! Atentie istoricul actualizat sa pus vaccina ${Dog.vaccine}`);
//4
Dog.vacanta = () => {return Dog.pasaport==='Da'?" Puteti pleca peste hotare, va dorim vacanta placuta.":" Imi pare rau, dar nu puteti pleca."};

console.log(Dog.vacanta());

//5

Dog.dataVaccine = ['15.11.2022'];

console.log(` !!! Atentie istoricul actualizat sa pus vaccina ${Dog.vaccine} pe data ${Dog.dataVaccine}`);
//6
Dog.resVaccine = () => {return Dog.vaccine.length===0?" Rudy nu a făcut niciun vaccin până acum":` Rudy a facut vaccinul ${Dog.vaccine} pe date de - ${Dog.dataVaccine}`};

console.log(Dog.resVaccine());