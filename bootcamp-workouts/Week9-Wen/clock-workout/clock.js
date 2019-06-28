

class Clock {
  constructor(hours, minutes){
    this.hours = hours;
    this.minutes = minutes;
  }

  incrHours(){
    if(this.hours < 11){
      this.hours++;
    } else {
      this.hours = 0;
    }
  }

  decrHours(){
    if (this.hours > 0){
      this.hours--;
    } else {
      this.hours = 11;
    }
  }

  incrMinutes(){
    if (this.minutes < 59){
      this.minutes++;
    } else {
      this.minutes = 0;
      this.incrHours();
      // btnHoursUp.dispatchEvent(event);
    }
  }

  decrMinutes(){
    if(this.minutes > 0){
      this.minutes--;
    } else {
      this.minutes = 59;
      this.decrHours();
      // btnHoursDown.dispatchEvent(event);
    }
  }
}



const twoDigits = number =>  (
  number < 10 ? '0' + number : '' + number
);

const clockUpdate = (clock) => {
  let hoursDigits = document.querySelector('#digits-hours');
  let minutesDigits = document.querySelector('#digits-minutes');

  hoursDigits.innerHTML = twoDigits(clock.hours);
  minutesDigits.innerHTML = twoDigits(clock.minutes);
}


let amPmtext = document.querySelector('#am_pm');
amPmtext.addEventListener('click', ()=> {
  if (amPmtext.innerHTML == 'am'){
    amPmtext.innerHTML = 'pm';
  } else if (amPmtext.innerHTML == 'pm') {
    amPmtext.innerHTML = 'am';
  }
});
  

document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();

  let clock = new Clock (
    today.getHours(),
    today.getMinutes());

  clockUpdate(clock);

  // var event = document.createEvent('Event');
  // event.initEvent('click', true, true);
  
  let btnHoursUp = document.querySelector('#btn-hours-up');
  btnHoursUp.addEventListener('click', () => {
    clock.incrHours();
    clockUpdate(clock);
  });
 
  let btnHoursDown = document.querySelector('#btn-hours-down');
  btnHoursDown.addEventListener('click', () => {
    clock.decrHours();
    clockUpdate(clock);
  });

  let btnMinutesUp = document.querySelector('#btn-minutes-up');
  btnMinutesUp.addEventListener('click', () => {
    clock.incrMinutes();
    clockUpdate(clock);
  });
  let btnMinutesDown = document.querySelector('#btn-minutes-down');
  btnMinutesDown.addEventListener('click', () => {
    clock.decrMinutes();
    clockUpdate(clock);
  });
});
