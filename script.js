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
gsap.from("#colon-1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        scrub:2
    }
})
gsap.from("#colon-2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        scrub:1
    }
})
gsap.from("#page-4 p",{
    y:100,
    scrollTrigger:{
        trigger:"#page-4 p",
        scroller:"body",
        scrub:1
    }
})