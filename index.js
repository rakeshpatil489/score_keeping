// Modal on window load
$(window).on('load',function(){
  $('#launchModal').modal('show');
});

//gameplay
var p1btn = document.querySelector('.playerButton1'); 
var p2btn = document.querySelector('.playerButton2'); 
var p1Display = document.querySelector('#p1Display'); 
var p2Display = document.querySelector('#p2Display'); 
var inputFeild = document.querySelector('input');
var playingTo = document.querySelector('#playingTo');
var reset = document.querySelector('.playerButton');
var p1Score= 0;
var p2Score= 0;
var winningScore = 5;
var gameOver = false;

// player one 
p1btn.addEventListener('click', function()
{
  if(!gameOver){
  p1Score++;
  if (p1Score === winningScore)
  {
     p1Display.classList.add('green');
     gameOver= true;
  }
  p1Display.textContent = p1Score;
}
});

// player Two
p2btn.addEventListener('click', function()
{
  if(!gameOver)
    p2Score++;
    if (p2Score === winningScore)
  {
     p2Display.classList.add('green');
     gameOver= true;
  }
    p2Display.textContent = p2Score;
});



//for updating plays
inputFeild.addEventListener('change', function()
{
    playingTo.textContent = inputFeild.value;
    winningScore= Number(inputFeild.value);
    resetAll();
});

//Reset button
reset.addEventListener('click', function()
{
  resetAll();
});

// reset function 
function resetAll()
{
  p1Score= 0;
  p1Display.textContent = p1Score;
  p1Display.classList.remove('green');
 
  p2Score= 0;
  p2Display.textContent = p2Score;
  p2Display.classList.remove('green');
 
  gameOver= false;
}
