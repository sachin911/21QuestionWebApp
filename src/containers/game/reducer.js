import * as types from '../../constants/actionTypes';

const initialState = {
	user: {
		win: 0,
		loss: 0,
		email: "initial@state.com",
		name: "Game Name",
		id: 2
	},
	selectedGame: {
		"id": 37,
		"friendshipId": 1,
		"status": "PENDING",
		"questionPerson": 2,
		"answerPerson": 1,
		"topic": null,
		"section": null,
		"remainingQuestions": 21,
		"winner": null,
		"loser": null,
		"createdAt": "2018-03-12T00:34:25.000Z",
		"updatedAt": null
	},
	"questionPersonInfo": {
    "name": "Arshitha",
    "email": "arshitha@test.com",
    "status": "ACTIVE",
    "id": 2,
    "win": 10,
    "loss": 20,
    "createdAt": "2018-01-20T03:09:33.000Z",
    "updatedAt": "2018-03-18T12:08:22.000Z",
    "loggedInStatus": "ONLINE"
	},
	"answerPersonInfo": {
    "name": "Sachin",
    "email": "sachin@test.com",
    "status": "ACTIVE",
    "id": 1,
    "win": 5,
    "loss": 10,
    "createdAt": "2018-01-20T03:09:10.000Z",
    "updatedAt": "2018-03-18T12:08:22.000Z",
    "loggedInStatus": "ONLINE"
	}
};


export default function (state=initialState, action={}) {
  switch (action.type) {
    case types.GAME_REQUEST:
      return { ...state, isFetching: true, errors: "" };
    case types.GAME_REQUEST_FAILED:
      return {
          ...state,
          isFetching: false,
          errors: action.message,
          pause: true,
					errorCode: action.type
      };
    case types.GAME_REQUEST_SUCCESS:
			return {
				...state,
				user: action.user,
				selectedGame: action.selectedGame,
				questionPersonInfo: action.questionPersonInfo,
				answerPersonInfo: action.answerPersonInfo
			};
		case types.LOAD_GAME_SUCCESS:
		return {
			...state,
			selectedGame: action.currGame
		}
    default: return {...state};
  }
}
