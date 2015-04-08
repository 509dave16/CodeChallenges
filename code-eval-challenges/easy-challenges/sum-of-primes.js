var limit = 1000;
var number, count, sumOfPrimes, increment;
if(limit > 1)
{
    number = 3;
    sumOfPrimes = 2;
    increment = 2;
    count = 1;
}
else
{
    number = 2;
    sumOfPrimes = 0;
    increment = 1;
    count = 0;
}

for(;count < limit; number += increment)
{
    if(number !== 2 && number % 2 === 0)
    {
        continue;
    }
    
    var divisorLimit = Math.floor(number/3);
    var isDivisible = false;
    for(var divisor = 3; divisor <= divisorLimit; divisor+= 2)
    {
      if(number % divisor === 0)
      {
          isDivisible = true;   
          break;
      }
    }
    
    if(isDivisible  === false)
    {
        count++;
        sumOfPrimes = sumOfPrimes + number;
    }
}
console.log(sumOfPrimes);