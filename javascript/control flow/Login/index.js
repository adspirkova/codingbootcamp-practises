/* Login */


/* Create a page that will ask the user for their login and password. Check, that the password is equal to sore-thumb-218 and if so, output "access granted." Otherwise output "Nice try."
 const username = prompt('Insert username');
const password = prompt('Insert password');

if (password === 'sore-thumb-218') {
    console.log('Access granted');
    alert('Access granted');
}   else {
    console.log('Nice try.');
    alert('Nice try');
} */

/* Create a page where the user needs to create their password for the first time. Ask for the password twice and check that they are the same. If not, output something like "Your passwords to no match."

const username = prompt('Insert username');
const password = prompt('Insert password');
const passwordcheck = prompt('Reenter password');

if (password === passwordcheck) {
    console.log('Thank you!');
    alert('Thank you!');
}   else {
    console.log('Your passwords do no match.');
    alert('Your passwords do no match.');
}  */

/* Improve the above page so that it does not allow passwords less then 8 characters long. If the password is less then 8 characters output "Your password is no secure." In such a case do not ask the user to type the password again. Only do that if it passes the security check. 


const username = prompt('Insert username');
const password = prompt('Insert password');

if (password.length >= 8) {
    const passwordcheck = prompt('Reenter password');
    if (password === passwordcheck) {
        console.log('Thank you!');
        alert('Thank you!');
    }   else {
        console.log('Your passwords do no match.');
        alert('Your passwords do no match.');
    }
}   else {
    console.log('Your password is not secure.');
    alert('Your password is not secure.');
} */

/* Let's say that the basic price for a bus ticket is 12 euro. Create a page which will ask the user for their age and compute a discounted price according to these rules:
age under 6 years (preschool kids): 0 euro,
age between 6 and 15 (pupils): 35% of the basic price,
age between 16 and 26 (students): 65% of the basic price,
age between 27 and 64 (adults): 100% of the basic price,
otherwise (seniors): 50% of the basic price. */

const userage = parseInt(prompt('Insert your age'));

if (userage < 6) {
    console.log('Your price is ' + (0) + ' EUR');
}   else if (userage <= 15) {
    console.log('Your price is ' + Math.round(12 * 0.35) + ' EUR');
    } else if (userage <= 26) {
        console.log('Your price is ' + Math.round(12 * 0.65) + ' EUR');
        } else if (userage <= 64) {
            console.log('Your price is ' + 12 + ' EUR');
            } else {
                console.log('Your price is ' + Math.round(12 * 0.5) + ' EUR');
            }
