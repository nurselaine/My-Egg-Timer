// create objects of each specific egg
// assign cook times for each object
// room temp egg = 30 min
// fridge temp egg = 1 min
// egg size: small = 5 sec medium = 10 sec large = 30 sec
// egg type: Hard = 8 medium = 6 soft = 4

let seconds = 00;
let tens = 00;
let fridgeTemperature = document.getElementById('fridge-temperature-button');
let roomTemperature = document.getElementById('room-temperature-button');
let sizeSmall = document.getElementById('small');
let sizeMedium = document.getElementById('medium');
let sizeLarge = document.getElementById('large');
let typeSoft = document.getElementById('typeSoft'); //4
let typeMedium = document.getElementById('typeMedium');//6
let typeHard = document.getElementById('typeHard');//8


let domTens = document.getElementById('tens');
let domSeconds = document.getElementById('seconds');
let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');
let resetButton = document.getElementById('reset-button');
let Interval;
let time = "";


fridgeTemperature.onclick = function(){
    console.log('add 60 seconds');
    let fridgeTime = 60;
};

roomTemperature.onclick = function (){
    console.log('add 30 seconds');
    let roomTime = 30;
};

sizeSmall.onclick = function (){
    console.log('add 30 seconds');
    let smallTime = 30;
};

sizeMedium.onclick = function (){
    console.log('add 45 seconds');
    let mediumTime = 45;
};

sizeLarge.onclick = function (){
    console.log('add 60 seconds');
    let largeTime = 60;
};

typeSoft.onclick = function(){
    console.log('add 4 minutes');
    let typeSoftTime = 4 * 60;
};

typeMedium.onclick = function (){
    console.log('add 6 minutes');
    let typeMediumTime = 6 * 60;
};

typeHard.onclick = function (){
    console.log('add 8 minutes');
    let typeHardTime = 8 * 60;
};

let estimateTime = function estimateTime(){
    if (fridgeTemperature && sizeSmall && typeSoft){
        time = 60 + 30 + (4 *60);
        document.getElementById('estimateTime').innerHTML = time;
    }
}

    //
    // function getTime (){
    //     // fridge variations
    //     // size small
    //     if (fridgeTemperature + sizeSmall + typeSoft){
    //         time = fridgeTemperature + sizeSmall + typeSoft
    //     } else if (fridgeTemperature + sizeSmall + typeMedium){
    //         time = fridgeTemperature + sizeSmall + typeMedium
    //     } else if (fridgeTemperature + sizeSmall + typeHard){
    //         time = fridgeTemperature + sizeSmall + typeHard
    //         // size medium
    //     } else if (fridgeTemperature + sizeMedium + typeSoft){
    //         time = fridgeTemperature + sizeMedium + typeSoft
    //     } else if (fridgeTemperature + sizeMedium + typeMedium){
    //         time = fridgeTemperature + sizeMedium + typeMedium
    //     } else if (fridgeTemperature + sizeMedium + typeHard){
    //         time = fridgeTemperature + sizeMedium + typeHard
    //     }
    //         // size large
    //     else if (fridgeTemperature + sizeLarge + typeSoft){
    //         time = fridgeTemperature + sizeLarge + typeSoft
    //     } else if (fridgeTemperature + sizeLarge + typeMedium){
    //         time = fridgeTemperature + sizeLarge + typeMedium
    //     } else if (fridgeTemperature + sizeLarge + typeMedium){
    //         time = fridgeTemperature + sizeLarge + typeMedium
    //     }
    // }
    //
    // document.getElementById('test').innerHTML = time;


// let temperature = "";
// let size = "";
// let eggType = "";
// let time = "";
//
// const clickFridgeTemperature = function() {
//     console.log("button click");
//     temperature = 36;
// }
// const clickRoomTemperature = function() {
//     console.log("button click");
//     temperature = 60;
// }
//
// const clickSizeSmall = function() {
//     console.log("button click");
//     size = "small";
// }
// const clickSizeMedium = function() {
//     console.log("button click");
//     size = "medium";
// }
// const clickSizeLarge = function() {
//     console.log("button click");
//     size = "large";
// }
//


