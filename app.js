function animationSet() {
  const header = document.querySelector("header");
  particles(header);

  // now making a universal float animation for class .float elements
  function floate(e) {
    e.style.animation = `float 3s  ${Math.floor(
      Math.random() * 4
    )}s infinite  ease-in-out`;
  }
  const floats = document.querySelectorAll(".float");
  floats.forEach((float) => floate(float));
  //  gsap animation for the text in the header
  const tl = gsap.timeline({ defaults: { duration: 3 } });
  tl.from("nav", { y: "-100%", ease: "power" })
    .from(
      ".header-center",
      { scale: 0, opacity: 0, y: "-100%", ease: "power" }, "<")
    .from(".header-heading", { height: 0, opacity: 0, ease: "power" }, "<")
    .from(".header-description", { height: 0, opacity: 0, ease: "power" }, "<")
    .from(".header-cta", { scale: 0, opacity: 0, ease: "power" }, "<");
  // slider functionality
  sliderAnim();
} 
// header bg settings
  for (let i = 1; i < 5; i++) {
    const crEl = document.querySelector(`.header-bg-part${i}`);
    if (i <= 2) {
      crEl.style.animation = `header-bg 8s ${Math.floor(
        Math.random() * 10
      )}s  infinite alternate`;
    } else {
      crEl.style.animation = `header-bg2 8s ${Math.floor(
        Math.random() * 10
      )}s  infinite alternate`;
    }
  }
// nav is smaller on scroll funtion
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY) {
      nav.classList.add("shorter-nav");

    } else {
      nav.classList.remove("shorter-nav");
    }
  });
// functions for each process

//  slider functionality
function sliderAnim() {
  const tl2 = gsap.timeline();
  tl2.to(".slider-container", { xPercent: -75});

  ScrollTrigger.create({
    trigger: ".slider-container",
    start: "top 100px",
    pin: ".about-section-out",
    scrub: 1,
    endTrigger: ".about-section-out",
    end: "+=1000",
    animation: tl2,
    invalidateOnRefresh: true,
    immediateRender: false
  });

}
// particles effect
let num = 0;
const particles = (element) => {
  num++;
  if (num >= 50) return;
  requestAnimationFrame(() => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.opacity = 0;
    element.appendChild(particle);
    element.style.overflow = "hidden";
    particle.style.zIndex = 100;
    particle.style.position = "absolute";
    particle.style.bottom = "0";
    particle.style.width = Math.random() * 10 + "px";
    particle.style.borderRadius = "50%";
    particle.style.aspectRatio = "1/1";
    particle.style.backgroundColor = `var(--primary-color${Math.floor(
      Math.random() * 5
    )})`;
    particle.style.left = Math.random() * 95 + "vw";
    particle.style.boxShadow = `0 0 1rem .1rem var(--primary-color${Math.floor(
      Math.random() * 5
    )})`;
    particle.style.animation = ` particle 4s ${
      Math.random() * 5
    }s linear infinite`;
  });
  particles(element);
};
// positoin generater
// finalized loading of everything on startup
window.addEventListener("load", animationSet);
// gsap debugging
let resizeTimeOut;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeOut);
  resizeTimeOut = setTimeout(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers
    gsap.killTweensOf(".slider-container"); // Kill previous GSAP animations
    ScrollTrigger.refresh(); // Refresh all ScrollTriggers
    sliderAnim(); // Reinitialize the slider animation
  });
});

// extra development time only
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     const contactSection = document.querySelector(".contact");
//     if (contactSection) {
//       contactSection.scrollIntoView();
//     }
//   }, 100);
// });
function toggleClass(_class, element) {
  const target = document.querySelector(element);
  target.classList.toggle(_class);
} 
