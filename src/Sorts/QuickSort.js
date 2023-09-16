export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;    // base case, nothing to sort
    const helperArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, helperArray, animations);
    return animations;
  }
  
  function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    helperArray,
    animations,
  ) {
    if (startIdx < endIdx) { //if portion of array has elements to sort
      const pivotIdx = partition(mainArray, startIdx, endIdx, helperArray, animations); //Get pivot index from partition algo fnc.
      quickSortHelper(mainArray, startIdx, pivotIdx - 1, helperArray, animations);  //Recursive sort of left side of array
      quickSortHelper(mainArray, pivotIdx + 1, endIdx, helperArray, animations);    //Recursive sort of right side of array
    }
  }
  
  function partition(
    mainArray,
    startIdx,
    endIdx,
    helperArray,
    animations,
  ) {
    const pivot = helperArray[endIdx];
    let i = startIdx - 1;
  
    for (let j = startIdx; j < endIdx; j++) {
      animations.push([j, endIdx]); // Highlight current elements being compared
      animations.push([j, endIdx]); // Revert the highlight
  
      if (helperArray[j] < pivot) {
        i++;
        swap(mainArray, i, j, animations); //swap if current element is smaller than pivot
      }
    }
  
    swap(mainArray, i + 1, endIdx, animations); //swap pivot element to its correct position
    return i + 1; //return pivot index
  }
  
  function swap(array, i, j, animations) {
    const temp = array[i];
    array[i] = array[j];            // 48 - 50 is swap of array positions in array
    array[j] = temp;
    animations.push([i, array[i]]);     //push the swapped elements so they will be highlighted
    animations.push([j, array[j]]);
  }
  