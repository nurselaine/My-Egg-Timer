// create objects of each specific egg
// assign cook times for each object
// room temp egg = 30 min
// fridge temp egg = 1 min
// egg size: small = 5 sec medium = 10 sec large = 30 sec
// egg type: Hard = 8 medium = 6 soft = 4

let minutes = 0;
let seconds = 0;
let fridgeTemperature = document.getElementById('fridge-temperature-button');
let roomTemperature = document.getElementById('room-temperature-button');
let sizeSmall = document.getElementById('small');
let sizeMedium = document.getElementById('medium');
let sizeLarge = document.getElementById('large');
let typeSoft = document.getElementById('typeSoft'); //4
let typeMedium = document.getElementById('typeMedium');//6
let typeHard = document.getElementById('typeHard');//8


let domMinutes = document.getElementById('minutes');
let domSeconds = document.getElementById('seconds');
let BoilTimeButton = document.getElementById('estimateBoilTimeButton');
let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let resetButton = document.getElementById('reset-button');
let Interval;
let time = "";

let eggTemperatureTime = 0; // keeps track of fridge/room tmep
let eggBoilTypeTime = 0;
let eggSizeTime = 0;
let currentTimeInSeconds = 0;
let displayTimeInMinutesSeconds;
let interval;

fridgeTemperature.onclick = function(){
    console.log('60 seconds')
    eggTemperatureTime = 60;
};

roomTemperature.onclick = function (){
    console.log('30 seconds')
    eggTemperatureTime = 30;
};

sizeSmall.onclick = function (){
    console.log('30 seconds')
    eggSizeTime = 30;
};

sizeMedium.onclick = function (){
    console.log('45 seconds')
    eggSizeTime = 45;
};

sizeLarge.onclick = function (){
    console.log('60 seconds')
    eggSizeTime = 60;
};

typeSoft.onclick = function(){
    console.log(4*60 + ' seconds')
    eggBoilTypeTime = 4 * 60;
};

typeMedium.onclick = function (){
    console.log(6*60 + ' seconds')
    eggBoilTypeTime = 6 * 60;
};

typeHard.onclick = function (){
    console.log(8*60 + ' seconds')
    eggBoilTypeTime = 8 * 60;
};


// write a function that comes up with a time
const getCurrentTimeToDisplay = function(){

   let currentTimeToDisplay = 0;
   // add temperature to current time
    currentTimeToDisplay += eggTemperatureTime;
    currentTimeToDisplay += eggBoilTypeTime;
    currentTimeToDisplay += eggSizeTime;
    currentTimeInSeconds = currentTimeToDisplay;
    console.log(currentTimeToDisplay);
    // change seconds to minutes : seconds
        // get minutes
        minutes = Math.floor(currentTimeInSeconds / 60);
        // get seconds
        seconds = (currentTimeInSeconds % 60);
        displayTimeInMinutesSeconds = minutes + " : " + seconds;
        console.log(displayTimeInMinutesSeconds);
}


BoilTimeButton.onclick = function(){
    getCurrentTimeToDisplay();
    // print minute and seconds values into html
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    domMinutes.innerHTML = minutes;
    if (seconds == 0){
        seconds = "00"
    }
    domSeconds.innerHTML = seconds;
}

function countDownTimer(){
    seconds--

    if (seconds < 0){
        seconds = 59;
        domSeconds.innerHTML = seconds;
        minutes--;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(seconds == 0){
        domSeconds.innerHTML = "00";
    }

    domMinutes.innerHTML = minutes;

    console.log(minutes + " : " + seconds);

    domSeconds.innerHTML = seconds;
}

startButton.onclick = function(){
    clearInterval(interval);
    interval = setInterval(countDownTimer, 1000);
}

stopButton.onclick = function stopTImer(){
    clearInterval(interval);
}

resetButton.onclick = function(){
    // reset time to 00:00
    domMinutes.innerHTML = "00";
    domSeconds.innerHTML = "00";
    clearInterval(interval);
}
