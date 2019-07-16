function padSeconds(seconds) {
  return ('0' + seconds).slice(-2);
}

function toClockParts(ms, options = {}) {
  const total = Math.ceil(ms / 1000);
  const minutes = Math.floor(total / 60);
  const seconds = total - minutes * 60;
  return {
    total,
    minutes,
    seconds: options.noPad ? seconds : padSeconds(seconds)
  };
}

const separator = ':';
function clockTime() {
  if (arguments.length > 1) {
    return arguments[0] + separator + padSeconds(arguments[1]);
  }

  const clockParts = toClockParts(arguments[0]);
  return clockParts.minutes + separator + clockParts.seconds;
}

module.exports = clockTime;
module.exports.toClockParts = toClockParts;
module.exports.clockTime = clockTime;
