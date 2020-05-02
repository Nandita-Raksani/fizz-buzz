import React from 'react';

const FizzBuzzer = (props) => {

    const doFizzBuzz = () => {
      const number = props.number;
      return 1;
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