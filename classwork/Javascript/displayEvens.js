
var start = document.getElementById("start");
var end = document.getElementById("end");
var step = document.getElementById("step");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");
var outputField = document.getElementById("outputText");
var outputTitleField = document.getElementById("outputTitle");
var outputTextField = document.getElementById("outputText");

function displayEvens() 
{
	var error = false;
	var message = "";
	var begin   = parseInt(start.value, 10);
	if (Number.isNaN(begin))
	{
		error=true;
		message += "\n" + "Starting Number should be Numeric";
	}
    var finish  = parseInt(end.value, 10);
	if (Number.isNaN(finish))
	{
		message += "\n"+"Ending Number should be Numeric";
		error=true;
	} 
	else if (finish<=begin)
	{
		message += "\n"+"End Number should be greater or equal to Start Number";
		error = true;
	}	
	var count = parseInt(step.value, 10);
	if (Number.isNaN(count))
	{
		message += "\n"+"Step should be Numeric";
		error=true;
	}
	else if (count<0)
	{
		message += "\n"+"Step should not a Negative Number ";
		error=true;
	}
	
	outputTitleField.innerText="Here are the Even Numbers Between " + start.value + " and " + end.value + " by " + step.value + " 's' ";
    
	if(error==true)
	{
		outputField.innerText=message;
		outputField.style.color = "RED";
	}
	else
	{
		var i;
	
		var output = "";
		for( i=begin;i<=finish;i=i+count)
		{
			if(i%2==0)
			{
				output += i+"\n";
			}
		}
		outputTextField.innerText=output;
	}
	    
    return;
}
