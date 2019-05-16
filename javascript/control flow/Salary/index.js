/* Create a page which will ask the user for their hourly pay, number of hours they work in a day, and number of days they work in a month a output their monthly salary after 25% tax. Output the salary with some nice message like "Your salary is 2500 euro after tax." Use the functions created in the previous exercise. */

let hourlywage = parseInt(prompt('Please insert your hourly pay'));
let numberofh = parseInt(prompt('Please insert number of working hours in a day'));
let wdays = parseInt(prompt('Please insert number of working days per month'));

console.log('Your salary is ' + ((hourlywage * numberofh * wdays) * 0.75) + ' EUR after tax')

// Turn your salary computing formula to a function called salary. The function will have three parameters: pay, hours and days and will return the resulting salary. Call that function with some real arguments to test that it works.
// Create another function called taxed_salary(), which will take two parameters - the basic salary and the tax. Let it return a salary after applying the tax.


const salary = (pay, hours, days) => {
    return pay * hours * days ;
}

const taxedsalary = (salary, tax) => {
    return salary * (1-tax) ;
}

const mySalary = taxedsalary(salary(20,8,21), 0.25);