import {types} from '../actions/types';
import searchReducer from './searchReducer';

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
  };

describe('search reducer', ()=>{
    it('should return default state',()=>{
        const newstate = searchReducer(undefined,{});
        expect(newstate).toEqual(initialState);
    })
    it('should return new state',()=>{
        const values = {
            text: '',
            movies: ['horrora','horrorb','horrorc'],
            loading: false,
            movie: []
          };
        const newstate = searchReducer(undefined,{
            type:'FETCH_MOVIES',
            payload:values.movies
        });
        expect(newstate).toEqual(values);
    })

    it('should test loading',()=>{
        const values = {
            text: '',
            movies: [],
            loading: true,
            movie: []
          };
        const newstate = searchReducer(undefined,{
            type:'LOADING',
        });
        expect(newstate).toEqual(values);
    })
})