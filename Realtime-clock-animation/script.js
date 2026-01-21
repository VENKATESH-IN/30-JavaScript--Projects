let sec =document.querySelector(".sec");
let min =document.querySelector(".min");
let hour =document.querySelector(".hour");

function getTime(){
    let now = new Date();
     let second =now.getSeconds();
     let secdeg =(((second/60)*360)+90);
     sec.style.transform =`rotate(${secdeg}deg)`;

     let minutes =now.getMinutes();
     let mindeg =(((minutes/60)*360)+90);
     min.style.transform =`rotate(${mindeg}deg)`;

    let hourex =now.getHours();
    let hrdeg =(30*(hourex-12)+90)
    hour.style.transform =`rotate(${hrdeg}deg)`;

}

setInterval(getTime,1000);
getTime();