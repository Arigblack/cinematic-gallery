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
