import { put, call, take, fork , takeLatest, select, cancel, takeEvery} from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import {socket} from '../../utils/socket';
import { friendList, gameRequest } from '../../Api/api';
import * as types from '../../constants/actionTypes';

const getUser = (state) => state.dashboard.user;

function* fetchFriends(action) {
   try {
			const user = yield select(getUser);

			const options = {
				 userId: user.id
			}

      const response = yield call(friendList, options );
			if(response.error){
				console.log("error from the response>>>", response);
				yield put({type: types.LOAD_FRIENDS_FAILED, message: response.message, errorCode: "LOAD_FRIENDS_FAILED"});
			}else{
				console.log("success from the response>>>", response);
				yield put({type: types.LOAD_FRIENDS_SUCCESS, friends: response.results, user: user});
			}
   } catch (e) {
		 	console.log("something went wrong>>>");
      yield put({type: types.LOAD_FRIENDS_FAILED, message: e.message});
   }
}

function* gameRequestApi(action){
	try {
		console.log("saga reached", action);

		const option = {
			userId: action.userId,
			friendId: action.friendId
		}

		const response = yield call(gameRequest, option);

		if(response.error){
			console.log("error from the gameRequest response>>>", response);
			yield put({type: types.GAME_REQUEST_FAILED, message: response.message, errorCode: "GAME_REQUEST_FAILED"});
		}else{
			console.log("success from the gameRequest response>>>", response);
			yield put({type: types.GAME_REQUEST_SUCCESS});
			browserHistory.push('/game');
		}
	} catch (e) {
		console.log("something went gameRequest wrong>>>", e);
		yield put({type: types.GAME_REQUEST_FAILED, message: e.message});
	}
}




export default function* onlineFriendsWatcher() {
	while(true){
		const watcher = yield takeLatest(types.LOAD_FRIENDS, fetchFriends);
		yield takeLatest(types.GAME_REQUEST, gameRequestApi);

		const action = yield take([types.LOGIN_FAILED]); // why do i need this?

		// yield call(logout);
	}
}
