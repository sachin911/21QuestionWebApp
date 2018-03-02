import React, { PropTypes, Component } from 'react';
import CollapsibleRow from '../collapsibleRow';
import * as types from '../../constants/actionTypes';
import './style.css';

class TopNav extends Component {
	constructor(){
 	 super();
	 this.handleLogout = this.handleLogout.bind(this);
  }

	handleLogout() {
		this.props.dispatchFunction({type: types.LOGOUT});
	}

	render() {
		return (
			<div>
				<img src="../../logo.png" alt="21 Questions" className="topNav-logo"/>
				<div className="topNav">
					<div className="topNav-menu">
						<CollapsibleRow name={this.props.name}>
							<div onClick={this.handleLogout}> Logout</div>
						</CollapsibleRow>
					</div>
				</div>
			</div>
		);
	}
}

TopNav.propTypes = {
	name: PropTypes.string,
	dispatchFunction: PropTypes.func.isRequired
};

export default TopNav;
