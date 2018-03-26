import leftPad from 'left-pad';

export default (...args) => {
  let minutes = args[0];
  let seconds = args[1];
  if (args.length === 1) {
    // If only one arg is passed, it's in milliseconds and must be converted to
    // minutes and seconds
    const time = new Date(args[0]);
    minutes = time.getMinutes();
    seconds = time.getSeconds();
  }

  return `${minutes}:${leftPad(seconds, 2, 0)}`;
};
