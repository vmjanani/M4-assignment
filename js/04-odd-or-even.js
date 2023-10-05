// Odd or Even?

// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"



// Variable declared.  No Value.
let oddevenResult;

// FOR LOOP will run 15 iterations.  Each time it will determine if the 'oddevenResult' value is odd or even.  Result will display in console.
for(let i = 0; i <= 15; i++){

    oddevenResult = i % 2; 

    if (oddevenResult === 0){
        console.log(i + ' is even.');
    } else if(oddevenResult === 1){
        console.log(i + ' is odd.');
    }else{
        console.log('An error has occurred.');
    };

};




