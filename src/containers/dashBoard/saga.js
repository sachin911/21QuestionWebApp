// import { put, call, take, fork , takeLatest} from 'redux-saga/effects';
// import { browserHistory } from 'react-router';
// import {userAuth} from './api';
// import clientStorage from '../../utils/clientStorage';
// import * as types from '../../constants/actionTypes';
//
// function* fetchUser(action) {
//    try {
// 			const options = {
// 				 email: action.email,
// 				 password: action.password
// 			}
//       const response = yield call(userAuth, options );
// 			if(response.error){
// 				yield put({type: types.LOGIN_FAILED, message: response.message, errorCode: "LOGIN_FAILED"});
// 			}else{
// 				clientStorage.inject("userId", response.id);
// 				yield put({type: types.LOGIN_SUCCESS, user: response});
// 				browserHistory.push('/dashboard');
// 			}
//    } catch (e) {
//       yield put({type: types.LOGIN_FAILED, message: e.message});
//    }
// }
//
//
// export default function* loginWatcher() {
// 	while(true){
// 		yield takeLatest(types.LOGIN_REQUEST, fetchUser);
//
// 		yield takeLatest(types.LOGOUT, logout);
//
// 		const action = yield take([types.LOGIN_FAILED]);
//
// 		yield call(logout);
// 	}
// }
