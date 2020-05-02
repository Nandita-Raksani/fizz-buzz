import React from 'react';
import App from "../component/App";
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
});