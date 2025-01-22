// 1
let age = 11
console.log(age)
// 2
let name = "Max"
console.log(name)
// 3
let isStudent = true;
console.log(isStudent)
// 4
const myString = "Think before you talk";
console.log(myString);
// 5
const myNumber = 50;
let sum = myNumber + 10;
console.log(sum)
// 6
let myNull = null
console.log(myNull)
// 7
let username = prompt("What's your name?")
console.log("Hello there, ", username)
// 8
const userAnswer = confirm("Do you really want to leave?")
if (userAnswer == true) {
    alert("Thank you for accepting")
}
else {
    alert("Activity denied")
}
// 9
const userAlertAnswer = alert("The action is dangerous")
const userAnswer2 = confirm("Please confirm this")

if (userAnswer2 == true) {
    alert("Thank you for accepting")
}
else {
    alert("Activity denied")
}