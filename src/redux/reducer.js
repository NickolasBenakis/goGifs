import { appActionTypes } from './types';

export const INITIAL_STATE = {
	term: '',
	gifs: [],
	loader: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case appActionTypes.CHANGE_SEARCH_TERM:
			return {
				...state,
				term: action.payload,
			};
		case appActionTypes.GIFS_FETCH_SUCCEEDED:
			return {
				...state,
				loader: false,
				gifs: action.payload,
			};
		case appActionTypes.GIFS_FETCH_FAILED:
			return {
				...state,
				loader: false,
				gifs: [],
			};
		case appActionTypes.GIFS_FETCH_REQUESTED:
			return {
				...state,
				loader: true,
				term: action.payload,
			};
		default:
			return state;
	}
};
