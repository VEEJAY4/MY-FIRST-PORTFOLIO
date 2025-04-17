const mobileNav = () => {
  const headerButton = document.querySelector(".header__bars");
  const mobileNavigation = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link"); // Select all mobile links

  // State
  let isMobileNavOpen = false;
  
  headerButton.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;

    if(isMobileNavOpen) {
      mobileNavigation.style.display = "flex";
      document.body.style.overflowY = "hidden"; // Prevent scrolling
    }
    else {
      mobileNavigation.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      isMobileNavOpen = !isMobileNavOpen;
      mobileNavigation.style.display = "none";
      document.body.style.overflowY = "auto"; // Allow scrolling again
    });
  });
};

export default mobileNav;