export async function preload() {
  const preloading = document.querySelector(".preloading");
  const url = await getComputedStyle(document.documentElement)
    .getPropertyValue("--bg-url")
    .replaceAll('"', "");

  const img = document.createElement("img");

  img.src = url;

  img.addEventListener("load", () => {
    setTimeout(() => {
      preloading.classList.add("disabled");
    }, 300);
  });
}
