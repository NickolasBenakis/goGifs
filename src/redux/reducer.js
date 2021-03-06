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
				term: action.payload !== state.term ? action.payload : state.term,
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
			};
		case appActionTypes.GIFS_FETCH_REQUESTED:
			return {
				...state,
				loader: true,
				term: action.payload,
			};
		case appActionTypes.CLEAR:
			return {
				...state,
				gifs: state.gifs.length ? [] : state.gifs,
				term: '',
			};
		default:
			return state;
	}
};
