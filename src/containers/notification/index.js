import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../constants/actionTypes';
import {getNotification} from './actions';
import './style.css';

class Notification extends Component {
	constructor(){
 	 super();
	 this.state = {
		 openTab : false
	 }

	 this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		this.setState({
			openTab : !this.state.openTab
		})

		if(!this.state.openTab){
			this.props.dispatchFunction(getNotification());
		}
	}

	render() {

		return (
			<div>
				<div className="footer-left" onClick={this.handleClick}>
					Notification
				</div>
				{this.state.openTab &&
					<div className="footer-left--openTab" >
						{<span>All caught up!</span>}
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
	console.log("notification >>>", notification);
	return {
	};
};

export default connect(mapStatetoProps)(Notification);
