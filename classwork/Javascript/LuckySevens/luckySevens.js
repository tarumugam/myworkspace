var startingBet = document.getElementById("start");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");
var totalNumOfRolls = 0;
var maxMoney; 
var rollCountOnMaxMoney = 0;
var gameMoney;
var diceTotal;

function luckySevens()
{
	var bettingValue = parseInt(startingBet.value.replace("$",""), 10);
	if (bettingValue <=0)
	{
		alert("Enter Value greater than 0");
	}
	maxMoney = bettingValue;
	gameMoney = bettingValue;
	
	while(gameMoney>0)
	{	 totalNumOfRolls=totalNumOfRolls+1;
		 diceTotal=rolldice();
		 console.log("diceValue:%s",diceTotal);
		 console.log("roll:%s", totalNumOfRolls);
		
		 if(diceTotal==7)
		 {
			 gameMoney=gameMoney+4;
			 if(maxMoney<gameMoney)
			 {
				maxMoney=gameMoney;
				rollCountOnMaxMoney =totalNumOfRolls;
			 }
		 }
		 else
		 {
			gameMoney=gameMoney-1; 
		 }
		 
		  console.log("game moneye:%s",gameMoney);
		 
		  console.log("rollCountOnMaxMoney:%s",rollCountOnMaxMoney);
		
		  console.log("maxMoneyt:%s \n\n",maxMoney);
		  
	}
		document.getElementById("gameMoney").innerText="$" + bettingValue.toFixed(2);
		document.getElementById("maxMoney").innerText="$" +maxMoney.toFixed(2);
		document.getElementById("rollCountOnMaxMoney").innerText=rollCountOnMaxMoney;	
		document.getElementById("totalNumOfRolls").innerText=totalNumOfRolls;
        results.style.display = "block";
	    return false;
}
function rolldice() 
{
	
	var diceA = Math.floor(Math.random() * 6) + 1;
	var diceB =Math.floor(Math.random() * 6) + 1;;
	var totalValue=diceA+diceB;
	return totalValue;
}
	


