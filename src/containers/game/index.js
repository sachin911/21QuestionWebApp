import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/modal';
import GeometricAnimation from '../../components/geometricAnimation';
import TopNav from '../../components/topNav';
import {joinGameAction} from './actions';
import {socket} from '../../utils/socket';
import './style.css';

export class Game extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		const {currGame, user, dispatch} = this.props;
		socket.emit("joinGame", currGame);
		socket.on(currGame.id, (game) => {
			console.log("got the update from server>>>", game);
			dispatch(joinGameAction(game, user));
		});
	}


	makePendingStateGame(){
		const {currGame, user, dispatch} = this.props;
		return (
			<div className="dashboard">
					The game is not started yet!!
			</div>
		);
	}

	makeGame() {
		const {user, currGame, questionPersonInfo, answerPersonInfo} = this.props;

		switch (currGame.status) {
			case 'PENDING':
				return this.makePendingStateGame();
				break;
			case 'IN_PROGRESS':
				console.log("in progress game!!");
				break;
			case 'PAUSED':
				console.log("in progress game!!");
				break;
			case 'FINISHED':
				console.log("game is over!!");
				break;
			default:
				return (
					<div className="dashboard">
							Looks like there is currently no game to play!!!
					</div>
				)
		}
	}

	render(){
		const { user } = this.props;
		return (
			<div>
				<GeometricAnimation />
				<TopNav name={user.name} dispatchFunction={this.props.dispatch}/>
				<Modal>
					{this.makeGame()}
				</Modal>
			</div>
		)
	}
}

Game.propTypes = {
	dispatch: PropTypes.func.isRequired,
	user: PropTypes.object,
	currGame: PropTypes.object
}

const mapStatetoProps = ({game}) => {
	return {
		user: game.user,
		currGame: game.selectedGame,
		questionPersonInfo: game.questionPersonInfo,
		answerPersonInfo: game.answerPersonInfo
	};
};

export default connect(mapStatetoProps)(Game);
