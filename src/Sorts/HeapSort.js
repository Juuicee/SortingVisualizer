export function getHeapSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array; //base case
    const len = array.length;
    
    for (let i = Math.floor(len/2) - 1; i >= 0; i++){     // Create max heap using heap helper function
        heapfunc(array, len, i, animations);
    }

    for (let i = len - 1; i > 0; i--){          // Iterating over heap elements
        animations.push([0, i]); // Highlight elements to be swapped
        animations.push([0, i]); // Revert highlights
        swap(array, 0, i, animations); // Swap current root to the end
        heapfunc(array, i, 0, animations); // Call the heap helper fnc on the reduced heap 
    }

    return animations;
}

// Helper function to heap the elements
function heapfunc(array, size, i, animations){
    let largest = i;        // Initialize largest to be current node
    const left = 2 * i + 1;     // Index of left child node
    const right = 2 * i + 2;    // Index of right child node

    if (left < size && array[left] > array[largest]){       // Check if the left child node exists and if it is greater than the current largest node
        largest = left;   // If so , update largest index to be that of left node, to maintain the heap properties
    }
    if (right < size && array[right] > array[largest]){       // Check if the right child node exists and if it is greater than the current largest node
        largest = right;   // If so , update largest index to be that of right node, to maintain the heap properties
    }

    if (largest !== i){      // If largest was changed throughout this process, it must be swapped 
        animations.push([i, largest]);  // Highlight elements to swap
        animations.push([i, largest]);  // Revert highlight
        swap(array, i, largest, animations); // Swap elements

        heapfunc(array, size, largest, animations); // If we had to swap, then the subtree at largest may no longer follow heap properties, so recursive call of func to fix
    }

}

// Helper function to swap array elements
function swap(array, i, j, animations){
    const temp = array[i];
    array[i] = array[j];            //Swapping of elements
    array[j] = temp;
    animations.push([i, array[i]]); // Push animation to updated i element
    animations.push([j, array[j]]); // Push animation to updated j element
}