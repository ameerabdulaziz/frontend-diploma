/*
1- Write a program that allow to user enter number then printit
Example
Input: 5
Output: 5
*/
// var number = prompt("Please enter a number:")
// console.log(number)

/*
2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no
Example1
Input: 12 Output Yes
Example 2
Input: 9 Output No
*/
// var number = prompt("Please number can divide by 3 and 4:")
// if (number % 3 == 0 && number % 4 == 0) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

/*
3- Write a program that allows the user to insert 2 integers then print the max
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10
*/
// var n1 = prompt("Enter first integer number")
// var n2 = prompt("Enter second integer number")

// if (n1 > n2) {
//     console.log("the max number is ", n1)
// } else if (n2 > n1) {
//     console.log("the max number is ", n2)
// } else {
//     console.log("Both numbers are equal")
// }

/*
4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
Example 1
Input: -5
Output negative
Example2
Input: 10
Output positive
*/
// var number = prompt("Enter an integer number")
// if (number > 0) {
//     console.log("Positive Number")
// } else if (number < 0) {
//     console.log("Negative Number")
// } else if (number == 0) {
//     console.log("Neither positive nor negative")
// } else {
//     console.log("not a number")
// }

/*
5- Write a program that take 3 integers from user then print the max element
and the min element.
Example 1
Input:7,8,5
Output:
max element = 8
min element = 5
Example2
Input: 3 6 9
Outputs:
Max element = 9
Min element = 3
*/
// var n1 = prompt("Enter first integer number")
// var n2 = prompt("Enter second integer number")
// var n3 = prompt("Enter third integer number")
//
// if (n1 > n2 && n1 > n3 && n2 > n3) {
//     console.log("Max element = ", n1)
//     console.log("Min element = ", n3)
// } else if (n1 > n2 && n1 > n3 && n3 > n2) {
//     console.log("Max element = ", n1)
//     console.log("Min element = ", n2)
// } else if (n2 > n1 && n2 > n3 && n1 > n3) {
//     console.log("Max element = ", n2)
//     console.log("Min element = ", n3)
// } else if (n2 > n1 && n2 > n3 && n3 > n1) {
//     console.log("Max element = ", n2)
//     console.log("Min element = ", n1)
// } else if (n3 > n1 && n3 > n2 && n2 > n1) {
//     console.log("Max element = ", n3)
//     console.log("Min element = ", n1)
// } else if (n3 > n1 && n3 > n2 && n1 > n2) {
//     console.log("Max element = ", n3)
//     console.log("Min element = ", n2)
// } else {
//     console.log("You enter wrong values")
// }

/*
6- Write a program that allows the user to insert integer number then
check If a number is oven or odd
7- Example 1
Input: 8
Output: even
Example 2
Input: 7
Output: odd
*/
// var number = prompt("Enter a number:")
// if (number % 2 == 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

/*
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
Example1
Input: O
Output: vowel
Example 2
Input: b
Output:
Consonant
*/
// var letter = prompt("Enter a letter:")
// var vowelLetters = ['a', 'e', 'I', 'o', 'u']
// var result = 'consontant'
// for (var i=0; i < vowelLetters.length; i++) {
//     if (letter == vowelLetters[i]) {
//         result = "vowel";
//         break;
//     }
// }
// console.log(result)


/*
9- Write a program that allows user to insert integer then print all numbers between 1 to
that’s number
Example Input 5
Output 1, 2, 3, 4, 5
*/
// var number = prompt("Insert integer:")
// while(number > 0) {
//     number -= 1
// }

/*
10- Write a program that allows user to insert integer then print a multiplication table up to 12.
Example
Input: 5
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60
*/
// var number = prompt("Insert integer number:")
// var multiplier = 0
// while(multiplier < 12) {
//     multiplier += 1;
//     console.log(number * multiplier);
// }

/*
11- Write a program that allows to user to insert number then print all even numbers
between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14
*/
// var number = prompt("Enter a number:")
// for (var i=2; i<number; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

/*
12- Write a program that take two integers then print the power
Example:
Input: 4 3
Output: 64
Hint how to calculate 4^3 = 4 * 4 * 4 =64
*/
// var number = prompt("Enter integer number:")
// var power = prompt("Ener interger power:")
// console.log(number ** power);

/*
12- Write a program to enter marks of five subjects and calculate total, average and
percentage.
Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
Average Marks =87
Percentage =87
*/
// var total = 0
// var subjectsCount = 5
// var subjectFullMark = 100
// for(var i=1; i<=subjectsCount; i++) {
//     var number = +prompt(`Enter subject ${i} mark:`)
//     total += number
// }
// console.log(`Total marks = ${total}`)
// console.log(`Average Marks = ${total/subjectsCount}`)
// console.log(`Percentage = ${(total/(subjectFullMark * subjectsCount)) * 100}`)

