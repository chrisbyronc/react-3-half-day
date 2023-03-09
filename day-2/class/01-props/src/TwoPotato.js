import React from 'react';

class TwoPotato extends React.Component {
  render() {
      return <h1>{this.props.name} loves {this.props.type} potatoes!</h1>;
  }
}

export default TwoPotato
