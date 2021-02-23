// Array ---------------------
// My solution
let samsi = ['banana', 'apel','anggur'];
console.log(samsi[2]);

// His solution
function getItems(items){
        return items[0];

}
let buah = ['banana', 'aple', 'anggur'];

console.log(getItems(buah))

// Function (convert)----------------
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

// Function (add numbers)-----------------

// Function solusi urng
function numbers (num1, num2){
    var result = num1 + num2;
    console.log(result);
}
numbers(2,5);

//Jawaban ti itu
function addNumbers(num1,num2){
    return num1 + num2;
}
console.log(addNumbers(2,5));

// Function (Conditional)----------
// My solution
function bagusAtauJelek(movie){
    if (movie <= 6){
        hasil = "jelek";
        console.log(hasil);
    }
    else if ((movie > 6) && (movie <= 10)){
        hasil = "Bagus";
        console.log(hasil);
    }
    return movie;
}
bagusAtauJelek(2);
// His solution
function goodOrBad(movie){
    let result;
    if (movie >=7){
        result = 'Good movie'
    }
    else {
        result = 'Bad movie'
    }
    return result;
}
// console.log(goodOrBad(7));
// console.log(goodOrBad(4));
// console.log(goodOrBad(9));
// console.log(goodOrBad(2));

// Check if a string is empty
function string(some_string){
    if (some_string == ""){
        return true
    }
    else{
        return false
    }
}
console.log(string('Hello'));
console.log(string(''));

// Find the minumum & Maximum numbers
function findMin(numbers){
    // Find min ([5,2,5,6,10])
    let minimum = numbers [0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]< minimum){
            minimum = numbers[i]
        }
    }
    return minimum
}
console.log(findMin([5,2,5,6,10]))

function findMax(numbers){
    // Find max ([5,2,5,6,10])
    let maximum = numbers [0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i]> maximum){
            maximum = numbers[i]
        }
    }
    return maximum
}
console.log(findMax([5,2,5,6,10]))

// Making list movie based on tier ratings.
function sortMovies(numbers){
    // sortMovies([5,8,7,10,2,3])
    // know max AND it's index

    // Find max
    for (let j = 0; j < numbers.length - 1; j++){

        let maximum = numbers[j];
        let max_location = [j];

        for (let i = j; i < numbers.length; i++){
            if (numbers[i]> maximum){
                // Know max And it;s index (location)
                maximum = numbers[i]
                max_location = i
            }
        }
        // Swap the first and the last
        numbers[max_location] = numbers[j]// --> 10
        numbers[j]= maximum
    }
    return numbers
}

console.log(sortMovies([5,8,7,10,2,3]))
console.log(sortMovies([5,8,1,14,20,2,7]))

// Others solution -------------------------------

function findMaxhelper(numbers, start){
    let maximum = numbers [start];
    let max_location = start

    for (let i = start; i < numbers.length; i++){
        if (numbers[i]> maximum){
            maximum = numbers[i]
            max_location = i
        }
    }
    return {max_number: maximum, max_index: max_location}
}

function sortBestWithHelper(numbers){
    // run as many times as there are items
    for (let j = 0; j < numbers.length - 1; j++){

        // Find max number and max location starting from j
        max = findMaxhelper (numbers, j)
        max_num = max['max_number']
        max_location = max ['max_index']

        // swap the first and max item in an array
        numbers[max_location] = numbers[j]
        numbers[j] = max_num
    }
    return numbers
}

console.log(sortMovies([5,8,7,10,2,3]))
console.log(sortMovies([5,8,1,14,20,2,7]))






