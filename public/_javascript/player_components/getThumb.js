export function getThumb() {
  const video = document.getElementById("anotherPlayer");
  const canvas = document.getElementById("anime-thumb");
  const animeHeader = document.querySelector("body");
  

  drawThumb(video, canvas);

  function drawThumb(videoElement, canvasElement) {
    video.currentTime = 12;

    video.addEventListener("canplay", () => {
      if (video.currentTime == 12) {
        const ctx = canvas.getContext("2d");
        // print thumb
        ctx.drawImage(
          videoElement,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );

        const thumbUrl = canvasElement.toDataURL();
  
        animeHeader.style.background = `url('${thumbUrl}')`;
        video.currentTime = 0;
      }
    });
  }

}
