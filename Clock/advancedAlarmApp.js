let seconds = 10;
let logTick = true;

let timer = setInterval(() => {
    if(logTick){
        console.log("tick");
    } else {
        console.log("tack");
    }
    logTick = !logTick;
}, 1000);

setTimeout(function(){
    clearInterval(timer);
    console.log("Guten Morgen");
}, seconds * 1000 + 100);