const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]


// Find the length of the longest ascending sequence of consecutive numbers in the array.
console.log('Q1?');




// Find the longest sequence of consecutive numbers which is either ascending or descending.
console.log('Q2?');

let maxcount=0;
let maxchar=0;
let count = 0;
for (let i=1; i<numbers.lenght;i++){
    if (numbers[i--]===numbers[i]) {
        count++;
    } else {
        count=1;
    } if (count > maxcount) {
        maxcount=count;
        maxchar=numbers;
    }
}
console.log(maxchar,maxcount);



// // Find the biggest element in the array
// console.log('Q3');

// for(let i = numbers.length-1; i < numbers.length; i++){
//     for (let j=0;j<i;j++){
//         if (numbers[i]<numbers[j]){
//             let x = numbers[i];
//             numbers[i]=numbers[j];
//             numbers[j]=x;
//         }
//     }  console.log(numbers[i]);
// };

// // Find the second biggest element in the array.
// console.log('Q4');
// for(let i = numbers.length-2; i < numbers.length-1; i++){
//     for (let j=0;j<i;j++){
//         if (numbers[i]<numbers[j]){
//             let x = numbers[i];
//             numbers[i]=numbers[j];
//             numbers[j]=x;
//         }
//     }  console.log(numbers[i]);
// };


// Find the lowest peak and the highest valley in the array.
console.log('Q5?');

// for(let i = numbers.length-1; i < numbers.length; i++){
//     for (let j=0;j<i;j++){
//         if (numbers[i]<numbers[j]){
//             let x = numbers[i];
//             numbers[i]=numbers[j];
//             numbers[j]=x;
//         }
//     }  console.log(numbers[i]);
// };

