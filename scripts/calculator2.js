var buttonArray = document.getElementsByClassName("calcButton");


for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', getValue);
}

var buttonValue = "";
var onScreenDisplay = "";
var fullNumber = "";
var operator = "";
var numberArray = [];
var operatorArray = [];
var arrayCounter = 0;
var total = 0;



function getValue() {
  buttonValue = this.getAttribute("data-value");
  checkValue();
  updateOSD()
  updateScreen();
};



function checkValue(){
  var isNotNumber = isNaN(buttonValue);

  if (isNotNumber == false){
    updateNumber();
  }

  if (isNotNumber == true){
    operator = buttonValue;

    if (operator == "="){
      numberArray[arrayCounter] = parseInt(fullNumber);
      calculateTotal();
    }else{
      updateArrays();
      fullNumber = "";
      arrayCounter++
    }
  }
}


function updateArrays(){
  numberArray[arrayCounter] = parseInt(fullNumber);
  operatorArray[arrayCounter] = operator;
}

function updateNumber(){
  fullNumber += buttonValue;
}

function updateOSD(){
  if (operator != "="){
    onScreenDisplay += buttonValue;
  }
}

function updateScreen(){
  document.getElementById("screen-text").innerHTML = onScreenDisplay;
}


function calculateTotal(){
  var runningTotal = 0;

  if (total === 0){
    runningTotal = numberArray[0];
  }else{
    runningTotal = (total);
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
