import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/searchReducer';
import thunk from 'redux-thunk';

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};