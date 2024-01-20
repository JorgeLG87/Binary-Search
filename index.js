// THE FOLLOWING ALGORITHM SEARCHES FOR A GIVEN INTEGER. LET'S ASUME WE WOULD LIKE TO CHECK IF A NUMBER UNDER 100 IS PRIME 
// OUR ARRAY WOULD CONTAIN ALL THE PRIME NUMBERS UNDER 100

let primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]


// THE LENGTH OF THE ARRAY IS 25. WHICH MEANS THAT WORST CASE SCENARIO TIME COMPLEXITY WOULD BE O(Log 25) = 4.6439. 
// GIVEN THIS INPUT, WE SHOULD BE ABLE TO FIND THE NUMBER IN 5 ATTEMPTS MAX.


function isPrime(array, num) {
    // WE INITIALIZE OUR LOW AND HIGH VARIABLES

    let min = 0;
    let max = array.length - 1;
    // let counter = 0;    

    // NEXT WE USE A WHILE LOOP TO ITERATE

    while (min <= max) {
        // WE INITIALIZE THE "GUESS" VARIABLE
        let guess = Math.floor((min+max)/2);

        // WE THEN USE AN IF - ELSE STATEMENT TO RETURN THE INDEX IF THE ELEMENT IS FOUND, OR DIVIDE THE ARRAY IN 2

        if (array[guess] === num) {
            // counter++;
            console.log(counter);
            return guess;
        } else if (num < array[guess]) {
            // counter++;
            max = guess - 1;
        } else {
            // counter++;
            min = guess + 1;
        }
    }
    // IF WE GET OUT OF THE LOOP WITHOUT FINDING THE TARGET WE RETURN -1
    // console.log(counter);
    return -1;
}


console.log(isPrime(primeArray, 100));