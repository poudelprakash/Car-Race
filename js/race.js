var content=document.getElementById("content");
var background=document.getElementById("background");
var backPos=0;//default background position
var oppCounter=1;//count the number of opponents
var hCount=1;
var hx=100;
var hero=document.getElementsByClassName("hero");
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
function gameLoop (){	
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
	}
	this.makeHero=function(){
		that.hElement=document.createElement('div');
		that.hElement.className="hero";
		content.appendChild(that.hElement);
		that.hElement.style.left=hx+"px";
		that.hElement.style.bottom=0+"px";
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
		backPos-=2;
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
var setI=setInterval(game,1500);
function game(){
	var c=new gameLoop;
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