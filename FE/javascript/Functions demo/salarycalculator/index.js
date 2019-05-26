const salary = () => {
    const input = document.querySelector('#hourlypay');
    const hourlypay = input.value;
    const input1 = document.querySelector('#hoursperday');
    const hoursperday = input1.value;
    const input2 = document.querySelector('#dayspermonth');
    const dayspermonth = input2.value;
    const result = hourlypay * hoursperday * dayspermonth;
    const spanpart = document.querySelector('span');
    spanpart.textContent = result;
}
