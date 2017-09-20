
  var bar1 = document.getElementById("progress-bar1");
  var bar2 = document.getElementById("progress-bar2");
  var bar3 = document.getElementById("progress-bar3");
  var bar4 = document.getElementById("progress-bar4");
  var bar1_1 = document.getElementById("progress-bar1_1");
  var bar2_1 = document.getElementById("progress-bar2_1");
  var bar3_1 = document.getElementById("progress-bar3_1");
  var bar4_1 = document.getElementById("progress-bar4_1")
  var bar5_1 = document.getElementById("progress-bar5_1");
  var width=-5;

setInterval(progressGrowth, 60);

function progressGrowth(){
  // Never clear interval so it is an intentional infinite loop
  //Also the width is set to -5 to give some extra time for the progress bar to clear.  Otherwise the bar would not clear all the way because the loop is too fast.
    if (width <= 25) {
      bar1.style.width = width + '%';
      bar1_1.style.width = width + '%';
      width += 0.5;
    }
    else if (width<=33){
      bar2.style.width = (width - 25) + '%';
      bar2_1.style.width = (width - 25) + '%';
      width += 0.5;
    } else if (width <= 50){
      bar2.style.width = (width - 25) + '%';
      bar3_1.style.width = (width - 33) + '%';
      width += 0.5;
    }else if (width <= 75){
      bar3.style.width = (width - 50) + '%';
      bar4_1.style.width = (width - 50) + '%';
      width += 0.5;
    } else if (width <= 100){
      bar4.style.width = (width - 75) + '%';
      width += 0.5;
    }else if (width <= 150){
      width += 0.5;
    } else {
      bar1.style.width = 0 + '%';
      bar2.style.width = 0 + '%';
      bar3.style.width = 0 + '%';
      bar4.style.width = 0 + '%';
      bar1_1.style.width = 0 + '%';
      bar2_1.style.width = 0 + '%';
      bar3_1.style.width = 0 + '%';
      bar4_1.style.width = 0 + '%';
      width=-5;
    }
  }
