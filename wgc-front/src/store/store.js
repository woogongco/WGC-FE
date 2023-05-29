import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import api from '../api';

const rootReducer = combineReducers({
	posts: postsReducer,
	[api.reducerPath]: api.reducer,
});
const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export default store;
