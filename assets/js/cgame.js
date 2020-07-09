// pickRandom() function
function pickRandom(argument) {
  if (typeof argument === 'number') {
    return Math.floor(Math.random() * Math.floor(argument)) + 1;
  }
  if (Array.isArray(argument)) {
    return argument[Math.floor(Math.random() * argument.length)];
  }
}

// Random color generator function
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgCol = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgCol;
}

// color to squares
var color = document.querySelectorAll(".square");
var colo = [];

for(var i=0; i < 6; i++){
  colo[i] = random_bg_color();
  color[i].style.backgroundColor = colo[i];
}
var col1 = colo[pickRandom(5)]
var col2 = colo[pickRandom(2)]
document.querySelector("span").textContent = col1;

// new color function
function newColor(){
  for(var i=0; i < 6; i++){
  colo[i] = random_bg_color();
  color[i].style.backgroundColor = colo[i];
  }
  var col1 = colo[pickRandom(5)]
  var col2 = colo[pickRandom(2)]
  document.querySelector("span").textContent = col1;
  document.querySelector(".reload").textContent = "New Colors";    
}

// button click effects
document.querySelector(".reload").addEventListener("click", function(){	
  document.querySelector(".tur").classList.add("invisible");
  document.querySelector(".big").style.backgroundColor = "rgb(70,130,180)";
  location.reload();    	
});
document.querySelector(".hard").addEventListener("click", function(){
  document.querySelector(".hard").classList.remove("text");
  document.querySelector(".hard").classList.add("fix");
  document.querySelector(".easy").classList.remove("fix");	
	color[3].classList.remove("visible");
	color[4].classList.remove("visible");
	color[5].classList.remove("visible");
	document.querySelector("span").textContent = col1;
});
document.querySelector(".easy").addEventListener("click", function(){	
	document.querySelector(".easy").classList.remove("text");
  document.querySelector(".easy").classList.add("fix");
  document.querySelector(".hard").classList.remove("fix");
  color[3].classList.add("visible");
	color[4].classList.add("visible");
	color[5].classList.add("visible");
	document.querySelector("span").textContent = col2;
});


// square click effects
for(var i=0; i < 6; i++){
  color[i].addEventListener("click", function(){
    if(this.style.backgroundColor != document.querySelector("span").textContent){
      this.classList.add("invisible");
      document.querySelector(".tur").textContent = "Try Again!";
      document.querySelector(".tur").classList.remove("invisible");
    }
    if(this.style.backgroundColor == document.querySelector("span").textContent){
    	document.querySelector(".tur").textContent = "Correct!";
    	document.querySelector(".tur").classList.remove("invisible");
    	document.querySelector(".reload").textContent = "Play Again?";
    	document.querySelector(".big").style.backgroundColor = document.querySelector("span").textContent;
      for(var i=0; i < 6; i++){
        color[i].style.backgroundColor = document.querySelector("span").textContent;
        color[i].classList.remove("invisible");
      }
    }    
  });
}