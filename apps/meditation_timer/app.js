function beep() {
  Bangle.beep(200,207.65*8).then(
  ()=>Bangle.beep(200,220.00*8)).then(
  ()=>Bangle.beep(200,246.94*8)).then(
  ()=>Bangle.beep(200,261.63*8)).then(
  ()=>Bangle.beep(200,293.66*8)).then(
  ()=>Bangle.beep(200,329.63*8)).then(
  ()=>Bangle.beep(200,369.99*8)).then(
  ()=>Bangle.beep(200,392.00*8)).then(
  ()=>Bangle.beep(200,440.00*8));
}

var beepInterval = setInterval(function() {
  beep();
}, 20000);
