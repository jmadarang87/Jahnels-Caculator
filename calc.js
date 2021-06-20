const output = document.getElementById('section-output');
const oneBtn = document.getElementById('1');
const twoBtn = document.getElementById('2');
const threeBtn = document.getElementById('3');
const fourBtn = document.getElementById('4');
const fiveBtn = document.getElementById('5');
const sixBtn = document.getElementById('6');
const sevenBtn = document.getElementById('7');
const eightBtn = document.getElementById('8');
const nineBtn = document.getElementById('9');
const zeroBtn = document.getElementById('0');
const decimalBtn = document.getElementById('.');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const numBtns = document.getElementsByClassName('number');
const operationBtns = document.getElementsByClassName('operation');
const display = document.getElementById('display');
var preDisplay = "";
var currentDisplay = "";
var num1 = "";
var num2 = "";
var mathOperation = "";

const updateDisplay = (event) => {
    if ( display.innerText === "0" ) {
        let currentDisplay = "";
        currentDisplay = event.target.id;
        display.innerText = currentDisplay;
    } else {
        display.innerText += event.target.id;
    }
}

for (i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', updateDisplay, false);
};


const calculate = (event) => {
    num1 = display.innerText;
    mathOperation = event.target.id;
    // let string = `${num1} ${mathOperation} ${num2}`
    // console.log(eval(string));
    display.innerText = 0;
}

for (i = 0; i < operationBtns.length; i++) {
    operationBtns[i].addEventListener('click', calculate, false);
};

clearBtn.addEventListener( 'click', () => {
    display.innerText = '';
})

equalsBtn.addEventListener ( 'click', () => {
    num2 = display.innerText;
    num1 = num1;
    mathOperation = mathOperation;
    let mathString = `${num1} ${mathOperation} ${num2}`;
    console.log(mathString);
    console.log(eval(mathString))
    display.innerText = eval(mathString);
});