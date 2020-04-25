import { appActionTypes } from './types';

export const INITIAL_STATE = {
	term: '',
	gifs: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case appActionTypes.CHANGE_SEARCH_TERM:
			return {
				...state,
				term: action.payload,
			};
		case appActionTypes.GET_GIFS:
			return {
				...state,
				gifs: action.payload,
			};
		default:
			return state;
	}
};
