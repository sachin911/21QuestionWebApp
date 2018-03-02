import React, { PropTypes } from 'react';
import './style.css';

const TextInput = ({ label, onChangeWrapper, name , type="text"}) => (
	<div className="TextInput--holder">
		<input className="TextInput" type={type} placeholder={label} onChange={onChangeWrapper} name={name}/>
	</div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
	onChangeWrapper: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string
};

export default TextInput;
