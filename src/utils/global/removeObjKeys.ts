/* eslint-disable */
export const deleteASpecificKeyFromObj = (arr: { [x: string]: any }, keyToRemove: string) => {
  if (arr) {
    return Object.keys(arr).reduce((acc: any, key) => {
      if (typeof arr[key] === 'object') {
        acc[key] = deleteASpecificKeyFromObj(arr[key], keyToRemove);
      } else if (key !== keyToRemove) {
        acc[key] = arr[key];
      }
      return acc;
    }, {});
  }

  return arr;
};

export const deleteAllSpecificObjKeys = (arr: any[] | null | undefined, keyToRemove: string) =>
  arr?.map((obj) => deleteASpecificKeyFromObj(obj, keyToRemove));
