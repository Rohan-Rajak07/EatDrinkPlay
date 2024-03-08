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
        start:"top -40%",
        end:"top -80%",
        scrub:2


    }
})