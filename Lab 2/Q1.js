function CalculateSumOfDigits(number)
{
    var num = number.toString();
    var sum = 0;
    for( var i = 0; i < num.length; i++)
    {
        sum+= Number(num[i]);
    }
    return sum;
}

console.log(CalculateSumOfDigits(123));
console.log(CalculateSumOfDigits(25));