import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../constants/actionTypes';
import {friendAction, gameRequestAction} from './actions';
import FriendButton from '../../components/friendButton'
import './style.css';

class OnlineFriends extends Component {
	constructor(){
 	 super();
	 this.state = {
		 openTab : false
	 }

	 this.handleClick = this.handleClick.bind(this);
	 this.handlePlayCTA = this.handlePlayCTA.bind(this);
  }

	handleClick() {
		this.setState({
			openTab : !this.state.openTab
		})

		if(!this.state.openTab){
			this.props.dispatchFunction(friendAction());
		}
	}

	handlePlayCTA(friendId) {
		const { user } = this.props;
		console.log("starting the game with>>", friendId);
		this.props.dispatchFunction(gameRequestAction(user.id, friendId));
	}

	makeFriends(friends, user) {
		if(!friends) return;
		const friendList = friends.map((friend) => {
			if(user.id == friend.id) return;
			return <FriendButton friend={friend} key={friend.id} handlePlayCTA={this.handlePlayCTA}/>
		})

		return (
			<div>
				{friendList}
			</div>
		)
	}

	render() {
		const { friends, user } = this.props;
		return (
			<div>
				<div className="footer-right" onClick={this.handleClick}>
					Online friends
				</div>
				{this.state.openTab &&
					<div className="footer-right--openTab" >
						{friends && this.makeFriends(friends, user)}
						{!friends && <span> No online friends</span>}
					</div>
				}
			</div>
		);
	}
}

OnlineFriends.propTypes = {
	friends: PropTypes.array,
	dispatchFunction: PropTypes.func.isRequired,
	user: PropTypes.object
};


const mapStatetoProps = ({onlineFriends}) => {
	return {
		friends: onlineFriends.friends,
		user: onlineFriends.user
	};
};

export default connect(mapStatetoProps)(OnlineFriends);
