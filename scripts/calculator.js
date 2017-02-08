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
    attribute = this.getAttribute("data-value");
    checkValue();
    updateScreen();
};


function checkValue(){
    var result = isNaN(attribute);

    if (result === false){
      console.log("Is a number");
      total += attribute;
  } else {
    console.log("Not a number");
    if (attribute !== "="){
      operator = attribute;
    }

    if (attribute === "="){
      console.log(num1 + " " + operator + " " + num2)
      calculateTotal();
    }
    else {
      if(num1 === 0){
        num1 = parseInt(total);
        total = "";
        updateScreen();
        // alert(num1 + " " + num2)
      } else {
        num2 = parseInt(total);
        // alert(num1 + " " + num2)
      }
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
