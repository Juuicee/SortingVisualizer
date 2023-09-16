export function getBubbleSortAnimations(array){
    const animations = [];
    if(array.length <= 1) return array.slice(); // Base case

    const sortHelper = array.slice();
    
    return animations;
}

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
            } else{

                animations.push([j, j+1]);
            }
            }
            }
        }

    function swap(array, i, j) {
        const temp = array[i];
        array[j] = array[i];
        array[j] = temp;
    }
