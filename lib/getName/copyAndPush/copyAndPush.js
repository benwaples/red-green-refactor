const copyAndPush = (arr, item) => {
  const arrCopy = arr;
  arrCopy.push(item);
  return arrCopy;
};

module.exports = { copyAndPush };
