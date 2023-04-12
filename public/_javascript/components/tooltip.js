export function tooltip() {
  const tooltip = document.querySelectorAll(".tooltip");
  const tooltip2 = document.querySelectorAll(".tooltip2");
  const tooltip2tr = document.querySelectorAll(".tooltip2-tr");

  tooltip.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  });

  tooltip2.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  });

  // top right 
  tooltip2tr.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  });

}
