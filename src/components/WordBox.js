import React, { Component } from 'react';

class WordBox extends Component {
  render() {
    return (
      <div
        className="btn hoverable left blue margin-right-20"
        onClick={() => {this.props.action()}}
      >
        {this.props.word}
      </div>
    )
  }
}

export default WordBox;
