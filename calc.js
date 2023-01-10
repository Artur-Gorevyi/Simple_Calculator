let a = ''; // first
let b = ''; // second
let sign = ''; // oper
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷'];

// screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; // first
    b = ''; // second
    sign = ''; // oper
    finish = false;
    out.textContent = 0;
}

function intli(n){
    if(!(Number.isInteger(n))){
        return n.toFixed(3);
    }
    return n;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // btn not press
    if(!event.target.classList.contains('btn')) return;
    // ac btn is pressed
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // get press btn
    const key = event.target.textContent;

    // if press btn '0-9' or '.'
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;

        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    // if press btn + - ÷ ×
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        if (out.textContent.length > 7) {
            out.style = 'font-size: 3rem;';
            if (out.textContent.length > 10) {
                out.style = 'font-size: 2rem;';
                if (out.textContent.length > 15) {
                    out.style = 'font-size: 1rem;';
                }
            }
        }
        return;
    }

    // if press =
    if (key === '=') {
        if (key === '') b = a;
        switch(sign) {
            case "+":
                a = (+a) + (+b);
                a = intli(a);
                break;
            case "-":
                a = a - b;
                a = intli(a);
                break;
            case "×":
                a = a * b;
                a = intli(a);
                break;
            case "÷":
                a = a / b;
                a = intli(a);
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
        if (out.textContent.length < 15) {
            out.style = 'font-size: 2rem;';
            if (out.textContent.length < 10) {
                out.style = 'font-size: 3rem;';
                if (out.textContent.length < 7) {
                    out.style = 'font-size: 4rem;';
                }
            }
        }
    }
}
