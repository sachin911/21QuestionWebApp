import { put, call, take, fork , takeLatest, select, cancel, takeEvery} from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { friendList, gameRequest } from './api';
import { getUser } from '../../utils/selector';
import * as types from '../../constants/actionTypes';

function* fetchFriends(action) {
   try {
			const user = yield select(getUser);

			const options = {
				 userId: user.id
			}

      const response = yield call(friendList, options );
			if(response.error){
				yield put({type: types.LOAD_FRIENDS_FAILED, message: response.message, errorCode: "LOAD_FRIENDS_FAILED"});
			}else{
				yield put({type: types.LOAD_FRIENDS_SUCCESS, friends: response.results, user: user});
			}
   } catch (e) {
      yield put({type: types.LOAD_FRIENDS_FAILED, message: e.message});
   }
}

function* gameRequestApi(action){
	try {
		const user = yield select(getUser);
		const option = {
			userId: action.userId,
			friendId: action.friendId
		}

		const response = yield call(gameRequest, option);

		if(response.error){
			yield put({type: types.GAME_REQUEST_FAILED, message: response.message, errorCode: "GAME_REQUEST_FAILED"});
		}else{
			const gameId = response.game.id;
			yield put(
				{
					type: types.GAME_REQUEST_SUCCESS,
					selectedGame: {
						...response.game
					},
					notfication: {
						...response.notfication
					},
					user: user,
					questionPersonInfo: {
						...response.questionPersonInfo
					},
					answerPersonInfo: {
						...response.answerPersonInfo
					}
				}
			);

			browserHistory.push({
			  pathname: '/game',
			  query: { gameId: response.game.id }
			})
		}
	} catch (e) {
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
