const beepTime = function(time) {
  let ms = (time * 1000);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ms);
};

process.argv.splice(0, 2);
for (let arg of process.argv) {
  if (!isNaN(arg) && arg > 0) {
    beepTime(arg);
  }
}