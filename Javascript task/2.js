function calculateTips(amount, percent){
    return amount * percent;
   }
   
   const amount = 40, percent = (amount>50 && amount<800)?0.15:(amount>800)?0.20:0;
   const result = calculateTips(amount, percent);
   console.log(`Nota de plata ${amount}, tips este de ${percent*100}% si achitat este ${amount-result}`)