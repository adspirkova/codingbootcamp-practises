/* Czech birth ID
In Czech, every person gets a birth ID when they are born. This ID serves is their personal identification number. The rules for the ID are as follows:

The format is YYMMDD/XXXX, for example 756114/2468.
First two digits are the last two digits of the year of birth
Second two digits are the month of birth. If the person is female, number 50 gets added to the month.
Third two digits are the day of birth.
Last four digits is an arbitrary number to make the ID unique.
The whole number without slash needs to be divisible by 11.
From the example 756114/2468 you can tell that the person is a woman born on 14. november 1975.

Write a program which will get an ID from the user using prompt. The program will check wheter the ID is valid according to the rules described above. */
const Y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const M = 09;
const D = 09;
const X = 09;

const ID = [Y, Y, M, M, D, D, "/", X, X, X, X]
const userID = parseInt(prompt('Please insert your birth ID'));

if ( Y [0] <= userID [0]<= Y [9]) {
    console.log('Heeyyy!');
} else if ( Y [0] <= userID [1]<= Y [9]) {
    console.log('Heeyyy!');
}    else {
    console.log('nope!')
}


// logical operators and && or ||

&& password.includes('@')