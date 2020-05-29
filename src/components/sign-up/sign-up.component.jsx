import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      email : '',
      password : '' ,
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="sign-up">
        <h1>I don't have an account yet</h1>
        <span>Fill de form bellow to subscribe</span>

        <form >
          <FormInput 
            name="username"
            type="text" 
            value={this.state.username} 
            onChange={this.handleChange}
            label="username"
            required
          />
          <input 
            name="email"
            type="email" 
            value={this.state.email} 
            onChange={this.handleChange}
            label="email"
            required
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
export default SignUp