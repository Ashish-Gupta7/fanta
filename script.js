function locomotive() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);
      
      // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
      });
}
locomotive();

const fanta = document.querySelector(".page1 .pg1Img .img1");
const leaf = document.querySelector(".page1 .pg1Img .img2");
const leaf2 = document.querySelector(".page1 .pg1Img .img3");
const orange = document.querySelector(".page1 .pg1Img .img5");
const orange2 = document.querySelector(".page1 .pg1Img .img6");

function timeline1(){
  var tl1 = gsap.timeline({scrollTrigger:{
    trigger: ".page2",
    scroller: "#main",
    start: "0% 100%",
    end: "100% 100%",
    scrub: true,
  }});
  
  tl1.to(fanta, {
    left: "13%",
    top: "150%",
    zIndex: 11
  }, "same");
  tl1.to(orange, {
    left: "80%",
    top: "180%",
  }, "same");
  tl1.to(orange2, {
    left: "22%",
    top: "172%",
    zIndex: 10
  }, "same");
  tl1.to(leaf, {
    left: "67%",
    top: "100%",
    rotate: "-235deg"
  }, "same");
  tl1.to(leaf2, {
    left: "-2%",
    top: "115%",
    scale: 1.2,
    rotate: "-180deg"
  }, "same");
}
timeline1();

function timeline2(){
  var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".page3",
    scroller: "#main",
    start: "0% 100%",
    end: "100% 100%",
    scrub: true,
  }});
  tl2.to(fanta, {
    width: "33vw",
    height: "60%",
    left: "43%",
    top: "246%",
    zIndex: 11
  });
}
timeline2();