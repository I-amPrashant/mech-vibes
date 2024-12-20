const soundCategory=document.getElementById('sound-category');
const start=document.getElementById('start')
const refresh=document.getElementById('refresh')
const checkSpeed=document.getElementById('checkSpeed')
const inputField=document.getElementById('inputField')
const theme=document.getElementById('theme')
const textDisplay=document.getElementById('text-display')


let playAudio=null
soundCategory.addEventListener('change', (e)=>{
    inputField.removeEventListener('keydown', playAudio)
    if(e.target.value==='off'){
        return
    }
     playAudio=()=>{
        const audio=new Audio(e.target.value)
        audio.play();
    }
    inputField.addEventListener('keydown', playAudio)  
})
theme.addEventListener('click', ()=>{
    document.getElementById('container').classList.toggle('dark')
    if(document.getElementById('container').classList.contains('dark')){
        theme.innerHTML='<i class="fa-solid fa-sun"></i>'
    }else{
        theme.innerHTML='<i class="fa-solid fa-moon"></i>'
    }
})


let paragraph='Apple balloon chair river galaxy orange mountain table giraffe pencil clock forest umbrella sunlight whisper notebook cactus rainbow bottle mirror cat window ladder airplane elephant book sky jellyfish paper candle keyboard dolphin car tunnel chocolate backpack ocean camera spider tiger notebook tree train suitcase feather castle moon brush guitar bicycle zebra dragon coin star banana cup globe bridge sunflower ladder kite dragonfly mango basket engine lion shadow jellybean clock apple light computer robot thunder spoon marshmallow telescope violet strawberry honey chair cricket fan gold fox orange cloud bottle elephant volcano chocolate map rocket pirate garden diamond puzzle turtle kiwi door flame jacket compass anchor pebble lantern scarf umbrella chocolate lamp squirrel owl river house tiger crown flower bottle eagle whistle nest parrot clock starfish ruler teapot lizard snail chair spider lake ladder mountain orange butterfly cloud zebra plum umbrella engine curtain mirror.'
let randomParagraph=''
const  randomParagraphGenerator=()=>{
    let pArray=paragraph.split(' ');
    pArray.forEach((element, index) => {
        if(index>100) randomParagraph+=`${element} `
    });
}
randomParagraphGenerator();
textDisplay.innerHTML=randomParagraph

let paragraphWordCount=0;
let correctWordCount=0;
let isStart=false
let isCheckSpeed=false
checkSpeed.setAttribute('disabled', 'true')
const startTyping=()=>{
    isStart=true;
    isCheckSpeed=false;
    start.setAttribute('disabled', 'true')
}

const refreshTyping=()=>{

}

const checkSpeedTYping=()=>{

}

start.addEventListener('click', startTyping);
refresh.addEventListener('click', refreshTyping);
checkSpeed.addEventListener('click', checkSpeedTYping);
