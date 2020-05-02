import React, { useState } from 'react';
import FizzBuzzer from './FizzBuzzer';
import '../App.css';

function App() {
  const [number, setNumber] = useState('');
  const inputChange = (e) => {
    setNumber(e.target.value); 
  }

  const generator = () =>{
    if(number == 1){
    return <FizzBuzzer className="num" key={number} number={number}></FizzBuzzer>
    }
    return null;
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
