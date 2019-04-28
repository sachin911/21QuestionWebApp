import { combineReducers } from 'redux';
import login from '../containers/login/reducer';
import dashboard from '../containers/dashBoard/reducer';
import onlineFriends from '../containers/onlineFriends/reducer';
import notification from '../containers/notification/reducer';
import game from '../containers/game/reducer';


const rootReducer = combineReducers({
	login,
	dashboard,
	onlineFriends,
	notification,
	game
});

export default rootReducer;
