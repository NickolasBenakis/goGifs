import { call, put, takeLatest } from 'redux-saga/effects';
import getGifs from '../api/getGifs';
import { appActionTypes } from './types';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchGifs(action) {
	try {
		const gifs = yield call(getGifs, action.payload);
		yield put({
			type: appActionTypes.GIFS_FETCH_SUCCEEDED,
			payload: gifs.data,
		});
	} catch (e) {
		yield put({ type: appActionTypes.GIFS_FETCH_FAILED, payload: e.message });
	}
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
// 	yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
	yield takeLatest(appActionTypes.GIFS_FETCH_REQUESTED, fetchGifs);
}

export default mySaga;
