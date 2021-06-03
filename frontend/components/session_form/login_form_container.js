import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
