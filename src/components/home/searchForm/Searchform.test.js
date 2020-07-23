import SearchForm from './SearchForm';
import { shallow } from 'enzyme';
import {testStore } from './../../../utils';
import React from 'react';


const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<SearchForm store={store} />).childAt(0).dive();
    return wrapper;
};

describe('SearchForm Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            movies:{
                text: 'scary'
            }          
        }
        wrapper = setUp(initialState);
    });

    it('Should render topnav without errors', () => {
        const component = findByTestAttr(wrapper, 'topnav');
        expect(component.length).toBe(1);
    });

    it('Should render container without errors', () => {
        const component = findByTestAttr(wrapper, 'container');
        expect(component.length).toBe(1);
    });

    it('Should render submitbtn without errors', () => {
        const component = findByTestAttr(wrapper, 'submitbtn');
        expect(component.length).toBe(1);
    });
});