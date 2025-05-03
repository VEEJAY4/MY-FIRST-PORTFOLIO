const goToTop = () => {
  const showGoToTop = document.querySelector(".go-to-top");
  const goToTopButton = document.querySelector(".go-to-top__button");

  // SCREEN EVENT
  window.addEventListener("scroll", () => {
    if(window.scrollY > 250)
      showGoToTop.classList.add("show");
    else
      showGoToTop.classList.remove("show");
  });

  // BUTTON EVENT
  goToTopButton.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

export default goToTop;
