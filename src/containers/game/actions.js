import * as types from '../../constants/actionTypes';

export const joinGameAction = (gameObj, user) => {
	return {
		type: types.LOAD_GAME,
		game: gameObj,
		user: user
	}
}
