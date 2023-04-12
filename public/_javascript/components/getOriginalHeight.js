export function getOriginalHeight() {
  const height = window.innerHeight;
  document.documentElement.style.setProperty("--vh", `${height}px`);
}
