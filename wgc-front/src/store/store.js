import { configureStore } from '@reduxjs/toolkit';
import stateHeaderReadSlice from './module/stateHeaderReadSlice';

const store = configureStore({
	reducer: {
		header: stateHeaderReadSlice,
	},
});

export default store;
