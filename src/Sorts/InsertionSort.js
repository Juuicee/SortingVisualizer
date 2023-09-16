export function getInsertionSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array; // Base case, nothing to sort

    for (let i = 1; i < array.length; i++){         // Iterate through array, starting at second element
        let current = array[i];             // current is element that will be inserted at correct sorted position
        let j = i - 1;                      // Will start at element right before current

        while (j >= 0 && current < array[j]){
            animations.push([j, j + 1]);         // Highlight elements being compared
            animations.push([j, j + 1]);         // Revert highlights
            animations.push([j + 1, array[j]]);  // Move element to the right

            array[j+1] = array[j];          // Move the larger element to the right in the array
            j--;                            // Decrement j to move to next element to the left
        }

        animations.push([j+1, current]);        // Insert current element in correct position
        array[j+1] = current                    // Same thing in array
    }

    return animations;

}