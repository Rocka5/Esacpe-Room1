let collect1Ran = false;
let collect2Ran = false;

function collect1() {
  document.getElementById("tape").remove();
  document.getElementById("invtape").classList.remove("fade");
  collect1Ran = true;
  document.getElementById("pick").play();
  vhsTape();
}

function collect2() {
  document.getElementById("tape2").remove();
  document.getElementById("invtape2").classList.remove("fade");
  collect2Ran = true;
  document.getElementById("pick").play();
  vhsTape();
}

function vhsTape() {
  if (collect1Ran && collect2Ran) {
    document.getElementById("vhstape").style.display = "flex";
    document.getElementById("vhstapeImage").onclick = showModal;
    document.getElementById("vhstapeImage").style.border = "1px solid red";
  }
}

document.getElementById("vhstapeImage").onclick = function () {
  const tvImage = document.getElementById("tv");
  const tvVideo = document.getElementById("tvVideo");
  tvImage.style.display = "none";
  tvVideo.style.display = "block";
  tvVideo.play();
};

function showModal() {
  const modal = document.getElementById("myModal");
  const tvVideo = document.getElementById("tvVideo");
  modal.style.display = "flex";
  tvVideo.style.display = "block";
  tvVideo.play();
  setTimeout(function () {
    window.location.href = "https://rocka5.github.io/Esacpe-Room2/";
  }, 6000);
}

function hideModal() {
  const tvVideo = document.getElementById("tvVideo");
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
  tvVideo.pause();
  tvVideo.currentTime = 0;
}

window.onload = function () {
  showModal2();
};

function showModal2() {
  const introModal = document.getElementById("intro");
  const modalContent2 = document.getElementById("intro2");
  introModal.style.display = "flex";
  introModal.addEventListener("click", function (event) {
    if (event.target === introModal || event.target === modalContent2) {
      hideModal2();
    }
  });
}

function hideModal2() {
  document.getElementById("intro").style.display = "none";
}
