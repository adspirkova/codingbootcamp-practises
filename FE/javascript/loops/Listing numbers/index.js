let numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];


// // 1. Output the number of items in the array to the console.
// console.log('Question 1:');
// console.log(numbers.length);

// // 2. Output the number at the index 13 to the console.
// console.log('Question 2:');
// console.log(numbers[13]);

// // 3. Output the number which is exactly in the middle of the array.
// console.log('Question 3:');
// let x = Math.floor((numbers.length)/2);
// console.log(numbers[x]);

// // 4. Output every number in the array to the console.
// console.log('Question 4:');
// for (i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }


// // 5. Output the square of every number to the console.
// console.log('Question 5:');
// for (i=0; i<numbers.length; i++){
//     console.log(numbers[i]**2);
// }


// // 6. Output only negative numbers from the array.

// /* for (i=0; i<numbers.length; i++){
//     numbers[i]= numbers[i]<0; 
//     console.log(numbers[i]= numbers[i]<0);
// } */
// console.log('Question 6:');
//     for (i=0; i<numbers.length; i++){
//         if (numbers[i]<0){
//         console.log(numbers[i]);
//     }}

// // 7. Output an absolute value of every number in the array.
// console.log('Question 7:');
// for (i=0; i<numbers.length; i++){
//     if (numbers[i]<0){
//     console.log(numbers[i]*(-1));
// } else {
//     console.log(numbers[i]);
// }}

// // 8. Output only those numbers which absolute value id divisible by 3.
// console.log('Question 8:');
// for (i=0; i<numbers.length; i++){
//     if ((Math.abs(numbers[i])% 3) === 0){
//         console.log(numbers[i]);
//     }
// }


// // 9. Output only even numbers from the array.
// console.log('Question 9:');
//     for (let i = 0; i < numbers.length; i++){
//       if (numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//       }
//     }

// // 10. For every number in the array output the difference between that number and number 5.

//     console.log('question 10');

//     for (let i = 0; i < numbers.length; i++){
//        numbers[i]=numbers[i]-5;
//     console.log(numbers[i])}

// 11.For every number in the array output the squared difference of that number and number 5.

// console.log('question 11');

// for (let i = 0; i < numbers.length; i++){
//    numbers[i]=numbers[i]**2 - 5**2;
// console.log(numbers[i])}

// 12. Output all the numbers which are greater then their predecessor in the array.
// console.log('Question 12?');
// for (let i=0; i<=numbers.length; i++){
//     if (numbers[i++]<numbers[i]){
//         console.log(numbers[i]);
//     }
// }

// 13. Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.
console.log('Question 13?');

for (let i=1; i<numbers.length-1; i++){
    if (numbers[i--]<numbers[i]>numbers[i++]){
        console.log(numbers[i]);
    }
}