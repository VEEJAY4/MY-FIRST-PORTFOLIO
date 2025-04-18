import tippy from "tippy.js";

const tippyJs = () => {
  tippy(".featured__link", {
    content: "🚫 Link Unavailable",
    theme: "translucent",
    animation: "shift-away",
  });
};

export default tippyJs; 