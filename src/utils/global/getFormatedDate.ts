interface IFormattedDate {
  fullDate: string;
  hourMinutes: string;
}

export const formattedDate = (d: string): IFormattedDate => {
  const date = new Date(d);

  function fullDate(): string {
    const month = date.toLocaleString('default', { month: 'long' });
    const dayName = date.toLocaleString('default', { weekday: 'long' });
    const dayNr = date.toLocaleString('default', { day: 'numeric' });
    const year = date.toLocaleString('default', { year: 'numeric' });

    return `${dayName} ${dayNr} ${month} ${year} `;
  }

  function hourMinutes(): string {
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  return {
    fullDate: fullDate(),
    hourMinutes: hourMinutes(),
  };
};
