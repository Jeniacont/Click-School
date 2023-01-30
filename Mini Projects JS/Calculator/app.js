const display = document.getElementById("screen");
const buttons = document.querySelectorAll('button');

const checkForInvalidInput = (e) => {
    if(display.value.match(/[+\-*/.]{2,}/)){
        alert("Stop \u{1F631} Two or more symbols are not allowed. Please enter a valid expression. \u{1F600}");
        display.value = display.value.slice(0, -display.value.length);
    }
    display.focus();
};

const checkForEnterKey = (event) => {
    if (event.key === "Enter") {
        calc();
    }
    const isLetter = /^[a-zA-Zа-яА-Я]$/i.test(event.key);
    if (isLetter) {
        alert("Stop \u{1F631} is a letter, not a number, please enter a number. \u{1F600}");
        display.value = display.value.slice(0, -display.value.length);
    }
    else if(display.value.match(/[+\-*/.]{2,}/)){
        alert("Stop \u{1F631} Two or more symbols are not allowed. Please enter a valid expression. \u{1F600}");
        display.value = display.value.slice(0, -1);
    }
};

const wipe = () => {
    display.value = '';
};

const show = (n) => {
    display.value += n;
};

const del = () => {
    display.value = display.value.slice(0, -1);
};

const calc = () => {
    display.value = eval(display.value);
};

const windowOnload = window.onload = function() {
    document.getElementById('screen').focus();
    wipe();
};

buttons.forEach(button => {
    button.addEventListener('click', checkForInvalidInput);
});

display.addEventListener("keydown", checkForEnterKey);

document.querySelector('.theme-toggler').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    display.focus();
});
