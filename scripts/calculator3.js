// Variables //
var buttonValue = "";           // Stores the value of the clicked button.
var onScreenDisplay = "";       // Holds the screen text including operators.
var fullNumber = "";            // Is used to store each added numerical character to make a multi-digit number.
var operator = "";              // Temporarily stores a math operator when entered by the user.
var numberArray = [];           // Array that stores each full (single or multi-digit) number entered by the user.
var operatorArray = [];         // Stores every operator to be used in the equation.
var arrayCounter = 0;           // Keeps track of where each number and operator should be inserted into the array.
var total = 0;                  // Stores the final total once calculated.




var buttonArray = document.getElementsByClassName("cal-button");      // Variable that stores in an array every instance of the calculator's 'buttons' with a class of cal-button

for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', getValue);               // Each calculator button is assigned a click event listener, so when clicked the getValue function will run.
}


function getValue(){
  buttonValue = this.getAttribute("data-buttonValue");    // When a button is clicked this function will retrieve the data attibute 'buttonValue' from the clicked button and will asign it to buttonValue.
  checkValue();                                           // This function will run next, checking to see if the button is a number of an operator. Depending on the outcome, other functions will run.
  updateOSD()                                             // Once the calcuations have been complete then the value to be displayed on the On Screen Display is created.
  operator = "";
  updateScreen();                                         // Finally the calculator is screen is updated with the result of the users input, either displaying the number or the completed equation.
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
