
// const textFile = document.querySelectorAll('input')[1]; 

// textFile.addEventListener('keydown', function (e) {
//     const audioFiles=['./sound 5.mp3']

//     console.log(e.key===' ')
//     const audio = new Audio(`${audioFiles[Math.floor(Math.random() * audioFiles.length)]}`);

//     audio.play();
   
// })  

const soundCategory=document.getElementById('sound-category');
const start=document.getElementById('start')
const refresh=document.getElementById('refresh')
const checkSpeed=document.getElementById('checkSpeed')
const inputField=document.getElementById('inputField')


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