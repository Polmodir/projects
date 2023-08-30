const buttons = document.getElementsByClassName("box");
var box = document.getElementsByClassName("box")
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const innerText = buttons[i].innerText;
    activeAudio(innerText);
  });
}
document.addEventListener("keyup",(event)=>{
  activeAudio(event.key)
})

function activeAudio(key) {
  switch (key) {
    case "a":
        audio("./sounds/tom-1.mp3")
        break;
    case "s":
      audio("./sounds/tom-2.mp3")
        break;
    case "d":
      audio("./sounds/tom-3.mp3")
        break;
    case "f":
      audio("./sounds/tom-4.mp3")
        break;
    case "g":
      audio("./sounds/crash.mp3")
        break;
    case "h":
      audio("./sounds/snare.mp3")
        break;
    case "j":
      audio("./sounds/kick-bass.mp3")
        break;
  }
}
function audio(path){
  const tom1 = new Audio(path);
  tom1.play();
}
