var a =prompt("WELCOME !!! PLEASE ENTER YOUR REAL NAME");
document.querySelector("h1").innerHTML=a+"'S 93' DRUMMER KID";
alert("IF YOU ARE USING ANY COMPUTER , YOU CAN ALSO USE YOUR KEYBOARD TO PLAY RESPECTIVE KEYS *IN LOWERCASE* <3");
document.querySelector("h1").innerHTML=a+"'S 93' DRUMMER KID";
var num = document.querySelectorAll(".drum").length;
function check(arg){
    switch (arg) {
        case "w":
          var ad7 = new Audio ("sounds/crash.mp3");
          ad7.play();  
          break;
  
        case "a":
            var ad8 = new Audio ('sounds/kick-bass.mp3');
            ad8.play();  
            break;
        case "s":
                var ad9 = new Audio ("sounds/snare.mp3");
                ad9.play();  
                break;
                
        case "d":
                    var ad40 = new Audio ('sounds/tom-1.mp3');
                    ad40.play();  
                    break;
        case "j":
                        var ad50 = new Audio ('sounds/tom-2.mp3');
                        ad50.play();  
                        break;
        case "k":
                            var ad60 = new Audio ('sounds/tom-3.mp3');
                            ad60.play();  
                            break;
        case "l":
                                var ad70 = new Audio ('sounds/tom-4.mp3');
                                ad70.play();  
                                break;
                                                                                              
      }
  
}
var num= document.querySelectorAll(".drum").length;
for(i=0 ; i < num ; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function f(){
      var sel = this.innerHTML;
      check(sel);
      buttonAnimation(sel);

    })
}

document.addEventListener("keydown",function(event){
    
    check(event.key);
    buttonAnimation(event.key);
    
})


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
