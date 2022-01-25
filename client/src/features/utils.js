const html = document.querySelector("html");

export const switchTheme = (isDark) => {
  if (isDark === true) {
    html.className = "theme-dark";
    localStorage.setItem("isDark", true);
  } else {
    html.className = "theme-light";
    localStorage.setItem("isDark", false);
  }
};
