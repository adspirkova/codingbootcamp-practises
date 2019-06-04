
let calc = 0;
let plus = false;
let minus = false;

const updateResult = () => {
    const resultElm = document.querySelector('#result');
    resultElm.textContent = calc;
}

const clearImput = () => {
    const inputElm = document.querySelector('#input');
    inputElm.value = '0';
}

const add = () => {
    const inputElm = document.querySelector('#input');
    const inputnum = parseInt(inputElm.value);

    calc += inputnum;
    updateResult();
    clearImput();
    plus = true;
    minus = false;
};

const Minus = () => {
    const inputElm = document.querySelector('#input');
    const inputnum = parseInt(inputElm.value);

    calc -= inputnum;
    updateResult();
    clearImput();
    plus = false;
    minus = true;
};

const Clear = () => {
    calc = 0;
    updateResult();
    clearImput();
};

const Equals = () => {
    if (plus === true) {
        add ();
        updateResult();
        clearImput();
    } else if (minus===true) {
        Minus();
        updateResult();
        clearImput();
    } else {
        updateResult();
        clearImput();
    }
};



