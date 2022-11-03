
const button = document.querySelector(".menuline")
const cross = document.querySelector(".ri-arrow-left-circle-fill");
const overlay = document.querySelector(".overlay")

let flag =0;

button.addEventListener("click",function(){
    if(flag===0){
             overlay.style.transform = "translateX(0%)";
               flag=1 ;
               console.log('fgg');
            } else if(flag==1) {
                overlay.style.transform = "translateX(100%)";
                flag = 0;
                console.log('gg');
            }
}); 


// cross.addEventListener("click",function(){
    
//  overlay.style.tranaform = "translateX(100%)";
// })

// cross.addEventListener("click",function(){
//     if (flag===0){
//      overlay.style .transform = "translateX(100%)";
//        flag=1 
//     } else{
//         overlay.style .transform = "translate(0)";
//         flag = 0
//     }

// })


gsap.from(".line2 h1",{
    y:600,
    scale:0.2,
    opacity:0,
    duration:5
})

// gsap.from(".overlay>.line1",{
//     scrollTrigger:{
//         trigger: "img",
//         scroller:"body",
//         start:"top 40%",
//         markers:true,
//         end:"top 20%",
//          scrub:true
//     },
//     y:500,

//     scale:0,
//     duration:4,
//     opacity:0
// })

// gsap.from(".botle",{
//     scrollTrigger:{
//         trigger: ".botle",
//         scroller:"body",
//         start:"top 40%"
//     },
//     y:100,
//     scale:6,
//     duration:1.5,
//     opacity:0
// })

gsap.from(".botle",{
    y:50,
    duration:2
})





   
