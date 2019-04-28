import * as types from '../../constants/actionTypes';

export const getNotification = (userId) => {
	return {
		type: types.LOAD_NOTIFICATION,
		userId: userId
	}
}

export const joinGame = (gameId, userId) => {
	return {
		type: types.JOIN_GAME,
		gameId: gameId,
		userId: userId
	}
}
