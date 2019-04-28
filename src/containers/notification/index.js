import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../constants/actionTypes';
import {getNotification, joinGame} from './actions';
import FriendButton from '../../components/friendButton';
import './style.css';

class Notification extends Component {
	constructor(){
 	 super();
	 this.state = {
		 openTab : false
	 }

	 this.handleClicks = this.handleClicks.bind(this);
	 this.handlePlayCTA = this.handlePlayCTA.bind(this);
	 this.handleConnectCTA = this.handleConnectCTA.bind(this);
  }

	handleClicks() {
		this.setState({
			openTab : !this.state.openTab
		})

		if(!this.state.openTab){
			this.props.dispatchFunction(getNotification());
		}
	}

	handlePlayCTA(gameId){
		this.props.dispatchFunction(joinGame(gameId));
	}

	handleConnectCTA() {
		console.log("accepeted the friend request");
	}


	makeIndividualNotifications(notifications, user) {
		if(!notifications) return;
		const notificationList = notifications.map((notification) => {
			return <FriendButton notification={notification} key={notification.id} handlePlayCTA={this.handlePlayCTA} handleConnectCTA={this.handleConnectCTA}/>
		})

		return (
			<div>
				{notificationList}
			</div>
		)
	}

	render() {
		const {notifications, user} = this.props;
		return (
			<div>
				<div className="footer-left" onClick={this.handleClicks}>
					Notification
				</div>
				{this.state.openTab &&
					<div className="footer-left--openTab" >
						{notifications && this.makeIndividualNotifications(notifications, user)}
						{!notifications && <span> All caught up!</span>}
					</div>
				}
			</div>
		);
	}
}

Notification.propTypes = {
	dispatchFunction: PropTypes.func.isRequired,
	user: PropTypes.object,
	notifications: PropTypes.array
};


const mapStatetoProps = ({notification}) => {
	return {
			notifications: notification.notifications,
			user: notification.user
	};
};

export default connect(mapStatetoProps)(Notification);
