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

export const inViewPort = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-inViewport");
      observer.disconnect();
    }
  });
};

export const listInViewPort = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (let i = 0; i < entry.target.children.length; i++) {
        setTimeout(() => {
          entry.target.children[i].children[0].classList.add("isInViewPort");
        }, i * 200);
      }
      observer.disconnect();
    }
  });
};

export const initTheme = () => {
  const html = document.querySelector("html");
  const selectedTheme = localStorage.getItem("isDark");
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (selectedTheme) {
    html.className = selectedTheme === "true" ? "theme-dark" : "theme-light";
  } else {
    if (isDarkMode) {
      html.className = "theme-dark";
      localStorage.setItem("isDark", true);
    } else {
      html.className = "theme-light";
    }
  }
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
