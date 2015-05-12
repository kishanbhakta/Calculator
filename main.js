var t = document.querySelector("#num_one");
var b = document.querySelector("#num_two");
var addi = document.querySelector("#calculateBtnA");
var sub = document.querySelector("#calculateBtnS");
var mul = document.querySelector("#calculateBtnM");
var div = document.querySelector("#calculateBtnD");
var ans = document.querySelector("#answer");

// Test
  // mathRules (1, 3);



// 1. add event to the calculate btn
// 2. dynamically get values

          // addition

function addition () {
 var numberOne = Number(t.value);
 var numberTwo= Number(b.value);
 var sum = numberOne + numberTwo;
 ans.innerHTML = sum.toString();
}

addi.addEventListener('click', addition);



          // subtraction

function subtraction () {
 var numberOne = Number(t.value);
 var numberTwo= Number(b.value);
 var dif = numberOne - numberTwo;
 ans.innerHTML = dif.toString();
}

sub.addEventListener('click', subtraction);



          // multiply

function  multipication() {
 var numberOne = Number(t.value);
 var numberTwo= Number(b.value);
 var mag = numberOne * numberTwo;
 ans.innerHTML = mag.toString();
}

mul.addEventListener('click', multipication);



          // division

function division () {
 var numberOne = Number(t.value);
 var numberTwo= Number(b.value);
 var frac = numberOne / numberTwo;
 ans.innerHTML = frac.toString();
}


div.addEventListener('click', division);




