import React from 'react';
import {shallow} from 'enzyme';
import Spinner from './Spinner';

const setup = (props = {})=>{
    const component = shallow(<Spinner {...props}/>);
    return component;
};

const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('Spinner Component',()=>{
    let component;
    beforeEach(()=>{
        component = setup();
    })

    it('should render spinner',()=>{
        const wrapper = findByTestAttr(component,'spinner');
        expect(wrapper.length).toBe(1);
    })

    it('should renderimage',()=>{
        const wrapper = findByTestAttr(component,'image');
        expect(wrapper.length).toBe(1);
    })
})