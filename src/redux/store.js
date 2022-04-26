import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './profile';

const reducer = {
    profile: profileReducer,
};

const store = configureStore({
    reducer
});

export default store;