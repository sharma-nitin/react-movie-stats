import MoviesContainer from './MoviesContainer';
import { shallow } from 'enzyme';
import {testStore } from './../../../utils';
import React from 'react';


const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<MoviesContainer store={store} />).childAt(0).dive();
    return wrapper;
};

describe('Movie Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
               movies:{
                   movies:{ Response: "True",
                   Search:[{Poster: "https://m.media-amazon.com/images/M/MV5BMTM0NjczMzUyM15BMl5BanBnXkFtZTcwMDEwMjQzMQ@@._V1_SX300.jpg",
                   Title: "Zoom",
                   Type: "movie",
                   Year: "2006",
                   imdbID: "tt0383060"}],
                   totalResults: 1}
               }
               
        }
        wrapper = setUp(initialState);
    });

    it('Should render row without errors', () => {
        const component = findByTestAttr(wrapper, 'row');
        expect(component.length).toBe(1);
    });

    it('Should render movie-wrapper without errors', () => {
        const component = findByTestAttr(wrapper, 'movie-wrapper');
        expect(component.length).toBe(1);
    });

    it('Should render movie-container without errors', () => {
        const component = findByTestAttr(wrapper, 'movie-container');
        expect(component.length).toBe(1);
    });
});