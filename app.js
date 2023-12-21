// app
let currentThemeValue = "string";


// on load
window.onload = function () {
    
    //colour mode
    if (window.matchMedia) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          // Dark
            setTheme("dark");
        } else {
          // Light
            setTheme("ligh");
        }
      } else {
        // Default 
        setTheme("ligh");
      }
    
};


//Listen to user changing theme

let themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("click", changeTheme);

function changeTheme() {
    //if one change to the other
    if (currentThemeValue === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}



//change  theme

function setTheme(theme) {

    let themeSwitch = document.getElementById("themeSwitch");
    let themeCSS = document.getElementById("themeCSS");
    let logo = document.getElementById("logo");

    console.log("loading theme: " + theme)

    if (theme === "dark") {
        themeCSS.setAttribute('href', './styles/dark.css')
        themeSwitch.checked = false;
        currentThemeValue = "dark";
        logo.setAttribute('src', './assets/logoDark.svg')

    } else {
        //light
        themeCSS.setAttribute('href', './styles/light.css')
        themeSwitch.checked = true;
        currentThemeValue = "light";
        logo.setAttribute('src', './assets/logo.svg')
    }

}
