import React from 'react';
import {shallow} from 'enzyme';
import MovieCard from './MovieCard';

const setup = (props = {
    movie:{
        Poster:'',
        Title:'',
        Year:'',
        imdbID:''
    }
})=>{
    const component = shallow(<MovieCard {...props}/>);
    return component;
};

const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe('Movie card Component',()=>{
    let component;
    beforeEach(()=>{
        component = setup();
    })

    it('should render cards_wrap',()=>{
        const wrapper = findByTestAttr(component,'cards_wrap');
        expect(wrapper.length).toBe(1);
    })

    it('should render card_item',()=>{
        const wrapper = findByTestAttr(component,'card_item');
        expect(wrapper.length).toBe(1);
    })

    it('should render card_inner',()=>{
        const wrapper = findByTestAttr(component,'card_inner');
        expect(wrapper.length).toBe(1);
    })
    it('should render card_top',()=>{
        const wrapper = findByTestAttr(component,'card_top');
        expect(wrapper.length).toBe(1);
    })
    it('should render card_bottom',()=>{
        const wrapper = findByTestAttr(component,'card_bottom');
        expect(wrapper.length).toBe(1);
    })
    it('should render card_info',()=>{
        const wrapper = findByTestAttr(component,'card_info');
        expect(wrapper.length).toBe(1);
    })
    it('should render detail-button',()=>{
        const wrapper = findByTestAttr(component,'detail-button');
        expect(wrapper.length).toBe(1);
    })
})