import React from 'react';

const FizzBuzzer = (props) => {

    const doFizzBuzz = () => {
      const number = props.number;
      if(number == 3){
          return 'Fizz';
      }
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