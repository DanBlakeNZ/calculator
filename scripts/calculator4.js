// Variables //
var buttonValue = "";
var onScreenDisplay = "";
var fullNumber = "";
var operator = "";
var numberArray = [];
var operatorArray = [];
var arrayCounter = 0;
var total = 0;




var buttonArray = document.getElementsByClassName("cal-button");

for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', getValue);
}


function getValue(){
  buttonValue = this.getAttribute("data-buttonValue");
  checkValue();
  updateOSD();
  operator = "";
  updateScreen();
};

function checkValue(){
  if((buttonValue <= 9) || (buttonValue == ".")){
    updateNumber();
  }

  if((buttonValue == "+") || (buttonValue == "-") || (buttonValue == "*") || (buttonValue == "/")){
    checkOperator();
  }

  if(buttonValue == "AC"){
    resetCalculator();
  }

  if(buttonValue == "CE"){
    clearEntry();
  }

  if(buttonValue == "="){
    numberArray[arrayCounter] = parseFloat(fullNumber);
    calculateTotal();
  }

}


function checkOperator(){
  operator = buttonValue;
  updateArrays();
  fullNumber = "";
  arrayCounter++
}


function updateArrays(){
  numberArray[arrayCounter] = parseFloat(fullNumber);
  operatorArray[arrayCounter] = operator;
}

function updateNumber(){
  fullNumber += buttonValue;
}

function updateOSD(){
  if ((operator != "=") && (operator != "CE")){
    onScreenDisplay += buttonValue;
  }
}

function updateScreen(){
  document.getElementById("screen-text").innerHTML = onScreenDisplay;
}




function calculateTotal(){

  operator = buttonValue;
  var runningTotal = 0;

  if (total === 0){
    runningTotal = numberArray[0];
  }else{
    runningTotal = total;
  }

  for (var  i=0; i < operatorArray.length; i++){

    if (operatorArray[i] == "+"){
      runningTotal += numberArray[i+1];
    }
    if (operatorArray[i] == "-"){
      runningTotal -= numberArray[i+1];
    }
    if (operatorArray[i] == "/"){
      runningTotal /= numberArray[i+1];
    }
    if (operatorArray[i] == "*"){
      runningTotal *= numberArray[i+1];
    }
  }

  onScreenDisplay = runningTotal;
  total = runningTotal;
  numberArray = [];
  operatorArray = [];
  arrayCounter = 0;
}


function clearEntry(){
  operator = buttonValue;
  fullNumber = "";
  onScreenDisplay = onScreenDisplay.substring(0, onScreenDisplay.length - 1)
}

function resetCalculator(){
  buttonValue = "";
  onScreenDisplay = "";
  fullNumber = "";
  operator = "";
  numberArray = [];
  operatorArray = [];
  arrayCounter = 0;
  total = 0;
}
