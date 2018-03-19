import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordListPanel extends Component {
  render() {
    return (
      <div>
        {
          this.props.jumbledWords.map((word) => (<p key={word}>{word}</p>))
        }
      </div>
    )
  }
}

const mapStateToProps = ( SentenceReducer ) => {
  return {
    jumbledWords : SentenceReducer.JumbledWords
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WordListPanel);
