import { fork, all } from 'redux-saga/effects';
import LoginSaga from '../containers/login/saga'
import onlineFriends from '../containers/onlineFriends/saga'
import notification from '../containers/notification/saga'

export default function* startForman() {
	yield all([
    fork(LoginSaga),
    fork(onlineFriends),
		fork(notification)
  ]);
}
