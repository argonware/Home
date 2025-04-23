function animationSet() {

    let num = 0;
    const particles = (element) => {
    num++;
if (num >= 100) return; // limit the number of particles

    requestAnimationFrame(() => {
                const particle = document.createElement("div");
                particle.className = "particle"; 
                particle.style.opacity = 0; 
                element.appendChild(particle);
                element.style.overflow = "hidden";
                particle.style.position = "absolute";
                particle.style.bottom = "0";
                particle.style.width = Math.random() * 10 + "px";
                particle.style.borderRadius = "50%";
                particle.style.aspectRatio = "1/1";
                particle.style.backgroundColor = `var(--primary-color${Math.floor(Math.random() * 5)})`;
                particle.style.left = Math.random() * 95 + "vw";
                particle.style.boxShadow = `0 0 1rem .1rem var(--primary-color${Math.floor(Math.random() * 5)})`;
                particle.style.animation = ` particle 4s ${Math.random()*5}s linear infinite`;
           console.log(element);
           
            })
            particles(element);
}
const header = document.querySelector("header");
    particles(header);
    
    // now making a universal float animation for class .float elements
    function floate(e) {
        e.style.animation = `float 3s  ${Math.floor(Math.random() * 4)}s infinite  ease-in-out`;
    }
    const floats = document.querySelectorAll(".float");
    floats.forEach(float => floate(float)); 
    
    
    
    
    
    //  gsap animation for the text in the header
    const tl = gsap.timeline({ defaults: { duration: 3 } });

    tl.from("nav", { y: "-100%", ease: "power" })
    .from(".header-center", {scale: 0, opacity: 0, y: "-100%", ease: "power" }, "<")
    .from(".header-heading", { height: 0, opacity: 0, ease: "power" }, "<")
    .from(".header-description", { height: 0, opacity: 0, ease: "power" }, "<")
    .from(".header-cta", { scale: 0, opacity: 0, ease: "power" }, "<");        



    
    
    
    // slider functionality
    sliderAnim();

}

function sliderAnim() {
        const tl2 = gsap.timeline();
    tl2.to(".slider-container", { xPercent: -75,})
  
    ScrollTrigger.create({
        trigger: ".about-section-out",
        start: "top top",   
        pin: ".about-section",
        scrub: 1,
        endTrigger: ".about-section-out",
        end: "+=1000",
        markers: true,
        animation: tl2,
        invalidateOnRefresh: true,
        onEnter: () => {
            gsap.to(".slider-container", { xPercent: -75, duration: 1 });
        },
    });   
}


 

   







window.addEventListener("load", animationSet);
let resizeTimeOut;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
    gsap.killTweensOf(".slider-container"); // Kill previous GSAP animations
    ScrollTrigger.refresh(); // Refresh all ScrollTriggers
    sliderAnim(); // Reinitialize the slider animation
    });
}); 