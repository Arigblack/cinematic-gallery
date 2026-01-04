document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  btn.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      btn.textContent = "⏸️ Music";
    } else {
      music.pause();
      btn.textContent = "▶️ Music";
    }
  });
});
function openImg(img){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modalImg").src = img.src;
}

document.getElementById("modal").onclick = function(){
  this.style.display="none";
};
let slides = [
  "images/1.jpg","images/2.jpg","images/3.jpg",
  "images/4.jpg","images/5.jpg","images/6.jpg",
  "images/7.jpg","images/8.jpg","images/9.jpg"
];

let i = 0;
setInterval(()=>{
  i = (i+1) % slides.length;
  document.getElementById("slideShow").src = slides[i];
}, 3000);
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if(loader){
      loader.style.display = "none";
    }
  }, 2500); // 2.5 second
});
// SCROLL ANIMATION
const imgs = document.querySelectorAll(".gallery img");

window.addEventListener("scroll", () => {
  imgs.forEach(img => {
    const rect = img.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      img.classList.add("show");
    }
  });
});
// VISITOR COUNT
fetch("https://api.countapi.xyz/hit/aditya-mishra-gallery/visits")
.then(res => res.json())
.then(data => {
  document.getElementById("visits").innerText = data.value;
});
// AI VOICE INTRO - one time play (mobile safe)
window.addEventListener("click", function playVoiceOnce(){
  const voice = document.getElementById("voiceIntro");
  if(voice){
    voice.play();
    window.removeEventListener("click", playVoiceOnce);
  }
});
// FIRE PARTICLE BACKGROUND
const canvas = document.getElementById("fireCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle(){
  particles.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 3 + 1,
    speedY: Math.random() * 1 + 0.5,
    alpha: 1
  });
}

function animateFire(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(particles.length < 200){
    createParticle();
  }

  particles.forEach((p,i)=>{
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,100,0,${p.alpha})`;
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();

    p.y -= p.speedY;
    p.alpha -= 0.01;

    if(p.alpha <= 0){
      particles.splice(i,1);
    }
  });

  requestAnimationFrame(animateFire);
}

animateFire();
