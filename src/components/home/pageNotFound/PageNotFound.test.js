import React from 'react';
import {shallow} from 'enzyme';
import PageNotFound from './PageNotFound';

const setup = (props = {})=>{
    const component = shallow(<PageNotFound {...props}/>);
    return component;
};

const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('page not found Component',()=>{
    let component;
    beforeEach(()=>{
        component = setup();
    })

    it('should render pagenotfoundHeader',()=>{
        const wrapper = findByTestAttr(component,'pagenotfoundHeader');
        expect(wrapper.length).toBe(1);
    })

    it('should render pagenotfoundtext',()=>{
        const wrapper = findByTestAttr(component,'pagenotfoundtext');
        expect(wrapper.length).toBe(1);
    })

    it('should render pagenotfoundLink',()=>{
        const wrapper = findByTestAttr(component,'pagenotfoundLink');
        expect(wrapper.length).toBe(1);
    })
})