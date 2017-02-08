var buttonArray = document.getElementsByClassName("calcButton");


for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', getValue);
}

// Stored numbers and operators
  var attribute = "";
  var num1 = 0;
  var num2 = 0;
  var operator = "";
  var total = "";

  function getValue() {
    console.log(num1 + " " + num2)
    attribute = this.getAttribute("data-value");
    checkValue();
    updateScreen();
};


function checkValue(){

    // Checks if attribute is a number of not - returns either true or false
    var result = isNaN(attribute);

    // If the button pressed is a number
    if (result === false){
      total += attribute;

    // Else if the button pressed is not a number
    }else{

      // If the button pressed is not the equals button then set the opperator variable to the relevent mathmatical operator.
      if (attribute != "="){
        operator = attribute;

        if(num1 === 0){
          num1 = parseInt(total);
          total = "";
          updateScreen();
        }else{
          num2 = parseInt(total);
        }
      }

      // if the button pressed is the equals button then calculate the total.
      if (attribute === "="){
      console.log(num1 + " " + operator + " " + num2)
      calculateTotal();
      }

    }
  }

  function calculateTotal(){
    if (operator = "+"){
    total = eval("num1 + num2");
    updateScreen;
  }
}

function updateScreen(){
  document.getElementById("screen-text").innerHTML = total;
}
