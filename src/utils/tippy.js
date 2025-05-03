import tippy from "tippy.js";

const initializeToolTip = (selector, content) => {
  tippy(selector, {
    content: content,
    theme: "translucent",
    animation: "shift-away",
  });
};

const tippyJs = () => {
  // REACH OUT LINK
  document.querySelectorAll("a").forEach((link) => {
    if(link.textContent.trim().toUpperCase() === "REACH OUT")
      initializeToolTip(link, "🔗 LinkedIn");
  });

  // FEATURED PROJECT LINK
  initializeToolTip(".featured__link", "🚫 Link Unavailable");

  // SOCIAL LINKS
  initializeToolTip(".facebook", "Facebook");
  initializeToolTip(".linkedin", "LinkedIn");
  initializeToolTip(".github", "GitHub");
};

export default tippyJs; 