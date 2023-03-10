import React from 'react'

class Example extends React.Component {
  state = {
    mappedArray: [],
    tasks: ['learn react', 'render components', 'walk the dog', 'drink the coffee', 'have a nap']
  }

  // componentDidMount() {
  //   const numArr = [4, 8, 15, 16, 23, 42]

  //   this.setState({
  //     mappedArray: numArr.map((num) => {
  //       return num + 1
  //     })
  //   })

  // }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((task, index) => {
            return (
              <li key={index}>{task}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Example