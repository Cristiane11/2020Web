var houseNumbers =[ 123,456,345,238,089,23,0122];
document.getElementById("number1").innerHTML=houseNumbers;

function orderNumber{
    houseNumbers.sort(function(a, b){return a - b});
    document.getElementById("number1").innerHTML=houseNumbers;
}