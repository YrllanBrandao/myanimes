import { volumeComponent } from "./player_components/volume.js";
import { getThumb } from "./player_components/getThumb.js";


const player = document.getElementById("play-button");
const video = document.getElementById("player");
const videoHidden = document.getElementById("playerHidden");
const videoArea = document.getElementById("video-player")
const controls = document.querySelector(".player-controls");
const skipIntro = document.getElementById("skip-intro");
const timeline = document.getElementById("timeline");
const currentTime = document.getElementById("current-time");
const videoUrl = document.getElementById("videoUrl");
const videoOverlay = document.querySelector(".player-overlay");
// variables
let playerOn = false;

const url = videoUrl.value;

fetch(url)
  .then((response) => {
    return response.blob();
  })
  .then((blob) => {
    const MY_URL = URL.createObjectURL(blob);
    video.src = MY_URL;
    videoHidden.src = MY_URL;
  });

// timeline

function timelineUpdate() {
  const CURRENT_TIME = Math.floor((video.currentTime * 100) / video.duration);
  timeline.value = CURRENT_TIME;
}
function secondsToMinutes(seconds) {
  const MINUTES = Math.floor(seconds / 60);
  const SECONDS =
    (seconds % 60).toFixed(0) < 10
      ? "0" + (seconds % 60).toFixed(0)
      : (seconds % 60).toFixed(0);

  return `${MINUTES}:${SECONDS}`;
}

function disableOverlay() {
  videoOverlay.classList.add("loaded");
  videoOverlay.classList.add("d-none");
}

video.addEventListener("canplay", () => {

   disableOverlay();
  const MINUTES = Math.floor(video.duration / 60);
  const SECONDS = (video.duration % 60).toFixed(0);
  const DURATION = `${MINUTES} : ${SECONDS}`;
  // timeline.setAttribute("max", video.duration);
  currentTime.innerHTML = `${secondsToMinutes(
    Math.floor(video.currentTime)
  )} / ${DURATION}`;
  //   loading
 
  // unlock controls
 controls.style.display = "flex";
 videoArea.addEventListener("mouseover", () => {
  controls.style.display = "flex";
});
//  hidden controls
  videoArea.addEventListener("mouseleave", () => {
    controls.style.display = "none";
  });
 
  
});

//
video.addEventListener("timeupdate", () => {
  const MINUTES = Math.floor(video.duration / 60);
  const SECONDS = (video.duration % 60).toFixed(0);
  const DURATION = `${MINUTES} : ${SECONDS}`;

  currentTime.innerHTML = `${secondsToMinutes(
    Math.floor(video.currentTime)
  )} / ${DURATION}`;
  //
  timelineUpdate();
});

//
video.addEventListener("click", () => {
  if (playerOn === false) {
    video.play();
    player.classList.add("paused");
    player.dataset.icon = "Pause";
    playerOn = true;
  } else {
    video.pause();

    player.classList.remove("paused");
    player.dataset.icon = "Play";
    playerOn = false;
  }
});

skipIntro.addEventListener("click", () => {
  const INTRO_DURATION = 85;
  video.currentTime = video.currentTime + INTRO_DURATION;
});

player.addEventListener("click", () => {
  if (playerOn === false) {
    video.play();
    player.classList.add("paused");

    player.dataset.icon = "Pause";
    playerOn = true;
  } else {
    video.pause();

    player.classList.remove("paused");
    player.dataset.icon = "Play";
    playerOn = false;
  }
});

// modules
volumeComponent();
getThumb();