export const isContainingFileNameImageExtension = (name: string): boolean => {
  if (!name) {
    return false;
  }

  const validImageTypes = ['jpeg', 'png', 'jpg'];
  const check = validImageTypes.find((str) => name.endsWith(str));

  return Boolean(check);
};
