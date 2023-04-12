export async function preload() {
  const preloading = document.querySelector(".preloading");
 
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloading.classList.add("disabled");
    }, 300);
  });
}
