const portfolioLink = () => {
  const link = document.querySelector("#portfolio-link");

  link.addEventListener("click", async (event) => {
    event.preventDefault();

    const checkSite = await fetch("https://vj-dotdev.me/", {
      mode: "no-cors" // to test if a URL is reachable
    });
    const timeout = new Promise((_, reject) => setTimeout(reject, 150)); // 150ms fallback

    try {
      await Promise.race([checkSite, timeout]);
      window.open("https://vj-dotdev.me", "_blank");
    }
    catch {
      window.open("https://vj-dotdev-1st-portfolio.vercel.app", "_blank");
    }
  });
};

export default portfolioLink;