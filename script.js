var cur=document.querySelector("#cursor");

document.addEventListener('mousemove',(e)=>{
    cur.style.left=e.x +"px";
    cur.style.top=e.y +"px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100",
    duration:0.5,
    scrollTrigger:{
        target:"#nav",
        scroll:"body",
        // markers:true,
        scrub:2,
        start:"top -10%",
        end:"top -11%"
    }
    
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        target:".main",
        scroll:"body",
        // markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub:2


    }
})