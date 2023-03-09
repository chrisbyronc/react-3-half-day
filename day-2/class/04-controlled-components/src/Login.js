import React from 'react'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    //already handled the api submission

    this.setState({
      username: '',
      password: ''
    })

    console.log(this.state.username, "      ", this.state.password)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="username" 
            placeholder="username" 
            onChange={this.handleChange}
            value={this.state.username}
            />
          <input 
            name="password" 
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login