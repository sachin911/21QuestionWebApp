import React, { PropTypes } from 'react';
import './style.css';

const Modal = ({ children }) => (
	<div className="modal--container">
		{children}
	</div>
)

Modal.propTypes = {
	children: PropTypes.any.isRequired
};

export default Modal;
