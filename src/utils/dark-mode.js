const darkMode = () => {
  const themeToggleButtons = document.querySelectorAll("#theme-toggle");
  
  // State
  const theme = localStorage.getItem("theme");

  // On mount
  theme && document.body.classList.add(theme);

  // Handler Function
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode"); // adding light-mode class to body

    if(document.body.classList.contains("light-mode"))
      localStorage.setItem("theme", "light-mode");
    else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };

  // Events
  themeToggleButtons.forEach(button => button.addEventListener("click", handleThemeToggle));
};

export default darkMode;