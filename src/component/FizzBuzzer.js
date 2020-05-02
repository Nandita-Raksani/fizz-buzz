import React from 'react';

const FizzBuzzer = (props) => {

    const doFizzBuzz = () => {
      const number = props.number;
      if(divisibleBy(number, 15)){
        return 'FizzBuzz';
      }
      if(divisibleBy(number, 3)){
          return 'Fizz';
      }
      if(divisibleBy(number, 5)){
        return 'Buzz';
      }
      return number;
    }
    const divisibleBy = (num, divisor) => {
        return (num % divisor === 0)
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