// bus ticket fare or bus rent expense
// FOR ELEPHANT ROAD TO SAVER

// let ticketPrice = 100;
// let age = 65;
// let student = true;

// if (age < 10) {
//     ticketPrice = 0;
// }
// else{

// }



// const age = 60; // Example age
// const isStudent = true;
// const regularFare = 800;
// let fare = regularFare;

// if (age < 10) {
//     fare = 0; 
// }

// else if (age >= 60) {
//     fare *= 0.85; 
// }

// else if (isStudent) {
//     fare *= 0.5; 
// }

// // Display the fare
// console.log("Ticket fare:", fare);



const age = 62;
const isStudent = true;
var fare = 800;


if (age < 10) {
    fare = 0; 
}
else if (isStudent) {
    fare =fare - (fare*50 /100); 
}

else if (age >= 60) {
    fare = fare - (fare*15 / 100); 
}
else{
    // random public
    fare=fare;
}
console.log(fare);