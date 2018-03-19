import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox'
import { addToAnswer } from './../actions/SentenceActions'

class WordListPanel extends Component {
  render() {
    return (
      <div className="row">

        <div className="col s12 m12 z-depth-1 blue lighten-2 padding-bottom-20">
          <h5 className="padding-bottom-20">Word List :</h5>
          {this.props.jumbledWords.map((word) => (
            <WordBox
              key={word.id}
              word={word.word}
              id={word.id}
              style={"grey lighten-4 blue-text"}
              action={() => (this.props.addToAnswer(word.id))}
            />
          ))}
        </div>

      </div>
    )
  }
}

const mapStateToProps = ( SentenceReducer ) => {
  return {
    jumbledWords : SentenceReducer.JumbledWords,
    wordsRemaining : SentenceReducer.wordsRemaining
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToAnswer : (id) => dispatch(addToAnswer(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WordListPanel);
