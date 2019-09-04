import React from "react";
import {connect} from "react-redux"
import NavBar from './navbar'
import {signup, login, logout} from "../../actions/session_actions"

const mapStateToProps = (state) =>({
  user: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) =>({ 
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)