const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const thirdButton = document.getElementById("thirdButton");
const fourthButton = document.getElementById("fourthButton");
const fifthButton = document.getElementById("fifthButton");
const sixthButton = document.getElementById("sixthButton");
const backgroundMusic = document.getElementById("backgroundMusic");




const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");
const screen6 = document.getElementById("screen6");
const screen7 = document.getElementById("screen7");

startButton.addEventListener("click", function() {
	
	screen1.style.display = "none";
	screen2.style.display = "block";
	
	backgroundMusic.play();
});

nextButton.addEventListener("click", function() {
	
	screen2.style.display = "none";
	screen3.style.display = "block";
});

thirdButton.addEventListener("click", function() {
	
	screen3.style.display = "none";
	screen4.style.display = "block";
	
});

fourthButton.addEventListener("click", function() {

    screen4.style.display = "none";
    screen5.style.display = "block";

});

fifthButton.addEventListener("click", function() {
	
	screen5.style.display = "none";
	screen6.style.display = "block";

});

sixthButton.addEventListener("click", function() {
	
	screen6.style.display = "none";
	screen7.style.display = "block";
	
});




