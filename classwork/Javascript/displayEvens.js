
var start = document.getElementById("start");
var end = document.getElementById("end");
var step = document.getElementById("step");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function displayEvens() 
{
    var begin   = parseInt(start.value, 10);
	if(Number.isNaN(begin))
	{
		alert("Starting Number should be Numeric");
		 return false;
	}
    var finish  = parseInt(end.value, 10);
	if(Number.isNaN(finish))
	{
		alert("Ending Number should be Numeric");
		return false;
	} 
	else if(finish<=begin)
	{
		alert("End Number should be greater or equal to Start Number");
		return false;
	} 
	var count = parseInt(step.value, 10);
	if(Number.isNaN(count))
	{
		alert("Step should be Numeric");
		return false;
	}
	else if(count<0)
	{
		alert("Step is not a Negative Number ");
		return false;
	}
	var i=[];
	
	var output = "";
    for( i=begin;i<=finish;i=i+count)
	{
		if(i%2==0)
		{
			output += i+"\n";
		}
	}
	//results.style.display = "block";
	document.getElementById("outputTitle").innerText='Here are the Even Numbers Between ${begin} and ${finish} by ${count}: ';
	document.getElementById("outputText").innerText=output;

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}
