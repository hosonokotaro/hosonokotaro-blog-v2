// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObjectEmpty = (target: any) => {
  if (
    target &&
    Object.keys(target).length === 0 &&
    Object.getPrototypeOf(target) === Object.prototype
  ) {
    return true;
  }

  return false;
};

export default isObjectEmpty;
