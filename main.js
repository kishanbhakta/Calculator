var t = document.querySelector("#num_one");
var b = document.querySelector("#num_two");
var calc = document.querySelector("#calculateBtnA");
var ans = document.querySelector("#answer");

// Test
  // mathRules (1, 3);



// 1. add event to the calculate btn

function mathRules () {
 var numberOne = Number(t.value);
 var numberTwo= Number(b.value);
 var sum = numberOne + numberTwo;
 ans.innerHTML = sum.toString();
}


calc.addEventListener('click', mathRules);



// 2. dynamically get values