
let skil = document.querySelector(".treee");
let spans = document.querySelectorAll(".skils span");
window.onscroll = function (){
      // skils
      if(window.scrollY >= skil.offsetTop){
        spans.forEach((span)=>{
            span.style.width = span.dataset.width;
            
        })
    }
}

