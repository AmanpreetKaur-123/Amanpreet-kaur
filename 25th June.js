## Training Day13 report
## 25 June 2024 
# Javascript Operation:
JS if, else and else if: Conditional statements are used to perform different actions based on different conditions.
- Conditional Statements:Very often when you write code, you want to perform different actions for different decisions.You can use conditional statements in your code to do this.
- In JavaScript we have the following conditional statements:
•	Use if to specify a block of code to be executed, if a specified condition is true
•	Use else to specify a block of code to be executed, if the same condition is false
•	Use else if to specify a new condition to test, if the first condition is false
•	Use switch to specify many alternative blocks of code to be executed
- if Statement: Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
Syntax: if (condition) { statement }
Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
- else Statement: Use the else statement to specify a block of code to be executed if the condition is false.
Syntax: if (condition) { statement }
                else {  statement  }
- else if Statement: Use the else if statement to specify a new condition if the first condition is false.
Syntax: if (condition1) { statement }
                else if  (condition2) {  statement  }
                else {  statement  }
- Switch statement: The switch statement is used to perform different actions based on different conditions. Use the switch statement to select one of many code blocks to be executed.
Syntax: Switch (condition)
               {   case x: //code block
                  break;
                 case y: //code block
                  break;
                  case z: //code block
                  break;
                 default: //code block  }      
- This is how it works:
•	The switch expression is evaluated once.
•	The value of the expression is compared with the values of each case.
•	If there is a match, the associated block of code is executed.
•	If there is no match, the default code block is executed.
### Program:
let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);

output:
PS C:\Users\dell\Documents\Javascript.js> node "c:\Users\dell\Documents\Javascript.js\switch.js"
Tuesday
PS C:\Users\dell\Documents\Javascript.js> 
### HOMEWORK:
write a Js program that displays largest among two integers.
let num= 5;
let num1=4;
if (num>num1)
    {
        console.log(" num is greater")
    }
    else if (num<num1)
    {
        console.log("num is small")
    }
    else
    {
        console.log("both are equal")
    }
OUTPUT:
PS C:\Users\dell\Documents\Javascript.js> node "c:\Users\dell\Documents\Javascript.js\largest.js"
 num is greater
PS C:\Users\dell\Documents\Javascript.js>
