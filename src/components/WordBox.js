import React, { Component } from 'react';

class WordBox extends Component {
  render() {
    return (
      <div
        className={"btn hoverable left margin-right-20 " + this.props.style}
        onClick={() => {this.props.action()}}
      >
        {this.props.word}
      </div>
    )
  }
}

export default WordBox;
