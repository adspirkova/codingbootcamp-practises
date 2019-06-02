const a = 790;
const b = 5600;
const c = 78065;
const d = 120910;

const bankaccount = parseInt(prompt('Insert your bank account number here'));

const action = prompt('Add an action.');

switch (bankaccount) {
    case '000256784':
        console.log('Your balance is' + a + ' eur');
        break;
    case 'B':
        console.log('you got an A');
        break;
    case 'C':
        console.log('you got an A');
        break;
    default:
        console.log('not valid');


}