module.exports = function() {
  var minutes = arguments[0];
  var seconds = arguments[1];
  if (arguments.length === 1) {
    // If only one arg is passed, it's in milliseconds and must be converted to
    // minutes and seconds
    var time = new Date(arguments[0]);
    minutes = time.getMinutes();
    seconds = time.getSeconds();
  }

  return [minutes, ('0' + seconds).slice(-2)].join(':');
};
