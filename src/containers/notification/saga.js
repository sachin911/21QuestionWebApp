import { put, call, take, fork , takeLatest, select, cancel, takeEvery} from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { getNotifications, loadGameData } from './api';
import { getUser } from '../../utils/selector';
import * as types from '../../constants/actionTypes';

function* fetchNotifications(action) {
   try {
			const user = yield select(getUser);

			const options = {
				 userId: user.id
			}

      const response = yield call(getNotifications, options );
			if(response.error){
				yield put({type: types.LOAD_NOTIFICATION_FAILED, message: response.message, errorCode: "LOAD_FRIENDS_FAILED"});
			}else{
				yield put({type: types.LOAD_NOTIFICATION_SUCCESS, notifications: response.results, user: user});
			}
   } catch (e) {
      yield put({type: types.LOAD_NOTIFICATION_FAILED, message: e.message});
   }
}

function* joinGame(action) {
	try {
		const user = yield select(getUser);
		const response = yield call(loadGameData, action.gameId); //create an endpoint for joining a game
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
			  query: { gameId: gameId }
			})
		}
	} catch (e) {
		yield put({type: types.GAME_REQUEST_FAILED, message: e.message});
	}
}

export default function* notificationWatcher() {
		yield takeLatest(types.LOAD_NOTIFICATION, fetchNotifications);
		yield takeLatest(types.JOIN_GAME, joinGame);
}
