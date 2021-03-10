function validateForm(){
	var phoneField = document.getElementById("phone");
	var phoneNoString = phoneField.value;
	if (isNumeric(phoneNoString) && phoneNoString.length == 11)
	{
		var reason = document.getElementById("reason").value;
		if (reason == 'tableBooking')
		{
			alert("Your table booking enquiry sent.");
		}
		else if (reason == 'homeDelivery')
		{
			alert("Your home delivery enquiry sent.");
		}
		else if (reason == 'takeAway')
		{
			alert("Your take away enquiry sent.");
		}
		return true;
	}
	else
	{
		alert("Please enter a valid 11 digit mobile number");
		return false;
	}
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}