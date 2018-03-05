import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/modal';
import GeometricAnimation from '../../components/geometricAnimation';
import TopNav from '../../components/topNav';
import OnlineFriends from '../onlineFriends';
import Notification from '../notification';
import './style.css';

export class DashBoard extends Component {
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
						<div className="dashboard-wins dashboard-tally">
							<span className="dashboard-tallyLabel">Total Wins</span>
							<span className="dashboard-tallyCount">{user.win}</span>
						</div>
						<div className="dashboard-seperator" />
						<div className="dashboard-loss dashboard-tally">
							<span className="dashboard-tallyLabel">Total Loss</span>
							<span className="dashboard-tallyCount">{user.loss}</span>
						</div>
				</Modal>
				<OnlineFriends dispatchFunction={this.props.dispatch}/>
				<Notification dispatchFunction={this.props.dispatch}/>
			</div>
		)
	}
}

DashBoard.propTypes = {
	dispatch: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
}

const mapStatetoProps = ({dashboard}) => {
	// console.log("dashboard container>>", dashboard);
	return {
		user: dashboard.user
	};
};

export default connect(mapStatetoProps)(DashBoard);
