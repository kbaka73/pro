let nums = document.querySelectorAll(".nun");
let section = document.querySelector(".home");
let started =false;

window.onscroll = function(){
  if(window.scrollY >= section.offsetTop){
    if(!started){

      nums.forEach((num)=> startCont(num))
    }
    started = true;
  }
}

function startCont(el){
  let goal = el.dataset.goal;
  let count = setInterval(()=>{
    el.textContent++;
    if(el.textContent === goal){
      clearInterval(count);
    }
  },200/goal)
}

function revealFunction (){
  window.sr = ScrollReveal({duration:750, distance:'250px',
  easing:'ease-out'});
  sr.reveal('.reveal-reset-top',{origin:'top', reset:true});
  sr.reveal('.reveal-reset-bottom',{origin:'bottom', reset:true});
  sr.reveal('.reveal-rotateww',{origin:'bottom', rotate:{z:-1, z:2},
  reset:true
});

}
window.addEventListener('load',()=>{
  revealFunction();
})









