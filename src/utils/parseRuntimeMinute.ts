export const convertMinutesToHoursAndMinutes = (minutes = 0): string => {
  const hours = Math.floor(minutes / 60);
  const minutesRemaining = minutes % 60;
  return `${hours}h ${minutesRemaining}m`;
};
