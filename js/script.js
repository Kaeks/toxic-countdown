var startDate = new Date("Sep 21, 2017 00:00:00").getTime();
var countDownDate = new Date("Oct 5, 2017 00:00:00").getTime();
var fullTime = countDownDate - startDate;
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var progress = ((1 - (distance / fullTime)) * 100).toFixed(2);

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
  document.getElementById("cdSub").innerHTML = "Until Roberta is reformed";
  document.getElementById("progress").innerHTML = "Roberta is currently " + progress + "% reformed.";
  var bar = document.getElementById("progressBar");
  bar.style.width = progress + "%";
  bar.innerHTML = nibba;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cdSub").innerHTML = "REFORMED";
    document.getElementById("progress").innerHTML = "Roberta is fully reformed.";
    bar.style.width = "100%";
  }
}, 1000);
