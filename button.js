let defaultTheme = "dark"; // Set default theme
let storedTheme = localStorage.getItem("strtheme"); // Fetch stored theme
let theme = storedTheme || defaultTheme; // Select stored theme if available or set as default

// Function to set the theme based on the initial storedTheme value
function setTheme() {
  if (theme === "dark") {
    // Dark mode
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(110, 143, 173), rgb(3, 8, 10))';
    const buttonElement = document.querySelector('button svg');
    buttonElement.style.transform = 'translateX(0px)';
  } else {
    // Light mode
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, white, rgb(255, 175, 204))';
    const buttonElement = document.querySelector('button svg');
    buttonElement.style.transform = 'translateX(128px)';
  }
}

// Call the setTheme function to apply the theme on page load
setTheme();

// Function to save the theme in local storage
function saveThemeToLocalStorage() {
  localStorage.setItem("strtheme", theme);
}

// Update the theme variable and save the theme on button click
function colchange() {
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  setTheme();
  saveThemeToLocalStorage();
}
