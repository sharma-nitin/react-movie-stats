import moxios from 'moxios';
import {testStore} from './../utils';
import {fetchMovies,fetchMovie} from './searchActions';

describe('fetchMovies',()=>{
    beforeEach(()=>{
        moxios.install();
    })
    
    afterEach(()=>{
        moxios.uninstall();
    })
    
    test('fetchMovies and store is updated correctly',()=>{
        const expectedState ={
            text: 'horror',
            movies: ['horrora','horrorb'],
            loading: false,
            movie: []
          };
        const store = testStore();

         moxios.wait(()=>{
             const request = moxios.requests.mostRecent();
             request.respondWith({
                 status:200,
                 response:expectedState.movies
             })
         });
         return store.dispatch(fetchMovies())
         .then(() => {
             const newState = store.getState();
             expect(newState.movies).toBe(expectedState.movies);
         })    });

         test('fetchMovie and store is updated correctly',()=>{
            const expectedState ={
                text: 'horror',
                movies: ['horrora','horrorb'],
                loading: false,
                movie: []
              };
            const store = testStore();
    
             moxios.wait(()=>{
                 const request = moxios.requests.mostRecent();
                 request.respondWith({
                     status:200,
                     response:expectedState.movie
                 })
             });
             return store.dispatch(fetchMovies())
             .then(() => {
                 const newState = store.getState();
                 expect(newState.movie).toStrictEqual(expectedState.movie);
             })    })
});