import React from 'react';

const FizzBuzzer = (props) => {

    const doFizzBuzz = () => {
      const number = props.number;
      return number;
    }
    
  return (
      <div>      
        <form>
            <label>{doFizzBuzz()}</label>                
        </form>
      </div>
  );
}
export default FizzBuzzer;