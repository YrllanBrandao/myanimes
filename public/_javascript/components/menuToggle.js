
export function menuToggle() {
  const dropdowns = document.querySelectorAll(".dropdown-list");
  const searchDiv = document.querySelector(".search-div");
  const toggle = document.querySelectorAll(".btn-toggle");

  function resetStates()
  {
    dropdowns.forEach(dropdown =>{
      dropdown.classList.remove("active");
    });

    searchDiv.style.display = "none"
  }
  function changeAnimation(button) {
    const icon = document.getElementById("icon-toggle");
    const isActive = button.classList.contains("active");
    const menuTarget = button.dataset.target;
    const navlist = document.getElementById(`${menuTarget}`);
    if (isActive) {
      button.classList.remove("active");
      icon.dataset.icon = "line-md:close-to-menu-alt-transition";
      
      navlist.classList.remove("active");
      resetStates();
    } else {
      button.classList.add("active");
      icon.dataset.icon = "line-md:menu-to-close-alt-transition";
      navlist.classList.add("active");
    }
  }
  toggle.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      changeAnimation(toggleButton);
      
    });
  });
}
