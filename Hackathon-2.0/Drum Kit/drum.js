var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("./music/tom1.wav");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./music/tom2.wav");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('./music/tom3.wav');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('./music/tom4.wav');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('./music/tom3.wav');
      snare.play();
      break;

    case "k":
      var crash = new Audio('./music/tom1.wav');
      crash.play();
      break;

    case "l":
      var kick = new Audio('./music/tom5.wav');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}