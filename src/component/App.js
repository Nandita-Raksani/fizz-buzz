import React, { useState } from 'react';
import FizzBuzzer from './FizzBuzzer';
import '../App.css';

function App() {
  const [number, setNumber] = useState('');
  const inputChange = (e) => {
    setNumber(e.target.value); 
  }

  let result = []
  const generator = () =>{
    for (let x = 1; x <= number; x++) {
      result.push(<FizzBuzzer className="num" key={x} number={x}></FizzBuzzer>)
    }
    return result
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Fizz-Buzz</h2>
      </header>
      <div>Enter a number :  
            <input 
                  type='number'
                  placeholder='Enter a number' 
                  value={number}
                  onChange={inputChange} />
            <br/>
        </div>
       <div> {generator()}</div>
    </div>
  );
}
export default App;
