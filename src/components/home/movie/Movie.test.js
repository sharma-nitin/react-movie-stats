import Movie from './Movie';
import { shallow } from 'enzyme';
import {testStore } from './../../../utils';
import React from 'react';


const findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Movie store={store} />).childAt(0).dive();
    return wrapper;
};

describe('Movie Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
           movies:{
               loading: false,
               movie:{"Title":"American Horror Story","Year":"2011–","Rated":"TV-MA","Released":"05 Oct 2011","Runtime":"60 min","Genre":"Drama, Horror, Thriller","Director":"N/A","Writer":"Brad Falchuk, Ryan Murphy","Actors":"Evan Peters, Sarah Paulson, Denis O'Hare, Kathy Bates","Plot":"An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, and a slasher summer camp.","Language":"English","Country":"USA","Awards":"Won 2 Golden Globes. Another 122 wins & 374 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BODZlYzc2ODYtYmQyZS00ZTM4LTk4ZDQtMTMyZDdhMDgzZTU0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"}],"Metascore":"N/A","imdbRating":"8.0","imdbVotes":"266,567","imdbID":"tt1844624","Type":"series","totalSeasons":"10","Response":"True"}
        } 
        }
        wrapper = setUp(initialState);
    });

    it('Should render container without errors', () => {
        const component = findByTestAttr(wrapper, 'container');
        expect(component.length).toBe(1);
    });

    it('Should render detail-wrapper without errors', () => {
        const component = findByTestAttr(wrapper, 'detail-wrapper');
        expect(component.length).toBe(1);
    });

    it('Should render movie-title without errors', () => {
        const component = findByTestAttr(wrapper, 'movie-title');
        expect(component.length).toBe(1);
    });

    it('Should render Genre without errors', () => {
        const component = findByTestAttr(wrapper, 'Genre');
        expect(component.length).toBe(1);
    });

    it('Should render Released without errors', () => {
        const component = findByTestAttr(wrapper, 'Released');
        expect(component.length).toBe(1);
    });

    it('Should render Rated without errors', () => {
        const component = findByTestAttr(wrapper, 'Rated');
        expect(component.length).toBe(1);
    });

    it('Should render Rating without errors', () => {
        const component = findByTestAttr(wrapper, 'Rating');
        expect(component.length).toBe(1);
    });

    it('Should render Director without errors', () => {
        const component = findByTestAttr(wrapper, 'Director');
        expect(component.length).toBe(1);
    });

    it('Should render Writer without errors', () => {
        const component = findByTestAttr(wrapper, 'Writer');
        expect(component.length).toBe(1);
    });

    it('Should render Actors without errors', () => {
        const component = findByTestAttr(wrapper, 'Actors');
        expect(component.length).toBe(1);
    });
});