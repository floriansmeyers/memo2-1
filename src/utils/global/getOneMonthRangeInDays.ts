interface IDate {
  from: string;
  to: string;
}

export const getOneMonthRangeInDays = (month: string, year: number): IDate => {
  const getMonthNumber = new Date(month + year);
  const firstDay = new Date(year, getMonthNumber.getMonth(), +2);
  const lastDay = new Date(year, getMonthNumber.getMonth() + 1);
  const from = firstDay.toISOString();
  const to = lastDay.toISOString();

  return {
    from,
    to,
  };
};
