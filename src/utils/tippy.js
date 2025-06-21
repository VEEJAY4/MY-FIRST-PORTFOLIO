import tippy from "tippy.js";

// DEFAULT TOOLTIP INITIALIZATION
const initializeToolTip = (selector, content) => {
  tippy(selector, {
    content: content,
    theme: "translucent",
    animation: "shift-away",
  });
};

// MAUVE THEMED TOOLTIP
const initializeCenteredTooltip = (selector, content) => {
  const isMobile = window.innerWidth <= 640; // 640px (Small Devices)

  tippy(selector, {
    content: content,
    theme: "mauve",
    animation: "shift-away",
    delay: [500, 0],
    trigger: isMobile ? "manual" : "mouseenter focus"
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

  // WORK PROJECTS
  initializeCenteredTooltip(".image-tooltip", "Preview 🔎");
  initializeToolTip(".github-work", "GitHub Repository");

  // SOCIAL LINKS
  initializeToolTip(".facebook", "Facebook");
  initializeToolTip(".linkedin", "LinkedIn");
  initializeToolTip(".github", "GitHub");
};

export default tippyJs; 