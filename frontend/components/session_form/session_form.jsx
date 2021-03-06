import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        username: "",
        password: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  renderErrors() {
    return(
      <ul className="errors-ul">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(type) {
      return (e) => {
          this.setState({ [type]: e.target.value });
      };
  }

  handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(() =>{
        if(this.props.errors.length > 0){
          return;
        } else {
          this.props.closeModal();
        }
      });
  };

  demoUser(e) {
    e.preventDefault();
    const guest = {email: "test@user.com", username:"User", password: "hunter12"}
    this.props.processForm(guest).then(this.props.closeModal)
  };

  

  componentWillUnmount(){
    this.props.clearErrors()
  } 

  render() {
    return (
      <div className="modal open">
        <form className="modal-session-form" onSubmit={this.handleSubmit}>
          <div className="modal-header">
            <h2>{this.props.formtype}</h2>

            <div className="modal-close" onClick={this.props.closeModal}> 
              <i className="fas fa-times" onClick={this.props.closeModal}></i>
            </div>

            {this.props.otherForm}
          </div>

          <div className="input-fields">
            <input className="session-input"
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            { this.props.formtype === "Register" ? 
              <input className="session-input"
              type="username"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            : <div></div>}
            <input className="session-input"
              type="password" 
              value={this.state.password} 
              onChange={this.update('password')} 
              placeholder="Password"
            />
            {this.renderErrors()}
            <input className="session-submit" 
            type="submit" 
            value={this.props.buttontype}
            />
            {this.props.formtype === "Sign in to continue" ? 
            <input className="demo-user"
              type="submit" 
              onClick={this.demoUser}
              value="Demo User"
              /> 
            : ""}
          </div>
        </form>
     </div>
    );
  }
}
export default SessionForm;