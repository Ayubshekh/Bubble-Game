let timer=60;
let score=0
let hitrn;

function makebubble(){
    let clutter=''

for(let i=1; i<=102;i++){
    let rn=Math.floor(Math.random()*10)
    clutter+=` <div class="bubble">${rn}</div>`
}

document.querySelector('.panel-Bottom').innerHTML=clutter
}

function runtimer(){
   let time =setInterval(function(){
        
       if(timer>0){
        timer--;
        document.querySelector("#timeval").textContent=timer
       }
       else{
        clearInterval(time);
        document.querySelector(".panel-Bottom").innerHTML=`<h1>GAME OVER!</h1> <h2>Score is:${score}</h2>`
       }
         
    },1000)
}

function Newhit(){
     hitrn=Math.floor(Math.random()*10)

    document.querySelector("#hitval").innerHTML=hitrn
}


function incressscore(){
score+=10;
    document.querySelector("#scoreval").textContent=score
}

document.querySelector(".panel-Bottom").addEventListener("click",function(el){
    let bubble=Number(el.target.textContent)

    if(bubble==hitrn){
        makebubble()
        Newhit()
        incressscore()
    }
  
})


runtimer()
makebubble()
Newhit()
