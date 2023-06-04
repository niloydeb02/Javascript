//text change
function BulbChange(){
	document.getElementById('name').innerHTML="NILOY ";

}

//date and time

function dateAndTime(){
	document.getElementById('date').innerHTML= Date();
}

//date and time

function DateAndTime(){
	document.getElementById('h2').innerHTML = Date();
}
//addition
let n1=9;
let n2=11;
let total=n1+n2;
function add(){
	document.getElementById('addi').innerHTML=total;
}
//text change by class
function Textchange(){
	document.getElementsByClassName('p')[2].innerHTML ="Hi";
}
//tag name selector
function CountText(){
	var info =document.getElementsByTagName('p');
	alert(info.length);
}

//bulb
function bulbOnoff(){
	document.getElementById('angry').src="images/smile.png";
}

function BulbonOff(){
	document.getElementById('angry').src="images/angry.png";
}

//bulb
function smileAndAngry(){
	document.getElementById('ang').src="images/smile.png";
}
function SmileAndAngry(){
	document.getElementById('ang').src="images/angry.png";
}


//text
function TextSize(){
	document.getElementById('h4').style.fontSize="40px";
}
//text show and hide
function showAndHide(){
	document.getElementById('sh').style.display ="block";
}
function ShowAndhide(){
	document.getElementById('sh').style.display ="none";
}
//hide show method
function ShowandHide(){
	document.getElementById('h5').style.display="block";
}

function showandHide(){
	document.getElementById('h5').style.display="none";
}
//text addition
let number=3.14;
let text="NILOY";
document.getElementById('text').innerHTML=number+"<br>"+text;


//animation
const div1=document.getElementById('box');
function myFunction(){
	div1.style.animation="mymove 4s 2";}

div1.addEventListener("animationstart", myStartFunction);
div1.addEventListener("animationiteration", myRepeatFunction);
div1.addEventListener("animationend", myEndFunction);

function myStartFunction(){
	this.innerHTML="Then animation has started";
	this.style.backgroundColor="pink";
}
function myRepeatFunction(){
	this.innerHTML="the animation was played again";
	this.style.backgroundColor="lightblue";
}

function myEndFunction() {
  this.innerHTML = "The animation has completed";
  this.style.backgroundColor = "lightgray";
}


//backend addition

	document.getElementById('addition').innerHTML = 
	3+5;


