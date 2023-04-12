export function search() {
 
  const searchIcon = document.getElementById("search-icon");
  const searchDiv = document.querySelector(".search-div");
  const searchInput = document.getElementById("search-input");
  const datalist = document.querySelector(".datalist");
  const closeBox = document.getElementById("close-box");
  const clearButton = document.getElementById("clear-button");
  const toggle = document.getElementById("menu-toggle");

  searchIcon.addEventListener("click", () => {
 
    searchDiv.classList.add("active");
    toggle.classList.add("hidden");
  });

  searchInput.addEventListener("focus", () => {
    datalist.style.display = "flex";
    clearButton.classList.add("show");
  });
  searchInput.addEventListener("focusout", () => {
    datalist.style.display = "none";
  });

  closeBox.addEventListener("click", (e) => {
    e.preventDefault();
    
    toggle.classList.remove("hidden");
    searchDiv.classList.remove("active");
    
  });

  clearButton.addEventListener("click", (e) =>{
    e.preventDefault();
    searchInput.value = "";
  })
}
// searching anime by api
