import { put, call, take, fork , takeLatest, select, cancel, takeEvery} from 'redux-saga/effects';
import { browserHistory } from 'react-router'
import { friendList, gameRequest } from '../../Api/api';
import * as types from '../../constants/actionTypes';

const getUser = (state) => state.dashboard.user;

function* fetchNotifications(action) {
   try {
			const user = yield select(getUser);

			const options = {
				 userId: user.id
			}

      const response = yield call(friendList, options );
			if(response.error){
				console.log("error from the response>>>", response);
				yield put({type: types.LOAD_NOTIFICATION_FAILED, message: response.message, errorCode: "LOAD_FRIENDS_FAILED"});
			}else{
				console.log("success from the response>>>", response);
				yield put({type: types.LOAD_NOTIFICATION_SUCCESS, friends: response.results, user: user});
			}
   } catch (e) {
		 	console.log("something went wrong>>>");
      yield put({type: types.LOAD_NOTIFICATION_FAILED, message: e.message});
   }
}


export default function* notificationWatcher() {
	while(true){
		const watcher = yield takeLatest(types.LOAD_NOTIFICATION, fetchNotifications);

		const action = yield take([types.LOGIN_FAILED]); // why do i need this?

		// yield call(logout);
	}
}
