import React, { PropTypes, Component } from 'react';
import CollapsibleRow from '../collapsibleRow';
import './style.css';

class FriendButton extends Component {

	constructor(props){
		super(props);
		this.handlePlay = this.handlePlay.bind(this);
		this.handleConnect = this.handleConnect.bind(this);
	}

	handlePlay(){
		const {friend, handlePlayCTA, notification} = this.props;
		if(friend){
			// while creating the game request. the friend id is used to send a request to the player
			handlePlayCTA(friend.id);
		}else{
			//while accepting the game request, the game id is used to redirect the user to the appropriate game
			handlePlayCTA(notification.gameId);
		}
	}

	handleConnect() {
		const {friend, handleConnectCTA, notification} = this.props;
		console.log("connect button is pressed", friend);
		// handleConnectCTA(friend.id);
	}

	render() {
		const {friend, handlePlayCTA, notification} = this.props;

		return (
			<div className="friendButton">
				<CollapsibleRow name={ friend ? friend.name : notification.requesterName }>
					<div>
						{( friend ? friend.friendStatus === 'ACTIVE' : notification.gameId ) && <div onClick={this.handlePlay}> Play </div> }
						{( friend ? friend.friendStatus !== 'ACTIVE' : notification.friendshipId )  && <div onClick={this.handleConnect}> Connect </div> }
					</div>
				</CollapsibleRow>
			</div>
		);
	}

}

FriendButton.propTypes = {
  friend: PropTypes.object,
	notification: PropTypes.object,
	handlePlayCTA: PropTypes.func,
	handleConnectCTA: PropTypes.func
};

export default FriendButton;
