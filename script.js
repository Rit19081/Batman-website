var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
var bat = document.querySelector("#cursor-bat")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150  + "px"
    bat.style.left = dets.x - 200 + "px"
    bat.style.top = dets.y - 200  + "px"
})
var video = document.getElementById("backgroundAudio");
    function playPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
gsap.to("#nav",{
    backgroundColor : "#000",
    height:"100px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"nav",
        scroller: "body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end: "top -80%",
        scrub: 2
    }
})
gsap.from("#about-batman img,#batman",{
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:"#about-batman",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub:1
    }
})
gsap.from(".cards",{
    scale: 0.8,
    opacity: 0,
    duration: 1,
    
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page-4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 100%",
        scrub:3
    }
})