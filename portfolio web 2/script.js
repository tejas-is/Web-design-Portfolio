// CURSOR FOLLWER
// Check if the browser is Safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const cursorFollower = document.getElementById("cursor-follower");

if (isSafari) {
  // Hide the cursor follower div in Safari
  cursorFollower.style.display = "none";
} else {
  // Cursor follower logic for non-Safari browsers
  document.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    cursorFollower.style.transform = `translate(${x - 0}px, ${y - 0}px) scale(1)`; // Position of the Div
    cursorFollower.style.opacity = 1;
  });

  document.addEventListener("mouseleave", function() {
    cursorFollower.style.opacity = 0;
  });
}



// SMOOTH SCROLL
const lenis = new Lenis({
  lerp: 0.1,
  smooth: true
});

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
