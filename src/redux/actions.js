import { appActionTypes } from './types';

export const getGifs = (gifs) => ({
	type: appActionTypes.GET_GIFS,
	payload: gifs,
});

export const changeSearchTerm = (term) => ({
	type: appActionTypes.CHANGE_SEARCH_TERM,
	payload: term,
});
