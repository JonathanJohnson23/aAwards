import React from 'react';
import {closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import SideNavBar from "../navbar/side_navbar"

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  let background = "modal-background";
  let child = "modal-child"
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'navbar':
      component = <SideNavBar />;
      background = "side-nav-background"
      child = "side-nav-child"
      break;
    default:
      return null;
  }

  return (
    <div className={background} onClick={closeModal}>
      <div className={child} onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);