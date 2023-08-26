console.log("Week 4: Coding project");

console.log(`--------------------------
Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths.
c. Use a loop to iterate through the array and calculate the average age.\n`);
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!

console.log(`--------------------------
Answer: \n`);

//a. I used the .length to subtract the value of the first element of the array from the last one,
//this way if you add a new number or have a different array length, your subtraction would still work.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let result = ages[ages.length - 1] - ages[0];
console.log("a." + result);

//b. To add a new number I used the .push() method which added a new element (the number 86) to the end of the array. 
//Now the value of the first element was subtracted from the number that was added.
ages.push(86);
result = ages[ages.length - 1] - ages[0];
console.log("b." + result);

//c. To calculate the average age I used a for loop with two new variables (averageAge and sumOfAge), the variable sumOfAge 
//calculates the sum of all numbers in the array and the variable averageAge divides the sum by 9 (the number of elements in 
//the array) to find the average age.
let averageAge = 0;
let sumOfAge = 0;

for (let i = 0; i < ages.length; i++ ) {
  averageAge = (sumOfAge += ages[i]) / 9;
}

console.log("c." + averageAge);

console.log(`--------------------------
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
a. Use a loop to iterate through the array and calculate the average number of letters per name.
b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. \n`);

console.log(`--------------------------
Answer: \n`);

//a. First I used a map() method to find the number of letters of each element (name).
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengths = names.map(function(element) {
    return element.length;
});

let sumNumberOfLetters = 0;// a variable to store the sum.
let averageNumberOfLetters = 0;//a variable to store the average.
//A for of loop to calculate the sum.
for (let n of lengths) {
    sumNumberOfLetters += n;
}
averageNumberOfLetters = sumNumberOfLetters / 6; //And to calculate the average I divided the sum by the number of elements,
// in this case, 6.
console.log("a." + averageNumberOfLetters);

//b. Used a for loop to concatenate the elements.
let allTheNames = "";
for(let i = 0; i < names.length; i++){
  allTheNames += names[i] + " ";
}
console.log("b." + allTheNames);

console.log(`--------------------------
Question 3: How do you access the last element of any array? \n`);

console.log(`--------------------------
Answer: \n`);
console.log("Using the '.length - 1' you can access the last element of any array."); 

console.log(`--------------------------
Question 4: How do you access the first element of any array? \n`);

console.log(`--------------------------
Answer: \n`);
console.log("Using the array[0] you can access the first element of any array because the indexes in arrays start with 0."); 

console.log(`--------------------------
Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
add the length of each name to the nameLengths array.\n`);

console.log(`--------------------------
Answer: \n`);

names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];// new array to store the lenght of each name from the names array.

for(let i = 0; i < names.length; i++){ //a for loop to access the element of the array, find the length of each one and push into the new array.
    let name = names[i];
    let length = name.length;
    nameLengths.push(length);
}
console.log(nameLengths);


console.log(`--------------------------
Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. \n`);

console.log(`--------------------------
Answer: \n`);

nameLengths = [3, 5, 3, 5, 4, 3];//the array that was created on quastion 5.
let sumOfAllElements = 0;//a variable to store the sum of all the elements in the array.

for (let element of nameLengths) { //a for of loop to calculate the sum of all elements.
    sumOfAllElements += element;
}
console.log(sumOfAllElements);

console.log(`--------------------------
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself 
n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'). \n`);

console.log(`--------------------------
Answer: \n`);

// 7. I used an arrow function since my function was short and I used the .repeat() method 
// in order to be able to repeat the fisrt argument as many times as the second argument's value passes in.
let repeatTheWord = (word, n) => word.repeat(n);
//console.log(repeatTheWord("Hello", 3 )); uncomment to test the example.
console.log(repeatTheWord("Yay", 7));// I used the word "Yay" because I was really excited for being able to figure this one out so fast lol.

console.log(`--------------------------
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.
The full name should be the first and the last name separated by a space. \n`);

console.log(`--------------------------
Answer: \n`);

// 8. Arrow function was used because the function is short 
// and the template literals allows me to separate the arguments without having to add anything else.
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("Ellen", "McKenzie"));

console.log(`--------------------------
Question 9: Write a function that takes an array of numbers and 
returns true if the sum of all the numbers in the array is greater than 100. \n`);

console.log(`--------------------------
Answer: \n`);

let arrayOfNumbers = [57, 31, 26];//an array of numbers

let isGreaterThan100 = (numbers) => {
    let sum = numbers.reduce((total, num) => total + num, 0);//.reduce() method to calculate the sum.
    return sum > 100; //the condition to return true if is greater than 100.
}
console.log(isGreaterThan100(arrayOfNumbers));

console.log(`--------------------------
Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array. \n`);

console.log(`--------------------------
Answer: \n`);

let anArrayOfNumbers = [2, 8, 15, 12];// an array of numbers.

let averageOfAll = (numbers) => {
    let sum = numbers.reduce((total, num) => total + num, 0);// the .reduce() method to calculate the sum.
    return sum / numbers.length; //divided by the array lenght to find the average.
}
console.log(averageOfAll(anArrayOfNumbers));

console.log(`--------------------------
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
is greater than the average of the elements in the second array. \n`);

console.log(`--------------------------
Answer: \n`);

//two arrays of numbers:
let array1 = [5, 19, 58];
let array2 = [40, 23, 17];

let isFirstGreaterThanSecond = (arr1, arr2) => {
    let average1 = arr1.reduce((total, num) => total + num, 0) / arr1.length; //the .reduce method will calculate the sum of all the numbers in the array,
    let average2= arr2.reduce((total, num) => total + num, 0) / arr2.length; //and dividing by the lenght you get the average.
    return average1 > average2; //it returns true if the average of the array1 is greater than the average of array2.
}
console.log(isFirstGreaterThanSecond(array1, array2));

console.log(`--------------------------
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. \n`); 

console.log(`--------------------------
Answer: \n`);

let isHot = true;//a variable to store the boolean value.
let money = 10.52;//a variable to store the money.

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside === true && moneyInPocket > 10.50; //the use of "&&" makes the function return true only if both of values passes the condition that is true and > 10.50.
}
console.log(willBuyDrink(isHot, money));

console.log(`--------------------------
Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it. \n`);
//Write a function that takes an array of last names and returns only last names that starts with the letter B.

console.log(`--------------------------
Answer: \n`);

let arrayOfLastNames = ["Decker", "Schindler", "Browning", "Paul", "Baker"]; //I createt an array of last names.

let lastNamesWithB = () => {
    return arrayOfLastNames.filter((lastNames) => lastNames.startsWith("B"));//used the methods .filter() and .startsWith() to filter the last names that start with the letter "B".
}
console.log(lastNamesWithB(arrayOfLastNames));
//I created this simple function just because I wanted to use one of the methods we laerned in class this week and haven't used in this project yet.











