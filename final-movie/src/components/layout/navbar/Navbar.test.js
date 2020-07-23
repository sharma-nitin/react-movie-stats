import React from 'react';
import {shallow} from 'enzyme';
import Navbar from './Navbar';

const setup = (props = {})=>{
    const component = shallow(<Navbar {...props}/>);
    return component;
};

const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('Navbar Component',()=>{
    let component;
    beforeEach(()=>{
        component = setup();
    })

    it('should render navbar',()=>{
        const wrapper = findByTestAttr(component,'navbar');
        expect(wrapper.length).toBe(1);
    })

    it('should render movielink',()=>{
        const wrapper = findByTestAttr(component,'movielink');
        expect(wrapper.length).toBe(1);
    })
})