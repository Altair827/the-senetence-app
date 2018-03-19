import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox'
import { addToAnswer } from './../actions/SentenceActions'

class WordListPanel extends Component {
  render() {
    return (
      <div>
        {
          this.props.jumbledWords.map((word) => (
            <WordBox
              key={word.id}
              word={word.word}
              id={word.id}
              action={() => (this.props.addToAnswer(word.id))}
            />
            ))
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
    addToAnswer : (id) => dispatch(addToAnswer(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WordListPanel);