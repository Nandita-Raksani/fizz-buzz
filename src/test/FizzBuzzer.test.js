import React from 'react';
import FizzBuzzer from "../component/FizzBuzzer";
import { shallow, configure } from 'enzyme';

describe(("<FizzBuzzer/> component"), () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<FizzBuzzer/>);
    });
  
    it("should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
    
  });

  describe(("print functionality"), () => { 
    it("should print 1 for prop number passed as 1", () => {
        let wrapper = shallow(<FizzBuzzer number="1"/>);
        expect(wrapper.find('label').text()).toBe("1");
    });
  });