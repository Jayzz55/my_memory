var $timer = $('#timer'),
    time = 2 * 60,
    formattedTime = formatTime(time*1000);

function formatTime(millisec) {
  var min = parseInt(millisec / 60000,10),
      sec = Math.round(millisec / 1000) % 60;
  if (sec < 10) {
    sec = '0' + sec;
  }
  return [min, sec];
}

var timer = new Timer({
  tick: 1,
  ontick: function(millisec) {
    formattedTime = formatTime(millisec);
    $timer.html('<span>'+formattedTime[0]+':'+formattedTime[1]+'</span>');
  },
  onstart: function() {
    Game.canPick = true;
    console.log('timer started');
  },
  onend: function() {
    console.log('timer stopped');
    Game.canPick = false;
    $timer.html('<span>Time finished!</span>');
  }
});

$timer.html('<span>'+formattedTime[0]+':'+formattedTime[1]+'</span>');

$('#start-button').on('click', function(){
  timer.start(time);
});
