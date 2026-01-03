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
