var buttonArray = document.getElementsByClassName("calcButton");

for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', getValue);
}


function getValue() {
    var attribute = this.getAttribute("data-value");
    alert(attribute);
};
