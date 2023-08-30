var check;
var seco = 0;
var milli = 0;
var minu = 0;
var asdf;
function start(){
    asdf = !asdf;
    if (asdf) {
        document.getElementById("button1").innerText = "pause";
        coolname = setInterval(nice, 10);}
     else {
        document.getElementById("button1").innerText = "start";
        clearInterval(coolname);;
}}
function stop(){
    clearInterval(coolname);;
    milli = 0;
    seco = 0;
    minu = 0;
    document.getElementById("millisecond").innerText="00";
    document.getElementById("second").innerText="00";
    document.getElementById("minute").innerText="00";

}

function nice(){
    milli += 1;
    if (milli==100){
        milli = 0;
        seco += 1;
        if (seco==60){
            seco = 0;
            minu += 1;
            document.getElementById("minute").innerText = String(minu).padStart(2, "0");
        }
        document.getElementById("second").innerText = String(seco).padStart(2, "0");
        }
    document.getElementById("millisecond").innerText = String(milli).padStart(2, "0");
}