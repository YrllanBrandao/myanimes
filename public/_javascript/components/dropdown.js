export function dropdownFunction() {
  
  const buttonDropdown = document.querySelectorAll(".btn-dropdown");
  const dropdowns = document.querySelectorAll(".dropdown-list");

  function activeDropdown(list) {
    list.classList.toggle("active");
  }
  function desactiveDropdowns() {
    dropdowns.forEach((list) => {
      list.classList.remove("active");
    });
  }
  function dropdownButtonsDesative() {
    buttonDropdown.forEach((button) => {
      button.classList.remove("active");
    });
  }
  function dropdownIsActive(button) {
    const contain = button.classList.contains("active");
    return contain;
  }

  buttonDropdown.forEach((button) => {
    button.addEventListener("click", () => {
      const isActive = dropdownIsActive(button);
      if (isActive) {
        button.classList.remove("active");
        desactiveDropdowns();
      } else {
        dropdownButtonsDesative();
        button.classList.add("active");
        const target = button.dataset.target;
        const list = document.getElementById(target);

        desactiveDropdowns();
        activeDropdown(list);
      }
    });
  });
}
