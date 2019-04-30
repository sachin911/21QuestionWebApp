import { put, call, take, fork , takeLatest} from 'redux-saga/effects';
import {loadDashboardApi} from './api';
import * as types from '../../constants/actionTypes';

function* loadDashboard(action) {
   try {
      const response = yield call(loadDashboardApi, action.userId );
			if(response.error){
				yield put({type: types.LOAD_DASHBOARD_FAILED, message: response.message});
			}else{
				yield put({type: types.LOAD_DASHBOARD_SUCCESS, user: response});
			}
   } catch (e) {
      yield put({type: types.LOAD_DASHBOARD_FAILED, message: e.message});
   }
}


export default function* loginWatcher() {
	yield takeLatest(types.LOAD_DASHBOARD, loadDashboard);
}
