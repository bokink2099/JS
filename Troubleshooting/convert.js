// My solution
var sec = 60;
function convert(min) {
    var result = min * sec;
    console.log(result);
}
convert(6);

// His solution
function convertMinutes(min){
    return min * 60;
}
console.log(convertMinutes(7));

// My solution
function convertUmur(age){
    return age * 365 * 24 * 60 * 60;
}
console.log(convertUmur(25));

// His solution
function convertAge(age){
    return age * 12 * 30 * 24 * 60 * 60;
}
console.log(convertAge(20));
