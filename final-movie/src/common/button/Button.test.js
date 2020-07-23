import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

const setup = (props = {btnName:'proceed', goTo:'home'})=>{
    const component = shallow(<Button {...props}/>);
    return component;
};

const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('Button Component',()=>{
    let component;
    beforeEach(()=>{
        component = setup();
    })

    it('should render without errors',()=>{
        const wrapper = findByTestAttr(component,'buttonComponent');
        expect(wrapper.length).toBe(1);
    })

    it('should render without errors',()=>{
        const wrapper = findByTestAttr(component,'buttonname');
        expect(wrapper.length).toBe(1);
    })
})