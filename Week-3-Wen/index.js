/* let a = 790;
let b = 5600;
let c = 78065;
let d = 120910;

const bankaccount = parseInt(prompt('Insert your bank account number here'));

const action = prompt('Add an action.');

const withdrawamount = parseInt(prompt('Insert value to be withdrawen'));


    if (bankaccount === 000256784  && action === 'balance') {
        console.log('Your balance is ' + a + ' euro.');
    } else if (bankaccount === 000256784  && action === 'withdraw' && withdrawamount < a )  {
        function withdrawal(withdrawamount) {
            return a - withdrawamount;
        }
        console.log( "Your balance's" + withdrawal(withdrawamount) + ' euro.')
    }
    else if (bankaccount === 000256784  && action === 'withdraw' && withdrawamount > a )  {
        console.log('Not enough money on your account.')
    }

    if (bankaccount === 000986056  && action === 'balance') {
        console.log('Your balance is ' + a + ' euro.');
    } else if (bankaccount === 000986056  && action === 'withdraw' && withdrawamount < a )  {
        function withdrawal(withdrawamount) {
            return a - withdrawamount;
        }
        console.log('Your balance is ' + withdrawal(withdrawamount) + ' euro.')
    }
    else if (bankaccount === 000986056  && action === 'withdraw' && withdrawamount > a )  {
        console.log('Not enough money on your account.')
    }

    if (bankaccount === 001546238  && action === 'balance') {
        console.log('Your balance is ' + a + ' euro.');
    } else if (bankaccount === 001546238  && action === 'withdraw' && withdrawamount < a )  {
        function withdrawal(withdrawamount) {
            return a - withdrawamount;
        }
        console.log('Your balance is ' + withdrawal(withdrawamount) + ' euro.')
    }
    else if (bankaccount === 001546238  && action === 'withdraw' && withdrawamount > a )  {
        console.log('Not enough money on your account.')
    }

    if (bankaccount === 030987456  && action === 'balance') {
        console.log('Your balance is ' + a + ' euro.');
    } else if (bankaccount === 030987456  && action === 'withdraw' && withdrawamount < a )  {
        function withdrawal(withdrawamount) {
            return a - withdrawamount;
        }
        console.log('Your balance is ' + withdrawal(withdrawamount) + ' euro.')
    }
    else if (bankaccount === 030987456  && action === 'withdraw' && withdrawamount > a )  {
        console.log('Not enough money on your account.')
    }
      */
     
/****************************** Simplier solution  ************************************************/

const account1 = '000256784';
const account2 = '000986056';
const account3 = '001546238';
const account4 = '030987456';

let balance1 = 790;
let balance2 = 5600;
let balance3 = 78065;
let balance4 = 120910;

/* let userAccount = prompt('Your account number:');
let userAction = prompt('Youe action:') */


const banking = () => {
  const input = document.querySelector('#accountnumber');
  const accountnumber = input.value;
  const input2 = document.querySelector('#userAction');
  const userAction = input2.value;
  const text2 = document.querySelector('#balancedisplayed');

  
  if(userAction === 'balance') {
    let userBalance = null;
  
    if(accountnumber === account1) {
      userBalance = balance1; 
    } else if(accountnumber === account2) {
      userBalance = balance2;
    } else if(accountnumber === account3) {
      userBalance = balance3;
    } else if(accountnumber === account4) {
      userBalance = balance4;
    }
  
    if(userBalance === null) {
      text2.textContent = 'Incorrect account number';
    } else {
      text2.textContent = 'Your balance is ' + userBalance;
    }
  } 
  else if(userAction === 'withdraw') {
    let par = document.querySelector('#tobehiden');
    par.classList.add('show');
   
    withdrawal = () => {
      let amountval = document.querySelector('#withdrawamount');
      let amount = parseInt(amountval.value);

      if(accountnumber === account1) {
        userBalance = balance1 - amount; 
      } else if(accountnumber === account2) {
        userBalance = balance2 - amount;
      } else if(accountnumber === account3) {
        userBalance = balance3 - amount;
      } else if(accountnumber === account4) {
        userBalance = balance4 - amount;
      } 
        if(userBalance === null) {
        text2.textContent = 'unsufficient funds';
      } else {
        text2.textContent = 'Your new balance is ' + userBalance;
      }
    }
    
  } 
  else {
    text2.textContent = 'unknown action';
  }
  
}



/****************************** Switch solution  ************************************************/ 

/* let account1 = 790;
let account2 = 5600;
let account3 = 78065;
let account4 = 120910;

let userInput = prompt("What is your account number?");

let balance = null;

switch (userInput) {
   case '000256784':
       balance = account1;
       break;
   case '000986056':
       balance = account2;
       break;
   case '001546238':
       balance = account3;
       break;
   case '030987456':
       balance = account4;
       break;
   default:
       alert('You have entered an incorrect bank account number');
}

let action = prompt("What transaction would you like to make today - 'balance' or 'something else'?")

if (action = 'balance') {
   alert('Your current balance is: ' + balance + ' eur');
} else {
   alert('Unknown action');
}

let amount = parseInt(prompt('Please enter the amount to withdraw: '));

if (amount > parseInt(balance)) {
   alert('Not enough money on your account.');
} else {
   let remainder = balance - amount;
   alert('You have ' + remainder + ' eur left in your account');
}

} */