// Detecting Button press 
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); 

function handleClick(){

    var button = this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
}
}
// ---- for key press access for our webpage
// document.addEventListener("keydown",function(){
    //     alert("Key was pressed!");
    // })

    // Detecting key press
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })
    
    //function of sound
    function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();   
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();   
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();   
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();   
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();   
                break;
            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();   
                break;
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();   
                break;
            default:
                console.log(button)
                break;
        }

    }

// to add the animation i.e to show that the button is clicked.. the clicked button turns transparent and white outline displays --> pressed in css
    function buttonAnimation(currentKey){
      var activeButton = document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");

      //to remove this animation so that it can be clicked again
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      }, 100)
    }