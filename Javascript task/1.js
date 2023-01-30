function CalculatorBMI (weight, height){
    return weight / height * height;
}

const Luiza = CalculatorBMI(60, 160);
const Dima = CalculatorBMI(80, 190);
const isOverBMI = Luiza>Dima ? "Luiza este mai mare decat a lui Dima" : Luiza == Dima ? "egale" : "Dima este mai mare decat a lui Luizei";
console.log(`Body Mass Index : ${isOverBMI}, valorile sunt : Luiza - ${Luiza}, Dima - ${Dima}`);
