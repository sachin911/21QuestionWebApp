import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {Collapse} from 'react-collapse';
import './style.css';

class collapsibleRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'showContent': false
		}
		this.handleClick = this.handleClick.bind(this);
  }

	handleClick(){
		this.setState({
			'showContent': !this.state.showContent
		});
	}

	render() {
		const { children, name } = this.props;

		var contentClass = {
			content: 'contentContainer'
		}

		return(
			<div>
				<div className="rowHeader">
					<div className="rowHeader__button" onClick={this.handleClick}> {name}</div>
				</div>
				<Collapse theme={contentClass} isOpened={this.state.showContent}>
						{children}
				</Collapse>
			</div>
		);
	}
}

collapsibleRow.propTypes = {
	children: PropTypes.object.isRequired,
	name: PropTypes.string
};

export default collapsibleRow;