/*
13-Write a program to input month number and print number of days in that
month.
Example:
Input: - Month Number: 1
Output:-. Days in Month: 31
*/
// var number = +prompt(`Input month number:`)
// if (number == 1) {
//     console.log("Days in Month: 31");
// } else if (number == 2) {
//     console.log("Days in Month: 28");
// } else if (number == 3) {
//     console.log("Days in Month: 31");
// } else if (number == 4) {
//     console.log("Days in Month: 30");
// } else if (number == 5) {
//     console.log("Days in Month: 31");
// } else if (number == 6) {
//     console.log("Days in Month: 30");
// } else if (number == 7) {
//     console.log("Days in Month: 31");
// } else if (number == 8) {
//     console.log("Days in Month: 31");
// } else if (number == 9) {
//     console.log("Days in Month: 30");
// } else if (number == 10) {
//     console.log("Days in Month: 31");
// } else if (number == 11) {
//     console.log("Days in Month: 30");
// } else if (number == 12) {
//     console.log("Days in Month: 31");
// } else {
//     console.log("Wrong month!");
// }

/*
14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F
*/
// var subjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer']
// var subjectCount = subjects.length
// var fullMark = 100
// var total = 0
// for (var i=0; i<subjectCount; i++) {
//     var mark = +prompt(`Enter a ${subjects[i]} subject mark:`)
//     total += mark
// }
// var percentage = (total / (subjectCount * 100)) * 100
// if (percentage >= 90) {
//     console.log("Your Grad is A")
// } else if (percentage >= 80) {
//     console.log("Your Grad is B")
// } else if (percentage >= 70) {
//     console.log("Your Grad is C")
// } else if (percentage >= 60) {
//     console.log("Your Grad is D")
// } else if (percentage >= 40) {
//     console.log("Your Grad is E")
// } else if (percentage < 40) {
//     console.log("Your Grad is F")
// } else {
//     console.log("Something went wrong!")
// }


// ******************************** Using switch case*******************************
/*
15- Write a program to print total number of days in month
*/
// var number = +prompt(`Input month number:`)
// switch (number) {
//     case 1:
//         console.log("Days in Month: 31");
//         break;
//     case 2:
//         console.log("Days in Month: 28");
//         break;
//     case 3:
//         console.log("Days in Month: 31");
//         break;
//     case 4:
//         console.log("Days in Month: 30");
//         break;
//     case 5:
//         console.log("Days in Month: 31");
//         break;
//     case 6:
//         console.log("Days in Month: 30");
//         break;
//     case 7:
//         console.log("Days in Month: 31");
//         break;
//     case 8:
//         console.log("Days in Month: 31");
//         break;
//     case 9:
//         console.log("Days in Month: 30");
//         break;
//     case 10:
//         console.log("Days in Month: 31");
//         break;
//     case 11:
//         console.log("Days in Month: 30");
//         break;
//     case 12:
//         console.log("Days in Month: 31");
//         break;
//     default:
//         console.log("Something went wrong")
//         break;
// }

/* 16- Write a program to check whether an alphabet is vowel or consonant */
// var letter = prompt(`Enter a letter:`)
// switch (letter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log("vowel");
//         break;
//     default:
//         console.log("consontant");
//         break;
// }

/* 17- Write a program to find maximum between two numbers */
// var firstNumber = +prompt("Enter first number:")
// var secondNumber = +prompt("Enter second number:")
// var max;
// switch (true) {
//     case firstNumber > secondNumber:
//         console.log(`The maximum number is ${firstNumber}`);
//         break;
//     case secondNumber > firstNumber:
//         console.log(`The maximum number is ${secondNumber}`);
//         break;
//     default:
//         console.log("Both number are equal");
//         break;
// }

/* 18- Write a program to check whether a number is even or odd */
// var number = +prompt("Enter a number")
// switch (true) {
//     case number % 2 == 0:
//         console.log("number is even")
//         break;
//     case number % 2 != 0:
//         console.log("number is odd")
//         break;
//     default:
//         console.log("wrong number")
//         break;
// }

/* 19- Write a program to check whether a number is positive or negative or zero */
// var number = +prompt("Enter a number")
// switch(true) {
//     case number > 0:
//         console.log("number is positive")
//         break;
//     case number < 0:
//         console.log("number is negative")
//         break;
//     case number == 0:
//         console.log("number is zero")
//         break;
//     default:
//         console.log("wrong number")
//         break;
// }

/* 20- Write a program to create Simple Calculator */
var firstNumber = +prompt("Enter a first number")
var secondNumber = +prompt("Enter a second number")
var operator = prompt("Enter an operator")

var result;
switch(true) {
    case operator == '+':
        result = firstNumber + secondNumber
        console.log(`firstNumber + secondNumber = ${result}`)
        break;
    case operator == '-':
        result = firstNumber - secondNumber
        console.log(`firstNumber - secondNumber = ${result}`)
        break;
    case operator == '*':
        console.log(`firstNumber * secondNumber = ${result}`)
        break;
    case operator == '/':
        console.log(`firstNumber / secondNumber = ${result}`)
        break;
    default:
        console.log("wrong number")
        break;
}