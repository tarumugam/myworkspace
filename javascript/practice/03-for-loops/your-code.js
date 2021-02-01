// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// Example: 0. FOR ONE TO SEVEN
// ============================
// Write a for loop that loops through the numbers 1 through 7.
// Print each number to the JavaScript console.
// Save your changes.
// Open javascript/practice/03-for-loops/index.html in your browser, open the JavaScript console, and confirm the result.
// (I'll write the code for this one.)

console.log("FOR ONE TO SEVEN");


console.log("USING For LOOP");

for (var n = 1; n <= 7; n++)
	{
    console.log(n);
	}
	
console.log("USING while LOOP");
var n=1;
	while(n<=7)
	{
		
		console.log(n);
		n++;
	}
	

// 1. FOR ONE TO TEN
// =================
// Write a for loop that loops through the numbers 1 through 10.
// Print each number to the JavaScript console.
console.log("FOR ONE TO TEN");


console.log("USING For LOOP");
// Write your code here:
for (var n = 1; n <= 10; n++) 
	{
    console.log(n);
	}

console.log("USING while LOOP");
var n=1;
	while(n<=10)
	{
		
		console.log(n);
		n++;
	}


// 2. COUNT BY TWOS FROM TWO TO TWELVE
// ===================================
// Write a for loop that loops through the numbers 2 through 12.
// Hint: Increment by 2 instead of 1 (n = n + 2 versus n++).
// Print each number to the JavaScript console. You should see:
// --------------------------------
// COUNT BY TWOS FROM TWO TO TWELVE
// 2
// 4
// 6
// 8
// 10
// 12
console.log("COUNT BY TWOS FROM TWO TO TWELVE");
console.log("USING For LOOP");
// Write your code here:
for (var n = 2; n <= 12; n=n+2) 
	{
    console.log(n);
	}
console.log("USING while LOOP");
var n=2;
	while(n<=12)
	{
			
		console.log(n);
		n=n+2;
	}

// 3. COUNT BACKWARD FROM SIX
// ==========================
// Write a for loop that loops from 6 to 0, counting backward.
// Hint: Decrement instead of increment (n-- versus n++).
// Print each number to the JavaScript console. You should see:
// -----------------------
// COUNT BACKWARD FROM SIX
// 6
// 5
// 4
// 3
// 2
// 1
// 0
console.log("COUNT BACKWARD FROM SIX");
console.log("USING For LOOP");
// Write your code here
for (var n = 6; n >= 0; n--)
	{
    console.log(n);
	}
console.log("USING while LOOP");
var n=6;
	while(n>=0)
	{
		
		console.log(n);
		n--;
	}
// 4. SUM EVENS
// ============
// You're given two variables with numeric values:

var limit = 10; // We stop looping when we reach this number.
var sum = 0;    // We add even numbers to this variable.

// Write a for loop that loops from 0 to limit.
// If the current number is even, add it to sum. Otherwise, ignore it.
// Try changing the value of limit and confirm your sums are correct.
// When limit equals 4, sum equals 6 (2 + 4).
// When limit equals 10, sum equals 30 (2 + 4 + 6 + 8 + 10).
// When limit equals 8, sum equals 20 (2 + 4 + 6 + 8).
// What happens if you set limit to a negative number?
console.log("SUM EVENS");
console.log("USING For LOOP");
// Write your code here:

if (limit>0)
{
	for (var n = 1; n <= limit; n++)
	{
		if(n%2==0)
		{
			sum=sum + n;
			console.log("%s is an Even Number ",n);
		}  
	}
	console.log("limit = %s, sum = %s", limit, sum);
}
else
{
	console.log("Limit cannot be a Negative Number");
	console.log("limit = %s, sum = %s", limit, sum);
}
console.log("USING while LOOP");

if (limit>0)
{
	
	var n = 1;
	
	while( n <= limit)
	{
		{
		
		console.log(n);
		n++;
	}
	if(n%2==0)
		{
			sum=sum + n;
			console.log("%s is an Even Number ",n);
			
		}  
	}
	console.log("limit = %s, sum = %s", limit, sum);
}
else
{
	console.log("Limit cannot be a Negative Number");
	console.log("limit = %s, sum = %s", limit, sum);
}
// =========================
// You're given two variables with numeric values:

var winniesFavoriteNumber = 153; // Winnie's favorite number
var kaisFavoriteNumber = 244;    // Kai's favorite number
var third = 100;
var fourth =  150;
var fifth = 280;
var favNumber = 0;
// Write a for loop that loops until it reaches either winniesFavoriteNumber 
// or kaisFavoriteNumber and then stop.
// Print the final number to the JavaScript console.
// Try changing the value of winniesFavoriteNumber and kaisFavoriteNumber.
// Try adding a third, or forth, or fifth favorite number!
console.log("FIND A FAVORITE NUMBER");
console.log("USING For LOOP");
// Write your code here:


for(var n = 1; (n<=winniesFavoriteNumber)&&(n<=kaisFavoriteNumber)&&(n<=third)&&(n<=fourth)&&(n<=fifth); n++) 
	{
	console.log(n);

	}
	
favNumber = n-1;

if(favNumber == winniesFavoriteNumber)
{
	console.log(" The number is WinniesFavorite Number");
}
else if(favNumber == kaisFavoriteNumber)
{
	console.log(" The number is kaissFavorite Number");
}

else if(favNumber == third)
{
	console.log(" The number is third Number");
}

else if(favNumber == fourth)
{
	console.log(" The number is fourth Number");
}

else if(favNumber == fifth)
{
	console.log(" The number is fifth Number");
}

console.log("USING while LOOP");

var n = 1;

while((n<=winniesFavoriteNumber)&&(n<=kaisFavoriteNumber)&&(n<=third)&&(n<=fourth)&&(n<=fifth))
{
	console.log(n);
	n++;
}
favNumber = n-1;

if(favNumber == winniesFavoriteNumber)
{
	console.log(" The number is WinniesFavorite Number");
}
else if(favNumber == kaisFavoriteNumber)
{
	console.log(" The number is kaissFavorite Number");
}

else if(favNumber == third)
{
	console.log(" The number is third Number");
}

else if(favNumber == fourth)
{
	console.log(" The number is fourth Number");
}

else if(favNumber == fifth)
{
	console.log(" The number is fifth Number");
}

// CHALLENGE: WHILE LOOPS
// ======================
// Try solving the five tasks above with a while loop in place of a for loop.






/**********************************
 * The Software Guild
 * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
 *********************************/