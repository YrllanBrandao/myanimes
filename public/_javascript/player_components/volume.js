export function volumeComponent() {
  const volumeButton = document.getElementById("volume-button");
  const rangeVolume = document.getElementById("range-volume");
  const video = document.getElementById("player");
  const muted = [];

  const VOLUME = {
    muteVolume: 0,
    beforeVolume: video.volume };

  function changeIcon() {

    if (muted[0]) {
      volumeButton.style.background =
        "url('https://api.iconify.design/mingcute/volume-fill.svg?color=%236a4cc8&width=30&height=30')";
      muted[0] = false;
      rangeVolume.value = VOLUME.beforeVolume;
      video.volume = VOLUME.beforeVolume;
    } else {
      volumeButton.style.background =
        "url('https://api.iconify.design/mingcute/volume-mute-fill.svg?color=%236a4cc8&width=30&height=30')";
      muted[0] = true;

      // mute volume
      VOLUME.volumeBefore = video.volume;
      rangeVolume.value = 0;
      video.volume = 0;
    }
  }

  volumeButton.addEventListener("click", () => {
    changeIcon();
  });

  volumeButton.addEventListener("mouseover", () => {
    rangeVolume.style.display = "flex";
  });

  rangeVolume.addEventListener("change", () => {
    video.volume = rangeVolume.value;
    VOLUME.beforeVolume = video.volume;
  });
}
