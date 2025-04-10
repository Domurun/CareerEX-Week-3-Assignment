// 1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.
let name = "Emmanuel Beeyah";
let age = 22;
let nationality = "Nigerian";

let introduction = "Hello, my name is Emmanuel. I am 22 years old and I am Nigerian.";
console.log(introduction);

// 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.
let quote = "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it. - Jordan Belfort";
let quoteUpper = quote.toUpperCase();
let quoteLower = quote.toLowerCase();

console.log("Uppercase: " + quoteUpper);
console.log("Lowercase: " + quoteLower);

// 3. Take a word and rearrange it in reverse order, then log the reversed word.
let word = "Bishop";
let reversedWord = word.split("").reverse().join("");
console.log("Reversed word: " + reversedWord);

// 4. Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
let item1 = 180.50;
let item2 = 99.50;
let item3 = 7.00;

let totalPrice = item1 + item2 + item3;
console.log("The total price of the items is $" + totalPrice);

// 5. Find the average of 5 test scores stored in variables. Display the average with a message.
let score1 = 67;
let score2 = 86;
let score3 = 91;
let score4 = 94;
let score5 = 77;

let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log("The average test score is " + averageScore);

// 6. Create an array of your 5 favorite foods. Display the first and last items in the array.
let favoriteFoods = ["Eba", "Rice", "Bread", "Ice Cream", "Chicken"];
console.log("First food: " + favoriteFoods[0]);
console.log("Last food: " + favoriteFoods[favoriteFoods.length - 1]);

// 7. Add two more food items to the list: one at the beginning and one at the end. Display the new list.
favoriteFoods.unshift("Meat Pie"); // Add to beginning
favoriteFoods.push("Burger");   // Add to end
console.log("Updated favorite foods list: " + favoriteFoods);

// 8, 9, 10. Create three arrays: jssOne, jssTwo, jssThree — each with 10 student names.
let jssOne = ["Alice", "Brian", "Cynthia", "David", "Ella", "Frank", "Grace", "Henry", "Ivy", "John"];
let jssTwo = ["Kenny", "Luna", "Mike", "Nina", "Oscar", "Pam", "Quincy", "Rita", "Sam", "Tina"];
let jssThree = ["Uche", "Victor", "Wendy", "Xavier", "Yemi", "Zara", "Amina", "Ben", "Chidi", "Dara"];

console.log("JSS One Students:", jssOne);
console.log("JSS Two Students:", jssTwo);
console.log("JSS Three Students:", jssThree);
