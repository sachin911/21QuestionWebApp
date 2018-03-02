import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/textInput';
import Modal from '../../components/modal';
import GeometricAnimation from '../../components/geometricAnimation';
import Button from '../../components/button';
import {loginAction} from './actions';
import {globalErrors} from '../../common/errors';
import './style.css';

export class Login extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}


	handleSubmit() {
		this.props.dispatch(loginAction({email:this.state.email, password: this.state.password}));
	}

	handleChange(e) {
		this.setState({
        [e.target.name] : e.target.value
    });
	}

	render() {
		return (
			<div>
				<GeometricAnimation />
				<Modal>
					<span className="app-name">21 Questions</span>
					<TextInput label="Email" onChangeWrapper={this.handleChange} name="email" type="email" />
					<TextInput label="Password" onChangeWrapper={this.handleChange} name="password" type="password"/>
					<Button label="Login" handleSubmit={this.handleSubmit}/>
					{/* <Button label="Register" extraClass="float-right" /> */}
					{
						this.props.errorCode && <span className="login-error">{globalErrors[this.props.errorCode]}</span>
					}
				</Modal>
			</div>
		)
	}

}

Login.propTypes = {
  isFetching: PropTypes.bool,
  errors: PropTypes.string,
  loginRequest: PropTypes.func,
  inputChange: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
	dispatch: PropTypes.func.isRequired,
	errorCode: PropTypes.string
};

const mapStateToProps = ({ login }) => {
	return {
  errors: login.errors,
  isFetching: login.isFetching,
  email: login.email,
  password: login.password,
  pause: login.pause,
	errorCode: login.errorCode
}};

export default connect(mapStateToProps)(Login);
