var numSquares = 6;
var colors= generateRandomColors(numSquares);
var clickedColor = null ;
var pickedColor=pickColor();
var squares =document.querySelectorAll(".square");
var h1 =document.querySelector("h1");
var colorDisplay =document.getElementById("colorDisplay");
var message=document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


//easy and hard mode choices
easyBtn.addEventListener("click",function(){
	//add selected class to easy button
	easyBtn.classList.add("selected");
	//remove selected class from hard button
	hardBtn.classList.remove("selected");
	//now we will generate 3 new colors 
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//then choose the correct colour out of those 3 
	pickedColor= pickColor();
	//then we will display the textContent as pickedColor
	colorDisplay.textContent=pickedColor;
	//remove lower  3 blocks
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	//add selected class to hard button
	hardBtn.classList.add("selected");
	//remove selected class from easy button
	easyBtn.classList.remove("selected");
	//now we will generate 6 new colors 
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//then choose the correct colour out of those 6
	pickedColor= pickColor();
	//then we will display the textContent as pickedColor
	colorDisplay.textContent=pickedColor;
	//show lower 3 blocks
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";		
	}
});

//new colour button 
resetButton.addEventListener("click",function(){
	//assign all 6 new colours
	colors= generateRandomColors(numSquares);
	//pick a new random colour
	pickedColor=pickColor();
	//change colour display to match picked color
	colorDisplay.textContent=pickedColor;
	//change the message as empty string as user start new game
	message.textContent="";
	//change the content of button as new Colour after each click
	this.textContent="New Colors"
	//change the colours of square
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	//change the background of h1 to default
h1.style.background="#steelblue";
});

//managing the square div
for(var i=0;i<squares.length;i++)
{
	//add initial colors to the squares 
	squares[i].style.background = colors[i];
	//add click listeners to the squares
	squares[i].addEventListener("click",function()
	{
		clickedColor = (this.style.background) ;
		if(clickedColor === pickedColor)
		{
			message.textContent="Correct : )";
			h1.style.background=clickedColor;
			changeColors(clickedColor);
			//change the text of button to PLAY AGAIN
			resetButton.textContent="Play Again";
		}
		else
		{
			this.style.background = "#232323";
			message.textContent ="Try Again : (";
		}
	});
}

//change colour of all square to correct color
function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}

//randomly pick a colour from unch of other colors
function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//used to generate many random colours
function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)//repeat num times
	{
		//get random colour and push it 
		arr.push(randomColor());
	}
	return arr;//return that array of random colors
}

//called in generateRandomColors and generates one colour string
function randomColor()
{
	//pick random value of red 
	var r = Math.floor(Math.random()*256);
	//pick random value of green
	var g = Math.floor(Math.random()*256);
	//pick random value of blue
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}