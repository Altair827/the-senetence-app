import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox'
import { removeFromAnswer } from './../actions/SentenceActions'

class AnswerPanel extends Component {

  render() {
    return (
      <div className="row z-depth-2 grey darken-3 white-text padding-bottom-20">

        <div className="col s12 m12">
          <h5 className="padding-bottom-20">Answer Block :</h5>
          {
            this.props.answerWords.map((word) => (
              <WordBox
                key={word.id}
                word={word.word}
                id={word.id}
                addStyle={"grey lighten-4 black-text"}
                action={() => (this.props.removeFromAnswer(word.id))}
              />
            ))
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = ( SentenceReducer ) => {
  return ({
    answerWords : SentenceReducer.answerWords,
    wordsRemaining : SentenceReducer.wordsRemaining
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromAnswer : (id) => dispatch(removeFromAnswer(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPanel);
