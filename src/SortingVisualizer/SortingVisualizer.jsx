import React from 'react';
import useState from 'react'
import {getMergeSortAnimations} from './SortingAlgorithms';
import './SortingVisualizer.css';
const FIRST_COLOR = 'purple';
const SECOND_COLOR = 'white';
const ANIM_SPEED = 1;
export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            constantValue: 730,
            secondValue: 10,
            numBars: 310,
        };
    }

    componentMount(){
        this.resetArray();
    }

    arrayReset(){
        const array = []
        const { constantValue, secondValue, numBars} = this.state;
        for(let i = 0; i < numBars; i++){
            array.push(randomInt(secondValue, constantValue));
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

    updateSecondValue = (event) => {
        const newValue = parseInt(event.target.value, 10);
        this.setState({ secondValue: newValue }, () => {
          this.arrayReset(); 
        });
      };

      updateNumBars = (event) => {
        const newValue = parseInt(event.target.value, 10);
        this.setState({ numBars: newValue }, () => {
          this.arrayReset(); 
        });
      };

    render() {
        const {array, constantValue, secondValue, numBars} = this.state;

        return (
            <div className="array-container">
            
              {array.map((value, idx) => (
                
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    backgroundColor: FIRST_COLOR,
                    height: `${value}px`,
                  }}>
                  </div>
                  
              ))}
              <div className="buttonBox">
            <button className="button" onClick={() => this.arrayReset()}>Generate New Array</button>
            <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
            <input className="slider" type="range" min="10" max="730" value={secondValue} onChange={this.updateSecondValue}></input>
            <input className="slider" type="range" min="10" max="310" value={numBars} onChange={this.updateNumBars}></input>
                </div>
                    </div>
            
          );
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
  
  