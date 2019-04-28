import { put, call, take, takeLatest} from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { getNotifications } from './api';
import { getUser } from '../../utils/selector';
import {socket} from '../../utils/socket';
import * as types from '../../constants/actionTypes';

function* loadGame(action) {
	yield put({type: types.LOAD_GAME_SUCCESS, currGame: action.game});
}

// function* gameUpdateFromSocket(action) {
// 	socket.on(action.game.id, (game) => {
// 		console.log("got the update from server>>>", game, action);
//
// 	});
// }



export default function* gameWatcher() {
	while(true){
		yield takeLatest(types.LOAD_GAME, loadGame);

		yield take([types.LOGIN_FAILED]); // why do i need this?

		// yield call(logout);
	}
}
