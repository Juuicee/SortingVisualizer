export function getBogoSortAnimation(array){
    const animations = [];
    if (array.length <= 1) return array;    //Base Case
    while (!sorted(array)){         // While the array is not sorted, use shuffle helper to get new random permutation
        shuffle(array, animations);
    }
    return animations;      
}

// Helper function to check if array is sorted
function sorted(array){
    for (let i = 0; i < array.length; i++){             // Iterate over all elements of the array
        if (array[i] > array[i+1]) return false;        // If any element is greater than the one that comes after it, not sorted, so false 
    }
    return true;                                        // Otherwise, true
}


// Helper function to shuffle elements and attain new random permutation
function shuffle(array, animations){
   
    for (let i = array.length - 1; i > 0; i--){       // Starting at last element, iterate and swapping all the way through up until first element
        const j = Math.floor(Math.random() * (i+1));  // Generating random second index
        [array[i], array[j]] = [array[j], array[i]];  // Swapping elements randomly
        animations.push([i, j]);    // Animation for swapping of elements
    }

}