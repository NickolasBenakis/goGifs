import { SEARCH } from './types';

export const INITIAL_STATE = {
	term: '',
	gifs: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEARCH:
			return {
				...state,
				term: action.payload,
			};
		case GIFS:
			return {
				...state,
				gifs: action.payload,
			};
		default:
			return state;
	}
};
