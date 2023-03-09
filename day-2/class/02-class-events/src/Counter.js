import React from 'react'

class Counter extends React.Component {

 state = {
  count: 0
 }

  incrementCount = () => {
      this.setState({ count: this.state.count + 1 })
  }

  incrementHandler = (event) => {
    this.setState((state) => ({
        [event.target.name]: state[event.target.name] + 1
    }))
  }

  // simple render method just displaying the count
  render(){
      return (
          <div>
              {this.state.count}
              <button name="count" onClick={this.incrementHandler} >increment (+) </button>
          </div>
      )
  }

}

export default Counter