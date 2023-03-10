import React from 'react'

class Example extends React.Component {

  state = {
    error: {
      code: 4389,
      text: "Uh Oh spaghettios"
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <h2>Error {this.state.error.text} </h2>}
      </div>
    )
  }
}

export default Example