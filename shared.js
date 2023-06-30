const backdrop = document.getElementsByClassName("backdrop")[0];
const modal = document.getElementsByClassName("modal")[0];
const modalNoButton = document.querySelector(".modal__action--negative");
const plusPlanButtons = document.querySelectorAll(".plan button");
const hamburgerButton = document.getElementsByClassName("toggle-button")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];

for (let i = 0; i < plusPlanButtons.length; i++) {
  plusPlanButtons[i].addEventListener("click", () => {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

const closeModal = () => {
  if (modalNoButton) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");

  mobileNav.classList.remove("open");
};

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", closeModal);

hamburgerButton.addEventListener("click", () => {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
