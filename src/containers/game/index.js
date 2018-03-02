import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/modal';
import GeometricAnimation from '../../components/geometricAnimation';
import TopNav from '../../components/topNav';
import './style.css';

export class Game extends Component {
	constructor(){
		super();

	}

	render(){
		const { user } = this.props;
		return (
			<div>
				<GeometricAnimation />
				<TopNav name={user.name} dispatchFunction={this.props.dispatch}/>
				<Modal>
					<div className="dashboard">
							This is where the game is going to be
					</div>
				</Modal>
			</div>
		)
	}
}

Game.propTypes = {
	dispatch: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStatetoProps = ({dashboard}) => {
	// console.log("dashboard container>>", dashboard);
	return {
		user: dashboard.user
	};
};

export default connect(mapStatetoProps)(Game);
