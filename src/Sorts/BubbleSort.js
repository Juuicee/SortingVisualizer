export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length <= 1) return array.slice(); // Base case
    let swapped;            // Flag to check if a swap was made during a pass 

    for (let i = 0; i < array.length; i++){
        swapped = false;    // Flag reset to false for each pass

        for (let j = 0; j < array.length - i - 1; j++){

            // Compare two elements
            animations.push([j, j+1]);      // Highlight two elements being compared
            animations.push([j, j+1]);      // Revert highlights

            if (array[j] > array[j+1]){     // Check if elements are in correct order

                animations.push([j, array[j+1]]);
                animations.push([j+1, array[j]]);       // If not, swap through animations and in array to sort
                swap(array, j, j+1);

                swapped = true;             // Set flag to true as elements were swapped
            }
        }

        if (!swapped){              // If nothing was swapped in inside loop, then elements are sorted so break
            break;
        }
    }
    
    return animations;
}
/* Not used - pending delete
function bubbleSort(array, animations) {
    const len = array.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < len - 1; j++) {

            animations.push([j, j +1]);

            if(array[j] > array[j + 1]) {
                // using animations to swap the elements
                animations.push([j, array[j+1]]);
                animations.push([j+1, array[j]]);
                animations.push([j, j+1]);
            } else {
                animations.push([j, j+1]);
            }
        }
        
    }
}
*/

    function swap(array, i, j) {
        const temp = array[i];
        array[j] = array[i];
        array[j] = temp;
    }
