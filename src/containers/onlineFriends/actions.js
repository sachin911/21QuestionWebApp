import * as types from '../../constants/actionTypes';

export const friendAction = () => {
	return {
	  type: types.LOAD_FRIENDS
	}
};

export const gameRequestAction = (userId, friendId) => {
	return {
	  type: types.GAME_REQUEST,
		userId: userId,
		friendId: friendId
	}
};
