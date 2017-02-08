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
  updateScreen();                                         // Finally the calculator is screen is updated with the result of the users input, either displaying the number or the completed equation.
};



function checkValue(){                                    // Function that checks if the button pressed is a number or not.
  var isNotNumber = isNaN(buttonValue);

  if (isNotNumber == false){
    updateNumber();                                       // If it is a number then the updateNumber function will run.
  }

  if (isNotNumber == true){                               // If it is not a number then the 'operator' variable is set to the clicked mathmaticl operator's value.
    operator = buttonValue;

    if (operator == "="){                                 // If the operator variable is the equals sign, then...
      numberArray[arrayCounter] = parseInt(fullNumber);   // ... convert the stored 'fullNumber' from a string to an interger and insert into the numberArray and then...
      calculateTotal();                                   // ... run the calculateTotal function to perform the equation.
    }else{                                                // If the operator variable is not the equals sign, then...
      updateArrays();                                     // run the updateArray function which stores the fullNumber into the numberArray and the operator into the operatorArray.
      fullNumber = "";                                    // The fullNumber variable is reset so it is ready for the next number the user will enter.
      arrayCounter++                                      // The arrayCounter variable is increased by one so it is ready to insert the next fullNumber and operator variable in each relevent array.
    }
  }
}


function updateArrays(){                                  // Function that updates the arrays that store each fullNumber and operator.
  numberArray[arrayCounter] = parseInt(fullNumber);
  operatorArray[arrayCounter] = operator;
}

function updateNumber(){                                  // Function that updates the fullNumber by adding each single number to it thus making a multi-digit number.
  fullNumber += buttonValue;
}

function updateOSD(){                                     // Function that will run to update the onScreenDisplay variable. This will then be accessed by updateScreen to display the text on the screen.
  if (operator != "="){
    onScreenDisplay += buttonValue;
  }
}

function updateScreen(){                                // Function that updates the text shown on the calculator's screen.
  document.getElementById("screen-text").innerHTML = onScreenDisplay;
}


function calculateTotal(){                              // Function that will calculate the total
  var runningTotal = 0;                                 // Tempory variable that will hold the running total after each individaul calculation is performed.

  if (total === 0){                                     // If the total variable is 0 then no previous calculations have been performed so...
    runningTotal = numberArray[0];                      // ... the runningTotal should equal the first number(s) stored in numberArray.
  }else{
    runningTotal = total;                               // If there has been a previous calulation performed, then the result of that is to be used and assigned to runningTotal.
  }

  for (var  i=0; i < operatorArray.length; i++){        // Loop that is based off the number of operators in the operatorArray.
    if (operatorArray[i] == "+"){                       // If the operator stored in the array is a is a + then we want to perform an addition equation.
      runningTotal += numberArray[i+1];                 // We take the runningTotal variable and add the next number in the array, the result is then assigned to runningTotal. The loop will restart.
    }
    if (operatorArray[i] == "-"){                       // If the operator stored in the array is a is a - then we want to perform a subtraction equation.
      runningTotal -= numberArray[i+1];                 // We take the runningTotal variable and subtract the next number in the array, the result is then assigned to runningTotal. The loop will restart.
    }
    if (operatorArray[i] == "/"){                       // If the operator stored in the array is a is a / then we want to perform an devision equation.
      runningTotal /= numberArray[i+1];                 // We take the runningTotal variable and devide it by the next number in the array, the result is then assigned to runningTotal. The loop will restart.
    }
    if (operatorArray[i] == "*"){                       // If the operator stored in the array is a is a * then we want to perform an multiplication equation.
      runningTotal *= numberArray[i+1];                 // We take the runningTotal variable and multiply the next number in the array, the result is then assigned to runningTotal. The loop will restart.
    }
  }
                                                        // Once the loop has finished looping through all equations...
  onScreenDisplay = runningTotal;                       // ... runningTotal is then assigned to the onScreenDisplay variable.
  total = runningTotal;                                 // ... the total variable is also assigned the runningTotal variable.
  numberArray = [];                                     // ... the numberArray is reset.
  operatorArray = [];                                   // ... the operatorArray is reset.
  arrayCounter = 0;                                     // .. the arrayCounter variable is reset back to 0.
}
