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
		const {friend, handlePlayCTA} = this.props;
		console.log("play button pressed", friend);
		handlePlayCTA(friend.id);
	}

	handleConnect() {
		const {friend, handleConnectCTA} = this.props;
		console.log("connect button is pressed", friend);
		// handleConnectCTA(friend.id);
	}

	render() {
		const {friend, handlePlayCTA} = this.props;
		return (
			<div className="friendButton">
				<CollapsibleRow name={friend.name}>
					<div>
						{friend.friendStatus === 'ACTIVE' && <div onClick={this.handlePlay}> Play </div> }
						{friend.friendStatus !== 'ACTIVE' && <div onClick={this.handleConnect}> Connect </div> }
					</div>
				</CollapsibleRow>
			</div>
		);
	}

}

FriendButton.propTypes = {
  friend: PropTypes.object.isRequired,
	handlePlayCTA: PropTypes.func,
	handleConnectCTA: PropTypes.func
};

export default FriendButton;
