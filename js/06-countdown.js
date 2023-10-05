// Countdown

// Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on. 

// Variable declared.  User will provide countdown value.
let i = parseInt(prompt('Enter a # to start the countdown:'));

//IF STATEMENT will determine if input is valid.
if (isNaN( i )){
    alert('That input is invalid.  Try again.');
}else if( i >=0 ){

    // FOR LOOP will take the user's value, and subtract by 1. It will display the updated value until it reaches zero.
    for( i; i >= 0; i--){
        console.log( i );
    }

}else{
    console.log('An error has occurred.');
};
