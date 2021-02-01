// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// 1. FIND MAX
// ============
// Create a function named `findMax` that takes one parameter: an array of numbers named `numbers`.
// Find the maximum number in the array and return it.
// Tip: Start with 2 numbers in the array. Once the function works with 2 numbers, add a third, and so on.
// Write your code here:



function findMax(numbers)
{
	var maxi = numbers[0];
	for(var i=1;i<numbers.length;i++)
	{
		if(maxi<numbers[i])
		{
			maxi=numbers[i];
		}	
		
	}
	return maxi;
}
// Open index.html in your browser, open the JavaScript console, confirm the result.

// Uncomment the code below to verify your function is working.
 console.log("findMax =====");

var numbers = [46, 3, 40, 74, 63];
 var actual;
 actual = findMax(numbers);
 console.log("[46, 3, 40, 74, 63] -> expected: 74, actual: %s", actual);
 numbers = [3, 3, 3, 3];
 actual = findMax(numbers);
console.log("[3, 3, 3, 3] -> expected: 3, actual: %s", actual);
 numbers = [-1];
 actual = findMax(numbers);
 console.log("[-1] -> expected: -1, actual: %s", actual);


// 2. COMBINE ARRAYS
// =================
// Create a function named `combine` that takes two array parameters. Any type of array will do.
// The function should create a new, empty array and then add all elements from each parameter array to it.
// The function should NOT alter either parameter.
// Write your code here:

/*
function combine(arrayOfString_1, arrayOfString_2)
{
	
	var newArray =[];
	newArray=[arrayOfString_1]+","+[arrayOfString_2];
	return newArray;
}
*/

/*function combine(arrayOfString_1, arrayOfString_2)
{
	
	var mergedArray =[];
	mergedArray = arrayOfString_1;
	mergedArray = mergedArray.concat(arrayOfString_2);
	return mergedArray.join(",");
}*/
/*function combine(arrayOfString_1, arrayOfString_2)
{
	
	var mergedArray =[];
	mergedArray = arrayOfString_1;
	mergedArray = mergedArray.join(arrayOfString_2);
	return mergedArray;
}
*/

function combine(arrayOfString_1, arrayOfString_2)
{
	
	var newArray =[];
	
	// for loop to push each element of first array into new array
	for(var i=0;i<arrayOfString_1.length;i++)
	{
		newArray.push(arrayOfString_1[i]);
	}	
	for(var j=0;j<arrayOfString_2.length;j++)
	{
		newArray.push(arrayOfString_2[j]);
	}
	return newArray.join(",");
	// for loop to push each element of second array into new array
	
	// return newArray by using join operation with comma seperation
}


// Uncomment the code below to verify your function is working.
// console.log("combine =====");
 var merged = combine(["Oak", "Maple", "Birch"], ["Hydrogen", "Helium"]);
 console.log("expected: Oak,Maple,Birch,Hydrogen,Helium\nactual: %s", merged);
// merged = combine([12.5, 3, 855], [true, false, true]);
// console.log("expected: 12.5,3,855,true,false,true\nactual: %s", merged);
// merged = combine(["Saturn"], ["Black Lab", "Borzoi", "Pug"]);
// console.log("expected: Saturn,Black Lab,Borzoi,Pug\nactual: %s", merged);


// 3. CHALLENGE: SUBTRACT AN ARRAY
// ====================
// Create a function named `subtractArray` that takes two array parameters.
// The function should return a new array that includes all elements from the first array
// that do not exist in the second array. In effect, we "subtract" the elements in the second array
// from the first and return the result.
// The function should NOT alter either parameter.
// Write your code here:

function subtractArray(array_1,array_2)
{
var newArray =[];
	
	// for loop to push each element of first array into new array
	for(var i=0;i<array_1.length;i++)
	{
		var elementOfArray_1=array_1[i];
		var elementOfArray_2;
		for(var j=0;j<array_2.length;j++)
		{
			 elementOfArray_2=array_2[j];
			if(elementOfArray_1==elementOfArray_2)
			{
			break;
			}
			}
		if(elementOfArray_1!=elementOfArray_2)
		{
		newArray.push(array_1[i]);
		}
	}	
	
return newArray.join(",");
}
//Uncomment the code below to verify your function is working.
 console.log("subtractArray =====");
 var result = subtractArray([1, 2, 3, 4, 5], [2, 4, 6]);
console.log("expected: 1,3,5\nactual: %s", result);
result = subtractArray(["Neptune", "Uranus", "Saturn", "Pluto"], ["Pluto"]);
 console.log("expected: Neptune,Uranus,Saturn\nactual: %s", result);
result = subtractArray([1, 2, 3, 1, 2, 3, 1, 2, 3], [1, 3]);
console.log("expected: 2,2,2\nactual: %s", result);





/**********************************
 * The Software Guild
 * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
 *********************************/