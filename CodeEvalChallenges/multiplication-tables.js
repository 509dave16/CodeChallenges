var lengthSpaces = ["   ","  "," ",""];
var lines = "";
for(var multiple = 1; multiple <= 12; multiple++)
{
    var multipleLine = "";
    for(var number = 1; number <= 12; number++)
    {
        var product = (multiple * number);
        var productLength = product.toString().length;
        var spaces = lengthSpaces[productLength-1];
        multipleLine += spaces + product;
    }
    lines += multipleLine + (multiple !== 12 ?  "\n" : "");
}
console.log(lines);
