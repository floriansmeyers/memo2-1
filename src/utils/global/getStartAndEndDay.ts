export const getStartAndEndDay = (startDay: number = 0): string => {
  const start = new Date();

  const end = new Date();
  end.setDate(end.getDate() - startDay);

  return `${start.toISOString()}, ${end.toISOString()}`;
};
