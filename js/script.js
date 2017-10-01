var startDate = new Date("Sep 21, 2017 00:00:00").getTime();
var countDownDate = new Date("Oct 4, 2017 17:17:00").getTime();
var fullTime = countDownDate - startDate;
var distance;

function counter() {
  var now = new Date().getTime();
  distance = countDownDate - now;
  var rawProgress = ((1 - (distance / fullTime)) * 100);
  if(distance > 60000) {
    var progress = rawProgress.toFixed(2);
  } else if (distance > 10000) {
    var progress = rawProgress.toFixed(3);
  } else {
    var progress = rawProgress.toFixed(4);
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var textD = (days == 0 || days > 1) ? " days " : " day ";
  var textH = (hours == 0 || hours > 1) ? " hours " : " hour ";
  var textM = (minutes == 0 || minutes > 1) ? " minutes " : " minute ";
  var textS = (seconds == 0 || seconds > 1) ? " seconds" : " second";

  document.getElementById("countdown").innerHTML = days + textD + hours + textH + minutes + textM + seconds + textS;
  document.getElementById("progress").innerHTML = "Roberta is currently " + progress + "% reformed.";
  var bar = document.getElementById("progressBar");
  bar.style.width = progress + "%";
  if(distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "0 days 0 hours 0 minutes 0 seconds"
    document.getElementById("cdSub").innerHTML = '<span class="linear-wipe">REFORMED</span>';
    bar.style.animation = "pride 1s linear 0s infinite";
    bar.style.width = "100%";
    document.getElementById("progress").innerHTML = "Roberta is fully reformed.";
    document.getElementById("bg").style.opacity = 0;
    document.getElementById("bgReform").style.opacity = 1;
    document.getElementById("fader").style.opacity = 0.5;
  }
}
counter();
var x = setInterval(counter, 1000);

/**
* Sets the countdown to count down to <NOW> + seconds.
* @param {number} seconds
*/
function setTime(secs) {
  if(distance > 0) {
    countDownDate = new Date().getTime() + (secs * 1000);
    return "Set remaining time to " + secs + " seconds";
  } else {
    return "Error: Countdown has finished"
  }
}

function bla() {
  return "Hi";
}
