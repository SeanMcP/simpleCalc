let zero = document.getElementById("buttonZero");
let one = document.getElementById("buttonOne");
let two = document.getElementById("buttonTwo");
let three = document.getElementById("buttonThree");
let four = document.getElementById("buttonFour");
let five = document.getElementById("buttonFive");
let six = document.getElementById("buttonSix");
let seven = document.getElementById("buttonSeven");
let eight = document.getElementById("buttonEight");
let nine = document.getElementById("buttonNine");
let decimal = document.getElementById("buttonDecimal");

let screen = document.getElementById("calcScreen");
let message = document.getElementById("calcMessage");

//Operation arrays
let newValue = 0;
let addArray = [];

buttonZero.addEventListener('click', function(e){
  screen.innerHTML += 0;
});
buttonOne.addEventListener('click', function(e){
  screen.innerHTML += 1;
});
buttonTwo.addEventListener('click', function(e){
  screen.innerHTML += 2;
});
buttonThree.addEventListener('click', function(e){
  screen.innerHTML += 3;
});
buttonFour.addEventListener('click', function(e){
  screen.innerHTML += 4;
});
buttonFive.addEventListener('click', function(e){
  screen.innerHTML += 5;
});
buttonSix.addEventListener('click', function(e){
  screen.innerHTML += 6;
});
buttonSeven.addEventListener('click', function(e){
  screen.innerHTML += 7;
});
buttonEight.addEventListener('click', function(e){
  screen.innerHTML += 8;
});
buttonNine.addEventListener('click', function(e){
  screen.innerHTML += 9;
});
buttonDecimal.addEventListener('click', function(e){
  screen.innerHTML += ".";
});
clear.addEventListener('click', function(e){
  screen.innerHTML = "";
  message.innerHTML = "";
  addArray = [];
  arraySum = [];
  newValue = 0;
  console.log(newValue);
});


opAdd.addEventListener('click', function(e){
  message.innerHTML += screen.innerHTML + " + ";
  newValue += Number(screen.innerHTML);
  console.log(newValue);
  // addArray.push(screen.innerHTML);
  screen.innerHTML = "";

});
opSubtract.addEventListener('click', function(e){
  message.innerHTML += screen.innerHTML + " - ";
  newValue -= Number(screen.innerHTML);
  console.log("This is the string -> number: " + Number(screen.innerHTML));
  console.log("This is the new value: " + newValue);
  // addArray.push(screen.innerHTML);
  screen.innerHTML = "";

});
enter.addEventListener('click', function(e){
  screen.innerHTML = newValue;
  message.innerHTML = "";
  // addArray.push(screen.innerHTML);
  // let numberArray = addArray.map(function(num){
  //   return Number(num);
  // });
  // let arraySum = 0;
  // for (var i = 0; i < numberArray.length; i++) {
  //   arraySum += numberArray[i];
  //   screen.innerHTML = arraySum;
  //   message.innerHTML = "";
  // }
});
