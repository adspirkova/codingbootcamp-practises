
/* Create a login page which stores the names of registered users in an array. When the user enters their username the page will check whether the username is among the registered users. If not, the access is denied. */

// let username = ['adela', 'adam', 'pavel', 'monika'];

// let input = document.querySelector('.usernameinp'); /* use query selector */
// let usernameinput = input.value;


// const usercheck = () => {
//     usernameinput = input.value;

//     let granted = 'Access granted';
//     let denied = 'Access denied';
//     let message = null;

//     switch (usernameinput) {
//         case username[0]:
//             message = granted;
//             break;
//         case username[1]:
//             message = granted;
//             break;
//         case username[2]:
//             message = granted;
//             break;
//         case username[3]:
//             message = granted;
//             break;
//         default:
//             message = denied;
//     }
//     console.log(message);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const Click = document.querySelector('#submit');
//     Click.addEventListener('click', usercheck)
// });


// Extend the page so that it contains also the array of the users' passwords. Each password in the passwords array is on the same position as the corresponding user in the users array. When the users enters his name and password check that it is an existing user and also that the password is correct. 


let username = ['adela', 'adam', 'pavel', 'monika'];
let password = ['ad', 'ad', 'pav', 'mon'];

let input = document.querySelector('.usernameinp'); /* use query selector */
let usernameinput = input.value;

let passinput = document.querySelector('.passinp'); /* use query selector */
let passwordinput = passinput.value;

const usercheck = () => {
    usernameinput = input.value;

    let granted = 'Access granted';
    let denied = 'Access denied';
    let message = null;
    if (usernameinput == username[0]){
        message = granted;
    } else if (usernameinput == username[loop()]){
        message = granted;
    } else {
        message = denied;
    }
    console.log(message);
}

const loop = () =>{
    let x = 0;
    for ( i = 0; i < username.length; i++){
    x = 0 + i;
    console.log(x);
} console.log(x);
return x;
};

const doublecheck = () => {
    usernameinput = input.value;
    passwordinput = passinput.value;
    
    let x = 0;
    const loop = () =>{
        for ( i = 0; i < username.length; i++){
        x=i;
    }}
    let granted = 'Access granted';
    let denied = 'Access denied';
    let message = null;

    if ((usernameinput == username[x]) && (passwordinput == password[x]))  {
        message = granted;
    } else {
        message = denied;
    }
    console.log(message);
}

document.addEventListener('DOMContentLoaded', () => {
    const Click = document.querySelector('#submit');
    Click.addEventListener('click', usercheck)
});

document.addEventListener('DOMContentLoaded', () => {
    const Click = document.querySelector('#login');
    Click.addEventListener('click', doublecheck)
});
