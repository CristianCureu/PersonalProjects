const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("#dot1", { opacity: 0 }, { opacity: 1, duration: 1 }, "+=0.3");
tl.fromTo("#dot2", { opacity: 0 }, { opacity: 1, duration: 0.75 });
tl.fromTo("#dot3", { opacity: 0 }, { opacity: 1, duration: 0.75 });
tl.fromTo(".green-bg", { opacity: 1 }, { opacity: 0.5 });

tl.fromTo(".purple-bg", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=1.2");
tl.fromTo(".purple-bg", { scale: 0 }, { scale: 1, duration: 1 }, "-=0.5");
tl.fromTo(".menu", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "+=0.4");

// tl.fromTo(
//   ".purple-bg",
//   { width: 0, marginLeft: 850 },
//   {
//     width: 170,
//     marginLeft: 0,
//     immediateRender: false,
//     duration: 0.5,
//   },
//   "-=1"
// );

const menu = document.getElementById("menu");
const purpleBg = document.getElementById("purple-bg");

menu.addEventListener("click", () => {
  purpleBg.classList.toggle("active");
});
