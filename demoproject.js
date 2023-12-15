//Practice loops 
console.log('Hello World');

for (let counter = 4; counter <= 6; counter ++){
    console.log(counter);
}

for (let counter = 2; counter >= 2; counter ++){
    console.log(counter);
}

for (let counter = 9; counter >= 5; counter ++){
    console.log(counter);
}

for (let counter = 0; counter <= 10; counter++){
    console.log(counter);
}

for (let myNum = 2; myNum >=1; myNum--){
    console.log(myNum);
}

/*for (let myName = 'Erica'; myName + myAge = 24){
    console.log(myName, myAge);
}*/

//correct loop 

let myName = 'Erica';
let myAge = 24;

while (myAge == 24) {
    console.log(myName, myAge);
    break;
}

//reverse loops 

for (let reverseLoop = 7; reverseLoop >= 0; reverseLoop--){
    console.log(reverseLoop);
}

// looping in arrays 

cost myfavoriteAnimal = ['dog', 'cat', 'chicken', 'cow'];

for (const element of myfavoriteAnimal){
    console.log(element);
}

//nested for loops in arrays 


//while loops

//forEach method
const myPetsName = ['dabin', 'kiki', 'dabi']
myPetsName.forEach(petsName => console.log(`My pet name is ${myPetsName}.`));

//.map() method 
const myKidsAge = [12, 11, 15, 21];
const ageDifference = myKidsAge.map(num => myAge -25);

console.log(ageDifference);