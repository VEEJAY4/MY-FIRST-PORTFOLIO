const smoothScroll = () => {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      /*
        linkId        = <a href="#mango">Go To Mango Section</a>
        targetElement = <div id="mango">Mango Section</div>
      */
      const linkId = link.getAttribute("href");
      const targetElement = document.querySelector(linkId);

      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop, // scroll to the position of the target element
          behavior: "smooth",
        });
      }
    });
  });
};

export default smoothScroll;