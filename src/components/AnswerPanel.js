import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox'

class AnswerPanel extends Component {

  render() {
    return (
      <div>
        {
          this.props.answerWords.map((word) => (
            <WordBox
              key={word.id}
              word={word.word}
              id={word.id}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ( SentenceReducer ) => {
  console.log(SentenceReducer.answerWords);
  return ({
    answerWords : SentenceReducer.answerWords,
    enableUpdateButton : SentenceReducer.enableUpdateButton
  });
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPanel);
