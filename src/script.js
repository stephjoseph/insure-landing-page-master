const openNavBtn = document.querySelector("#open-nav-button");
const closeNavBtn = document.querySelector("#close-nav-button");
const mobileNav = document.querySelector("#mobile-nav");

openNavBtn.addEventListener("click", () => {
  openNavBtn.classList.add("opacity-0", "pointer-events-none", "scale-0");
  closeNavBtn.classList.remove("opacity-0", "pointer-events-none", "scale-0");
  mobileNav.classList.remove(
    "translate-x-full",
    "opacity-0",
    "pointer-events-none"
  );
});

closeNavBtn.addEventListener("click", () => {
  closeNavBtn.classList.add("opacity-0", "pointer-events-none", "scale-0");
  openNavBtn.classList.remove("opacity-0", "pointer-events-none", "scale-0");
  mobileNav.classList.add(
    "translate-x-full",
    "opacity-0",
    "pointer-events-none"
  );
});
