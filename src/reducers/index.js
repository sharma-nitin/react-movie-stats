import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    movies: searchReducer
    // add here addition reducer
});
