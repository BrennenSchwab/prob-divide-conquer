function sortedFrequency(arr, num) {
    let firstIdx = getFirstIdx(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = getLastIdx(arr, num);
    return lastIdx - firstIdx + 1;
  
}
function getFirstIdx(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx >= lowIdx) {
      let midIdx = Math.floor((lowIdx + highIdx) / 2)
      if ((midIdx === 0 || num > arr[midIdx - 1]) && arr[midIdx] === num) {
        return midIdx;
      } else if (num > arr[midIdx]) {
        return getFirstIdx(arr, num, midIdx + 1, highIdx)
      } else {
        return getFirstIdx(arr, num, lowIdx, midIdx - 1)
      }
    }
    return -1
}
  
  function getLastIdx(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx >= lowIdx) {
      let midIdx = Math.floor((lowIdx + highIdx) / 2)
      if ((midIdx === arr.length - 1 || num < arr[midIdx + 1]) && arr[midIdx] === num) {
        return midIdx;
      } else if (num < arr[midIdx]) {
        return getLastIdx(arr, num, lowIdx, midIdx - 1)
      } else {
        return getLastIdx(arr, num, midIdx + 1, highIdx)
      }
    }
    return -1
}

module.exports = sortedFrequency