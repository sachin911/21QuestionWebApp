import React, {PropTypes} from 'react';
import className from 'classnames';
import './style.css';

const Button = ({label, extraClass, handleSubmit}) => {
	return (
		<input type="Submit" value={label} className={className('button-submit', extraClass)} onClick={handleSubmit}/>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	extraClass: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired
}

export default Button;
