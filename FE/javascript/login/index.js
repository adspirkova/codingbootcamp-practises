
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



const usercheck = () => {
    let username = ['adela', 'adam', 'pavel', 'monika'];
    let password = ['ad', 'ad', 'pav', 'mon'];
    let input = document.querySelector('.usernameinp');
    let usernameinput = input.value;
    let passinput = document.querySelector('.passinp');
    let passwordinput = passinput.value;
    for ( i = 0; i < username.length; i++) {
        if (usernameinput === username[i]  && passwordinput === password[i]){
            console.log('Access granted');
            break;
        } 
    }
}

/* document.addEventListener('DOMContentLoaded', () => {
    const Click = document.querySelector('#submit');
    Click.addEventListener('click', usercheck)
}); */

document.addEventListener('DOMContentLoaded', () => {
    const Click = document.querySelector('#login');
    Click.addEventListener('click', usercheck);
});
