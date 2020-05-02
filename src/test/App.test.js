import React from 'react';
import App from "../component/App";
import FizzBuzzer from "../component/FizzBuzzer";
import { shallow } from 'enzyme';

describe(("<App/> component"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have the title", () => {
    expect(wrapper.find("header h2").text()).toEqual("Fizz-Buzz");
  });
  it("should have a text box to enter the number", () => {
    expect(wrapper.find('input').length).toBe(1);
  });
});

describe(("<FizzBuzzer/> Fizz Buzz functionality"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("Should generate one FizzBuzzer component for 1", ()=>{
    wrapper.find('input').simulate('change', { target: { value: 1 } });
    expect(wrapper.find(FizzBuzzer).length).toBe(1);
  })
  it("Should generate two FizzBuzzer components for 2", ()=>{
    wrapper.find('input').simulate('change', { target: { value: 2 } });
    expect(wrapper.find(FizzBuzzer).length).toBe(2);
  })
});