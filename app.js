console.log("connected");

var numOfColours = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
colourDisplay.textContent = pickedColour;
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
setUpModeButtons();
setUpSquares(); 
update();
}
function setUpModeButtons() {
 for (var i = 0; i < modeButtons.length; i++) {
     modeButtons[i].addEventListener('click', function() {
      
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numOfColours = 3 : numOfColours = 6;
      //if (this.textContent === "Easy") {
       //numOfColours = 3;
      //}
      //else {
       //numOfColours = 6;
      //}
      update();
      
     });
     
     } 
}
function setUpSquares() {
 for (var i = 0; i < squares.length; i++) {
//add colours to quares
 //squares[i].style.backgroundColor = colours[i];
// add eventlisteners to squares
 squares[i].addEventListener('click', function() {
  var clickedSquare = this.style.backgroundColor;
  if (clickedSquare === pickedColour) {
  message.textContent = "Correct!";
  reset.textContent = "Play Again?"; 
  winningColours(colours); 
  h1.style.backgroundColor = pickedColour;
  } 
  else {
   this.style.backgroundColor = "#232323";
   message.textContent = "Try Again!";
  }
 });

};
}
function update() {
 //generate new colours
 colours = randomColours(numOfColours);
 //pick a colour
 pickedColour = picked();
 //change rgb to picked  colour
 //colourDisplay.textContent = pickedColour;
 for (var i = 0; i < squares.length; i++) {
 //change squares
 
  if(colours[i]){
   squares[i].style.display = 'block';
  squares[i].style.backgroundColor = colours[i];
 }
  else {
   squares[i].style.display = 'none';
 }
 h1.style.backgroundColor = "steelblue";
 reset.textContent = "New Colours"; 
 message.textContent = "";
}
}
//easyBtn.addEventListener('click', function() {
//  easyBtn.classList.add('selected');
//  hardBtn.classList.remove('selected');
//  numOfColours = 3;
//  colours = randomColours(numOfColours);
//  pickedColour = picked();
//  colourDisplay.textContent = pickedColour;
// for (var i = 0; i<squares.length; i++) {
//  if (colours[i]) {
//   squares[i].style.backgroundColor = colours[i];
//  }
//  else {
//   squares[i].style.display = "none";
//  }
// }
// 
//});
//hardBtn.addEventListener('click', function() {
  //hardBtn.classList.add('selected');
  //easyBtn.classList.remove('selected');
 //numOfColours = 6;
 //colours = randomColours(numOfColours);
  //pickedColour = picked();
  //colourDisplay.textContent = pickedColour;
 //for (var i = 0; i<squares.length; i++) {
   //squares[i].style.backgroundColor = colours[i];
   //squares[i].style.display = "block";
 
// }
//});                         
                         
                         
 reset.addEventListener('click', function() {
 //generate new colours
 colours = randomColours(numOfColours);
 //pick a colour
 pickedColour = picked();
 //change rgb to picked  colour
 colourDisplay.textContent = pickedColour;
 for (var i = 0; i < squares.length; i++) {
 //change squares
 squares[i].style.backgroundColor = colours[i];
 }
 h1.style.backgroundColor = "steelblue";
 this.textContent = "New Colours"; 
 message.textContent = "";
});



function winningColours(colour) {
 for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = pickedColour;
 }
}

function picked() {
var random = Math.floor(Math.random() * colours.length) ;
return colours[random]; 
}

function randomColours(num) {
 var arr = [];
 for (var i = 0; i<num; i++) {
 arr.push(generateRandomColours());
 }
 return arr; 
}
function generateRandomColours() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
 
 
