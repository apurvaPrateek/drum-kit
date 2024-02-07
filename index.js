var arr = document.querySelectorAll(".drum");



var audio1=new Audio("./sounds/crash.mp3");
var audio2=new Audio("./sounds/kick-bass.mp3");
var audio3=new Audio("./sounds/snare.mp3");
var audio4=new Audio("./sounds/tom-1.mp3");
var audio5=new Audio("./sounds/tom-2.mp3");
var audio6=new Audio("./sounds/tom-3.mp3");
var audio7=new Audio("./sounds/tom-4.mp3");

var aud = [audio1,audio2,audio3,audio4,audio5,audio6,audio7];


for (var i = 0; i < arr.length; i++) {
    
    
  arr[i].addEventListener("click", function () {
    var key=this.innerHTML;
        playSound(key);
        
  });
}

document.addEventListener("keydown", function(event){
    
    playSound(event.key);
    
})


function playSound(key){
    switch(key){
        case 'w':
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                addAnimation(key);
                break;
            case 'a':
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                addAnimation(key);
                break;
            case 's':
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                addAnimation(key);
                break;
            case 'd':
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                addAnimation(key);
                break;
            case 'j':
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                addAnimation(key);
                break;
            case 'k':
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                addAnimation(key);
                break;
            case 'l':
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                addAnimation(key);
                break;
            default: 
                console.log();
    }
}

function addAnimation(pressedKey){
    var activeButton = document.querySelector("."+pressedKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}


