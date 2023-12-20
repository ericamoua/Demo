// //Practice loops 
// console.log('Hello World');

// for (let counter = 4; counter <= 6; counter ++){
//     console.log(counter);
// }

// for (let counter = 2; counter >= 2; counter ++){
//     console.log(counter);
// }

// for (let counter = 9; counter >= 5; counter ++){
//     console.log(counter);
// }

// for (let counter = 0; counter <= 10; counter++){
//     console.log(counter);
// }

// for (let myNum = 2; myNum >=1; myNum--){
//     console.log(myNum);
// }

// /*for (let myName = 'Erica'; myName + myAge = 24){
//     console.log(myName, myAge);
// }*/

// //correct loop 

// let myName = 'Erica';
// let myAge = 24;

// while (myAge == 24) {
//     console.log(myName, myAge);
//     break;
// }

// //reverse loops 

// for (let reverseLoop = 7; reverseLoop >= 0; reverseLoop--){
//     console.log(reverseLoop);
// }

// // looping in arrays 

// const myfavoriteAnimal = ['dog', 'cat', 'chicken', 'cow'];

// for (const element of myfavoriteAnimal){
//     console.log(element);
// }

// //nested for loops in arrays 


// //while loops

// //forEach method
// const myPetsName = ['dabin', 'kiki', 'dabi']
// myPetsName.forEach(petsName => console.log(`My pet name is ${myPetsName}.`));

// //.map() method 
// const myKidsAge = [12, 11, 15, 21];
// const ageDifference = myKidsAge.map(num => myAge -25);

// console.log(ageDifference);

// //.findIndex()


//object 

let employee = {
    firstName: "Lana",
    lastName: "Moua",
    educationLevel: 12,
    criminalHistory: null,
    clockOutTime: "4pm",
    clockTime: function() {
        console.log(this.firstName + " " + this.lastName + ' clocks in at 8am ' + `and clocks out at ${this.clockOutTime}.`);
    }
}

let starbucks = {
    employee1: {
        firstName: "Jim",
        lastName: "Saom",
        age: 18,
        dateOfBirth: "december 19th 1999",
        educationLevel: 9,
        address: "1833 long creek club drive, Charlotte NC 28256",
    }, 
    employee2: {
        firstName: "Dee",
        lastName: "Rony",
        age: 28,
        dateOfBirth: "January 12th 1998",
        educationLevel: 8,
        address: "2345 north dr, Charlotte NC 23454",
    },
    employee3: {
        firstName: "See",
        lastName: "Lo",
        age: 19,
        dateOfBirth: "March 16th 1990",
        educationLevel: 13,
        address: "2333 long dr, Charlotte NC 23458",
    },
    drinkItems: [
        "Latte", "Mocha", "Frape", "Matcha", "Tea"
    ],
    foodItems: [
        "Cake Pop", "Wrap", "Spinach Gryos", "Fries"
    ],
    brewingDrinks : (drinkItem)=> {
        console.log(`Brewing this drink ${drinkItem}.`);
    },
    orderingItems: (menuItems) =>{
        console.log(`Can I please have a ${drinkItem}, ${foodItems}.`);
    },
    hoursOfOperation: (TimeRanges)=> {
        console.log("Openning hours beggin at 6am and closing time is at 10pm.");
    },


}


starbucks.brewingDrinks("Latte");
console.log(starbucks.employee1.address);