function getDiscountedPrice(price, discount)
{
    if (isNaN(price) || isNaN(discount))
        return "Invalid input. Enter numbers only for the price and the discount";
    if (discount  > 1) return "Invalid discount amount. Enter a value less than 1.";
    if (discount < 0 || price < 0) return "Invalid input. Price and discount must be positive numbers.";
    else return price*discount;
}

console.log(getDiscountedPrice(1,2));
console.log(getDiscountedPrice(120,0.2));
console.log(getDiscountedPrice(120,"0.2"));
console.log(getDiscountedPrice(120,"esraa"));
console.log(getDiscountedPrice(30,-1));

