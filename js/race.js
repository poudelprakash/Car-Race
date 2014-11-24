var content=document.getElementById("content");
var background=document.getElementById("background");
var backPos=0;
var oppCounter=1;//count the number of opponents
var hCount=1;
function gameLoop (){
	var hx=100;
	this.hElement
	this.oElement;
	this.x=0;
	this.y=0;
	var that=this;
	this.intervalId;
	this.intervaId;
	this.makeOpponent=function(){
		that.oElement=document.createElement('div');
		that.oElement.className="opponent";
		content.appendChild(that.oElement);
		that.x=getRandom();
		that.y=0;
		this.oElement.style.left =that.x+"px";
		that.intervaId=setInterval(that.moveOpponent,20);
		
		// var c=content.removeChild(that.oElement);
		// console.log(c);
	}
	this.makeHero=function(){
		that.hElement=document.createElement('div');
		that.hElement.className="hero";
		content.appendChild(that.hElement);
		that.hElement.style.left=hx+"px";
		that.hElement.style.bottom=0+"px";
	}
	this.changeHeroPosition=function(event){
		//add event listener for hero's position
		hero=document.getElementsByClassName("hero")
		document.addEventListener('keydown', function(event) {
		    if(event.keyCode == 37) {//for left press
					if(hx!=0){
						hx-=100
					}else if(hx==0){
						hx=0;
					}
		        hero[0].style.left=hx+"px";
		    }
		    else if(event.keyCode == 39) {//for right press
		    	if(hx!=200){
						hx+=100
					}else if(hx==200){
						hx=200;
					}
		        hero[0].style.left=hx+"px";
		    }
		}, true);
	}
	this.moveOpponent=function (){
		that.y+=4;
		if (that.y>=400){
			// that.y=0;
			clearInterval(that.IntervaId);
		// content.removeChild("opponent");
		}
		that.oElement.style.top=that.y+"px";
		that.collisionDetection();
		that.moveTrackDownwards();
		
	}
	this.moveTrackDownwards=function(){
		background.style.top = backPos+"px";
		console.log(backPos);
		backPos-=20;
	}
	this.collisionDetection=function(){
		if(that.y==204 && that.x==hx){
				that.gameOver();
			}
	}
	this.gameOver=function(){
		clearInterval(setI)
		alert("game over");
	}	
}
// setI=setInterval(gameLoop, 1000);
var setI=setInterval(bubbles,2500);
function bubbles(){
	var c=new gameLoop;
	c.changeHeroPosition();
	if (oppCounter<=3){
	c.makeOpponent();
	// oppCounter++;
	}
	if(hCount<=1){
		c.makeHero();
		hCount++;
	}
}
function getRandom(){
	var myArray = ['0','100','200']; 
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	return rand;
}