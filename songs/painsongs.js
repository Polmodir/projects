var songs = ["Crystal Castles - Suffocation",
    "Caesars - Jerk It Out",
    "MF DOOM - Rapp Snitch Knishes",
    "Tyler, The Creator - IGOR'S THEME",
    "Have A Nice Life - Bloodhail",
    "Bôa - Twilight",
    "Panchiko - Untitled Demo 1997",
    "Alex Ricellow - Туда Сюда",
    "Radiohead - Everything In Its Right Place",
    "Whirr - Leave",
    "Rebzyyx - all I want is you",
    "The White Stripes - Fell In Love With a Girl",
    "quannnic - life imitates life",
    "Scott Brown - Taking Drugs?"]
var images = ["crystal castles 2.png",
    "caesars .png",
    "mf doom.png",
    "igor.jpeg",
    "bloodhail.jpeg",
    "boa.jpeg",
    "panchiko.jpeg",
    "alex ricellow.jpeg",
    "radiohead.png",
    "whirr.jpeg",
    "rebzyyx.png",
    "the white stripes.webp",
    "quannnic.png",
    "scott brown.jpeg"]
document.getElementById("number").innerText=`${songs.length} songs`
var list = document.getElementById("list")
for (let i = 0; i<songs.length; i++){
    list.innerHTML+=`<div class="words"><p class="num">#${i+1}</p> <p> ${songs[i]}</p> <img width="75px" height="75px" class="image"src="./${images[i]}"></div>`}
function button(){
    document.getElementById("button").style.display="none";
    document.getElementById("list").style.display="block"
}