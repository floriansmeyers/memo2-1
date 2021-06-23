export const secondsToMinutesOrHours = (sec: number, h = true, m = true, s = true): string => {
  const seconds = Math.floor(sec % 60);
  const minutes = Math.floor((sec % 3600) / 60);
  const hours = Math.floor(sec / 3600);
  const clock = {
    hours: `${hours}h.`,
    minutes: `${minutes}min.`,
    seconds: `${seconds}sec.`,
  };

  return `${(h && clock.hours) || ''}${(m && clock.minutes) || ''}${(s && clock.seconds) || ''}`;
};
