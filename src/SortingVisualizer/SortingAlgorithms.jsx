// Define constants for the animation
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
 
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  // Compares the i (start index) and j (middle index) and for each comparison
  // the color of the element compared changes
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
     
      animations.push([i, j]);
     
      animations.push([i, j]);
      // if and else statement where two scenarios are set:
      // if i is less or equal to j the value of k is changed to i
      // else the value of k is changed to j
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
    // the elements i and j are compared and their colors change
      animations.push([i, i]);
      
      animations.push([i, i]);
    // The value of k is changed to the auxiliary value of i

      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // Compares the value of j with the end index, pushing both j for the second time
      // it also changes the color of the elements for each push
      animations.push([j, j]);
     
      animations.push([j, j]);
    
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

export function getInsertionSortAnimations(array){
  const animations = [];
  const n = array.length;
  for (let i = 1; i < n; i++){
    const key = array[i];
    let j = i -1;
    while (j >= 0 && array[j] > key){
      animations.push([j+1, array[j]]);
      array[j+1] = array[j];
      j = j-1;
    }
    animations.push([j+1, key]);
    array[j+1] = key;
  }
  return animations;
}