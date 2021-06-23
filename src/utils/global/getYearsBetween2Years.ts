export function getYearsBetween2Years(
  startYear: number = 2019,
  endYear: number = new Date().getFullYear(),
): number[] {
  let fromYear = startYear;
  const years = [];

  for (let i = startYear; i <= endYear; i++) {
    years.push(fromYear);
    fromYear = +fromYear + 1;
  }

  return years;
}
