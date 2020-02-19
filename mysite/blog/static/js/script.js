/*--- Global, $, alert, ---*/

$(function(){
    'use strict';

    // Data table
    $(document).ready(function() {
        $('#table').DataTable();
    });
    // To add class active to tab links and remove it from another links
    $(document).on('click', '.tab-link', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});

// Countdown Timer
function getTimeComponents(interval) {
    var seconds = Math.floor((interval / 1000) % 60);
    var minutes = Math.floor((interval / 1000 / 60) % 60);
    var hours = Math.floor((interval / (1000 * 60 * 60)) % 24);
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    return {
      'total': interval,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }  
  
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    return(getTimeComponents(t));
  }
  
  function initializeClock(id, duration) {
    var clock = document.getElementById(id);
    // var daysSpan = clock.querySelector('.days');
    // var hoursSpan = clock.querySelector('.hours');
    var hoursSpan = clock.querySelector('.hours');  
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var t = getTimeComponents(duration);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
  }
    
  function startClock(id) {
    var deadline = new Date(Date.parse(new Date()) + 10 * 60 * 1000);
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');  
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    
    function updateClock() {
      var t = getTimeRemaining(deadline);
  
      // daysSpan.innerHTML = t.days;
      // hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    } 
    
    updateClock();
    timeinterval = setInterval(updateClock, 1000);
  }
  
  function resetClock(id) {
    clearInterval(timeinterval);
    initializeClock('clockdiv', timerSetting*1000);
  }
  
  var timeinterval;
  var timerSetting = 10*60;
  initializeClock('clockdiv', timerSetting*1000);