// Looping a Triangle

// Write a loop that displays the following triangle within a console window:

// #
// ##
// ###
// ####
// #####
// ######
// #######



// Variable declared with starting value. Starting value needed otherwise value read as UNDIFINED.
let triangle = '#';

// FOR LOOP will add an addtional '#' for each iteration. 
for(let i = 0; i < 7; i++) {
    console.log(triangle);

    triangle += '#';
    
};


