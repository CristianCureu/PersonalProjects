// // Animation
// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// // tl.fromTo(".container", { y: "-110%" }, { y: "0%", duration: 1.5 });
// tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=0.2");
// tl.fromTo(
//   ".first-line",
//   { opacity: 0 },
//   { opacity: 1, duration: 1.2 },
//   "-=1.3"
// );
// tl.fromTo(
//   ".second-line",
//   { opacity: 0 },
//   { opacity: 1, duration: 1.2 },
//   "-=0.5"
// );
// tl.fromTo(
//   ".third-line",
//   { opacity: 0 },
//   { opacity: 1, duration: 1.2 },
//   "-=0.5"
// );

/* Functionality for Logo */
const butonOn = document.querySelector(".intrerupatorOn");
const butonOff = document.querySelector(".intrerupatorOff");
const logoOn = document.querySelector(".img-logo-on");
const logoOff = document.querySelector(".img-logo-off");

butonOn.addEventListener("click", function () {
  butonOn.style.display = "none";
  logoOn.style.display = "none";
  butonOff.style.display = "flex";
  logoOff.style.display = "flex";
});

butonOff.addEventListener("click", function () {
  butonOn.style.display = "flex";
  logoOn.style.display = "flex";
  butonOff.style.display = "none";
  logoOff.style.display = "none";
});

/* Functionality for About */
const aboutImg = document.querySelector(".aboutme");
const skillsImg = document.querySelector(".skills");
const goalsImg = document.querySelector(".goals");
const contactImg = document.querySelector(".contact");
const aboutSection = document.querySelector(".about-section");
const skillsSection = document.querySelector(".skills-section");
const goalsSection = document.querySelector(".goals-section");
const contactSection = document.querySelector(".contact-section");
const backX = document.querySelector(".burger");
const backX2 = document.querySelector(".burger2");
const backX3 = document.querySelector(".burger3");
const backX4 = document.querySelector(".burger4");

aboutImg.addEventListener("click", function () {
  aboutSection.classList.add("open");
});

skillsImg.addEventListener("click", function () {
  skillsSection.classList.add("open");
});
goalsImg.addEventListener("click", function () {
  goalsSection.classList.add("open");
});
contactImg.addEventListener("click", function () {
  contactSection.classList.add("open");
});

backX.addEventListener("click", function () {
  aboutSection.classList.remove("open");
});
backX2.addEventListener("click", function () {
  skillsSection.classList.remove("open");
});
backX3.addEventListener("click", function () {
  goalsSection.classList.remove("open");
});
backX4.addEventListener("click", function () {
  contactSection.classList.remove("open");
});
