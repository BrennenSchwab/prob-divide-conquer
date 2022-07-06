function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx= arr.length -1;

  while (leftIdx <= rightIdx){
      let midIdx = Math.floor((rightIdx + leftIdx)/2);

      if ((midIdx === 0 || arr[midIdx-1] === 1) && arr[midIdx] === 0){
          return arr.length - midIdx;
      } else if (arr[midIdx] === 1){
          leftIdx = midIdx +1;
      } else{
        rightIdx = midIdx - 1;
      }
  }
  return 0;
}

module.exports = countZeroes