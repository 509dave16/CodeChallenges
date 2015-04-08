var primePalindrome;
for(var number = 999; number > 0; number-= 2)
{
    if(number !== 2 && number % 2 === 0)
    {
        continue;
    }
    
    var digits = "" + number;

    if(digits.length !== 1)
    {
        var nextDigit = digits.length % 2 === 0 ? 0 : 1;
        var mid = Math.floor(digits.length/2);
        var firstHalfDigits = digits.slice(0,mid);
        var secondHalfDigits = digits.slice((mid+nextDigit), digits.length);
        secondHalfDigits = secondHalfDigits.split("").reverse().join("");
        if(firstHalfDigits !== secondHalfDigits)
        {
            continue;
        }
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
        primePalindrome = number;
        break;
    }
}
console.log(primePalindrome);