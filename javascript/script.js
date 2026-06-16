const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.2
});

reveals.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {

  const stickman = document.querySelector("#stickman");
  const arm = document.querySelector("#stickman-arm");

  // safety check (prevents page crash)
  if (!stickman || !arm) return;

  gsap.set("#stickman-arm", { transformOrigin: "top left" });

  const tl = gsap.timeline({
    repeat: 0,
    defaults: { ease: "power2.inOut" }
  });

  // 1. walk in
  tl.to("#stickman", { x: 120, duration: 2 })

  // 2. try switch (broken state)
    .to("#stickman-arm", { rotation: -35, duration: 0.3 })
    .to("#switch", { backgroundColor: "#333", duration: 0.2 }, "<")

  // 3. confusion pause
    .to({}, { duration: 1 })

  // 4. ladder appears
    .to("#ladder", { opacity: 1, duration: 0.5 })

  // 5. climb (split movement = more realistic)
    .to("#stickman", { y: -50, duration: 1 })
    .to("#stickman", { y: -100, duration: 1 })

  // 6. bulb swap (slight delay for realism)
    .to("#bulb-old", { opacity: 0, duration: 0.25 })
    .to("#bulb-new", { opacity: 1, duration: 0.25 }, "<")

  // 7. light turns on (glow first, then switch)
    .to("#light-glow", { opacity: 1, duration: 0.5 })
    .to("#switch", { backgroundColor: "#FFD700", duration: 0.2 }, "<")

  // 8. satisfied wave (smoother loop)
    .to("#stickman-arm", {
      rotation: 25,
      duration: 0.25,
      repeat: 5,
      yoyo: true
    })

  // 9. exit scene (scaled for card layout)
    .to("#stickman", { x: 260, duration: 2 });

});

document.addEventListener("DOMContentLoaded", () => {

  gsap.set("#stickman-arm", { transformOrigin: "top left" });

  const tl = gsap.timeline();

  tl.to("#stickman", { x: 120, duration: 2 })
    .to("#stickman-arm", { rotation: -30 })
    .to("#switch", { backgroundColor: "#333" })
    .to("#ladder", { opacity: 1 })
    .to("#stickman", { y: -80 })
    .to("#bulb-old", { opacity: 0 })
    .to("#bulb-new", { opacity: 1 })
    .to("#light-glow", { opacity: 1 })
    .to("#stickman", { x: 260 });

});