import React, { Component } from 'react';

class WordBox extends Component {
  render() {
    return (
      <div
        className={"btn hoverable left margin-right-20 margin-bottom-20 " + this.props.addStyle}
        onClick={() => {this.props.action()}}
      >
        {this.props.word}
      </div>
    )
  }
}

export default WordBox;
