import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	state: 'true',
};

export const stateHeaderReadSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		falseState: state => {
			state.state = 'false';
		},
	},
});

export const { falseState } = stateHeaderReadSlice.actions;
export default stateHeaderReadSlice.reducer;
