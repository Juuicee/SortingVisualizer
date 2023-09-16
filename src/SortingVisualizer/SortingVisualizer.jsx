import React from 'react';
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

    mergeSort(){
        //to be implemented
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
                {array.map((value, idx) => (
                    <div
                        className = "array-bar"
                        key = {idx}
                        style = {{
                            backgroundColor: FIRST_COLOR,
                            height: '${value}px',
                        }}></div>
                ))}
                <button onClick={() => this.arrayReset()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }

}

/*function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="ArrayBar">
        <button className="button">Generate New Array</button>
        <button className="button">Quicksort</button>
        <button className="button">Bubblesort</button>
        <button className="button" onClick={toggleDarkMode}>Dark Mode</button>
        </div>
      </header>
    </div>
  );
}*/

function randomInt(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}