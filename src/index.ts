function padSeconds(seconds: number): string {
  return ('0' + seconds).slice(-2);
}

interface ClockParts {
  total: number;
  minutes: number;
  seconds: number | string;
}

export function toClockParts(ms: number, disablePadding?: boolean): ClockParts {
  const total = Math.ceil(ms / 1000);
  const minutes = Math.floor(total / 60);
  const seconds = total - minutes * 60;
  return {
    total,
    minutes,
    seconds: disablePadding ? seconds : padSeconds(seconds)
  };
}

const separator = ':';
export function clockTime(ms: number, seconds?: number): string {
  if (Number.isInteger(seconds)) {
    return ms + separator + padSeconds(seconds);
  }

  const clockParts = toClockParts(ms);
  return clockParts.minutes + separator + clockParts.seconds;
}

export default clockTime;
