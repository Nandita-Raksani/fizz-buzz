import React from 'react';

const FizzBuzzer = (props) => {

    const doFizzBuzz = () => {
      const number = props.number;
      if(number % 3 == 0){
          return 'Fizz';
      }if(number == 5){
        return 'Buzz';
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