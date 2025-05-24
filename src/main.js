import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "tippy.js/animations/shift-away.css";

import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/featured.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/components/project-modal.css";
import "../styles/components/go-to-top.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import smoothScroll from "./utils/smooth-scroll";
import goToTop from "./utils/go-to-top";
import lazyLoading from "./utils/lazy-loading";
import fancyBox from "./utils/fancy-box";
import tippyJs from "./utils/tippy";
import portfolioLink from "./utils/portfolio-link";

mobileNav();
darkMode();
smoothScroll();
goToTop();
lazyLoading();
fancyBox();
tippyJs();
portfolioLink();