export const pad = (val: number | string, valToBePadded: string): string =>
  String(val).padStart(2, valToBePadded);
