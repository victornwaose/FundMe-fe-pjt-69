// this function displays the payment section after clicking the continue button
function showDiv() {
  document.getElementById('payment').style.display = "block";
  document.getElementById('continue').style.display = "none";
}

// this part, sets the value of the form to the amount click on from the 4 availble buttons
var value_1 = document.getElementById('value-1');
var value_2 = document.getElementById('value-2');
var value_3 = document.getElementById('value-3');
var value_4 = document.getElementById('value-4');

var amount_input = document.getElementById('amount');

value_1.innerHTML = 1000;
value_2.innerHTML = 2000;
value_3.innerHTML = 10000;
value_4.innerHTML = 50000;


function amount(value_1) {
  amount_input.value = value_1.innerHTML;

}
function amount(value_2) {
  amount_input.value = value_2.innerHTML;

}
function amount(value_3) {
  amount_input.value = value_3.innerHTML;

}
function amount(value_4) {
  amount_input.value = value_4.innerHTML;
}

// that's all.
