import React from 'react';
import {getMergeSortAnimations} from './SortingVisualizer/sortingAlgorithms.js';
import './SortingVisualizer.css';
const FIRST_COLOR = 'purple';
const SECOND_COLOR = 'green';
const NUM_BARS = 400;
const ANIM_SPEED = 1;
export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentMount(){
        this.resetArray();
    }

    arrayReset(){
        const array = []
        for(let i = 0; i < NUM_BARS; i++){
            array.push(randomInt(10, 800));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECOND_COLOR : FIRST_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIM_SPEED);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIM_SPEED);
          }
        }
      }

    quickSort(){
        //to be implemented
    }

    heapSort(){
        //to be implemented
    }

    bubbleSort(){
        //to be implemented
    }

    bogoSort(){
        //to be implemented
    }

    render() {
        const {array} = this.state;

        return(
            <div className = "array-contain">
                 <div className = "buttonBox">
                <button className="button" onClick={() => this.arrayReset()}>Generate New Array</button>
                <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className="button" onClick={() => this.quickSort()}>Quick Sort</button>
                <button className="button" onClick={() => this.heapSort()}>Heap Sort</button>
                <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button className="button" >Dark Mode</button>
                <div className = "sliders">
                <p>Sort</p>
                <input type="range" min="10" max="100" className="customSlider"></input>
                <p>Volume</p>
                <input type="range" min="10" max="100" className="customSlider"></input>
                </div>
                
                </div>
                {array.map((value, idx) => (
                    <div
                        className = "array-bar"
                        key = {idx}
                        style = {{
                            backgroundColor: FIRST_COLOR,
                            height: '${value}px',
                        }}>
                            
                        </div>
                        
                ))}
               
            </div>
            
        );
        <div>a</div>
    }

}
function randomInt(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }