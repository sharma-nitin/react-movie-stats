import Landing from './Landing';
import { shallow } from 'enzyme';
import {testStore } from './../../../utils';
import React from 'react';


const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Landing store={store} />).childAt(0).dive();
    return wrapper;
};

describe('Landing Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
           movies:{loading: true} 
        }
        wrapper = setUp(initialState);
    });

    it('Should render container without errors', () => {
        const component = findByTestAttr(wrapper, 'container');
        expect(component.length).toBe(1);
    });

    it('Should render container without errors', () => {
        const component = findByTestAttr(wrapper, 'errorboundary');
        expect(component.length).toBe(1);
    });

    it('Should render container without errors', () => {
        const component = findByTestAttr(wrapper, 'searchform');
        expect(component.length).toBe(1);
    });

    it('Should render container without errors', () => {
        const component = findByTestAttr(wrapper, 'spinner');
        expect(component.length).toBe(1);
    });

});