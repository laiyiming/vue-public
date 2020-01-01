// eslint-disable-next-line
const isEmpty = (val) => {
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    if (!Object.keys(val).length) return true;
  } else {
    if (
      val === "null" ||
      val === null ||
      val === "undefined" ||
      val === undefined ||
      val === ""
    )
      return true;
    return false;
  }
  return false;
};

export default {
  isEmpty
};
