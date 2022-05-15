import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './profile';
import exploreReducer from './explore';

const reducer = {
    profile: profileReducer,
    explore: exploreReducer,
};

const store = configureStore({
    reducer
});

export default store;