let keyarray =["a","s","d","f","g","h","j","k","l"]
function playaudio(ele){
audio =document.querySelector(`#${ele}`)
 audio.currentTime =0;
 audio.play();
}
function animation(ele){
let key =document.querySelector(`.${ele}`)
key.classList.add('effect');
setTimeout(()=>{
    key.classList.remove('effect');
},300)
}

let click =document.addEventListener("keypress",(event)=>{
keyarray.forEach(element => {
    ele =element.toLowerCase();
    if(event.key == ele){
        animation(event.key)
        playaudio(event.key)
    }else{
        return ;
    }
});
})