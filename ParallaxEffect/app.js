let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  //   .to(".lemn", 3, { y: -100 })
  .fromTo(".lemn", { y: -50 }, { y: -150, duration: 3 })
  .fromTo(".copac", { y: -50 }, { y: -150, duration: 3 }, "-=3")
  .fromTo(".bg", { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 10, { top: "0%" }, "-=2.3")
  .fromTo(".content-img", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=1")
  .fromTo(".paragraphs", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=1.5");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
