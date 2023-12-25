// app

//vairables
let currentThemeValue = "string";

let memoryFirstValue = 0;
let memorySign = "";
let calcMemory = [];
let calcArray = [];

let previousInput = document.getElementById("previousInput");
let result = document.getElementById("result");


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



// add all the event listener
let zero = document.getElementById("0");
zero.addEventListener('click', () => { numberClicked(0); } );

let one = document.getElementById("1");
one.addEventListener('click', () => { numberClicked(1); } );

let two = document.getElementById("2");
two.addEventListener('click', () => { numberClicked(2); } );

let tree = document.getElementById("3");
tree.addEventListener('click', () => { numberClicked(3); } );

let four = document.getElementById("4");
four.addEventListener('click', () => { numberClicked(4); } );

let five = document.getElementById("5");
five.addEventListener('click', () => { numberClicked(5); } );

let six = document.getElementById("6");
six.addEventListener('click', () => { numberClicked(6); } );

let seven = document.getElementById("7");
seven.addEventListener('click', () => { numberClicked(7); } );

let eight = document.getElementById("8");
eight.addEventListener('click', () => { numberClicked(8); } );

let nine = document.getElementById("9");
nine.addEventListener('click', () => { numberClicked(9); } );

//operator

let AC = document.getElementById("cancel");
AC.addEventListener('click', () => { cancelClicked(); } );

let sign = document.getElementById("sign");
sign.addEventListener('click', () => { signClicked(); } );

let percent = document.getElementById("percent");
percent.addEventListener('click', () => { percentClicked(); } );

let divide = document.getElementById("divide");
divide.addEventListener('click', () => { divideClicked(); } );

let multiply = document.getElementById("multiply");
multiply.addEventListener('click', () => { multiplyClicked(); } );

let substract = document.getElementById("substract");
substract.addEventListener('click', () => { substractClicked(); } );

let add = document.getElementById("add");
add.addEventListener('click', () => { operatorClicked("+"); } );

let dot = document.getElementById("dot");
dot.addEventListener('click', () => { dotClicked(); } );

let back = document.getElementById("back");
back.addEventListener('click', () => { backClicked(); } );

let equal = document.getElementById("equal");
equal.addEventListener('click', () => { equalClicked(); } );





// the idea is to have a number in memory and an operator is clicked we update the memory.

//fuctiion to collect the number that are clicked
function numberClicked(number) {
    console.log(number);
    calcArray.push(number);
    result.innerHTML = calcArray.join('');

    calcMemory.push(number);
    previousInput.innerHTML = calcMemory.join('');

}

// operator functions

function cancelClicked() {
    console.log('no function yet');
}

function signClicked() {
    console.log('no function yet');
}

function percentClicked() {
    console.log('no function yet');
}

// rework in my mid to try the hold sing in memory idea

function operatorClicked(sign) {

    memorySign = sign;
    calcMemory.push(" " + sign + " ");
    previousInput.innerHTML = calcMemory.join('');

    // let store the value up to now and clean array
    memoryFirstValue = parseInt(calcArray.join(''));
    console.log(memoryFirstValue);
    calcArray = [];

    result.innerHTML = sign;

    //should we run equal ?
    //equalClicked();


};

function equalClicked() {

    calcMemory.push(" = ");


    if (memorySign === "") {

        // no memory sign stored so we store a value to hold

        memoryFirstValue = parseInt(calcArray.join(''));
        
        calcMemory.push(memoryFirstValue),

        previousInput.innerHTML = calcMemory.join('');

        // we stored the value so we need to clean our array
        calcArray = [memoryFirstValue];


    }

    // from here we assume there is a sign stored

    if (memorySign === "+") {
        let resultat = memoryFirstValue + parseInt(calcArray.join(''));
        
        calcMemory.push(resultat)
        result.innerHTML = resultat

        // clean and ready for next
        memoryFirstValue = resultat;
        calcArray = [resultat];
        memorySign = "";

        
    }
}

// maybe i delete these

function divideClicked() {
    console.log('no function yet');
}

function multiplyClicked() {
    console.log('no function yet');
}

function substractClicked() {
    console.log('no function yet');
}

function addClicked() {
    console.log('no function yet');
}

function dotClicked() {
    console.log('no function yet');
}

function backClicked() {
    console.log('no function yet');
}





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
