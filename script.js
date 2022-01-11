const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('JAN 17, 2022 12:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerHTML = Math.floor(distance / (day)),
        document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      if (distance < 0) {
        clearInterval(x);
        '<span aria-label="party popper">&#x1f389;</span> WHOOOW Vandaag ben ik jarig! <span aria-label="birthday cake">&#x1f382;</span>;
      }

    }, second)
