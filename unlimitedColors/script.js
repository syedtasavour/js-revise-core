const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')
let intervalId = null;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function setColor(max){
    const red = getRandomInt(max)
    const green = getRandomInt(max)
    const blue = getRandomInt(max)
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  }
  

  start.addEventListener('click',function(){
    if(intervalId === null){
        intervalId = setInterval(setColor,1000,255)
        console.log('clicked');
        
    }})

    stop.addEventListener('click',function(){
        if(intervalId != null){
        clearInterval(intervalId);
        intervalId = null;
        console.log('stop');
            
        }})


 
