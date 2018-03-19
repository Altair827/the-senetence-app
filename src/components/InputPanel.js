import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSentence, jumbleWords } from './../actions/SentenceActions'

class InputPanel extends Component {

  jumbleWords = () => {

    let id = 0;

    let wordArray = this.props.sentence.replace(/\s\s+/g, ' ').split(" ")
                    .map((word) => ({
                        id : id++,
                        word
                      }));

    let currentIndex = wordArray.length, tempWord, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempWord = wordArray[currentIndex];
      wordArray[currentIndex] = wordArray[randomIndex];
      wordArray[randomIndex] = tempWord;
    }

    this.props.jumbleWords(wordArray);
  }


  render() {
    return (
      <div id="inputBlock" className="row">

        <div className="input-field col s12 m6">
          <input
            placeholder="Your Sentence Here"
            id="sentence"
            type="text"
            value={this.props.Sentence}
            onChange={(event) => {this.props.updateSentence(event.target.value)}}
           />
          <label htmlFor="sentence">Sentence</label>
        </div>

        <div
          id="updateButton"
          disabled={!this.props.enableUpdateButton}
          className="waves-effect waves-light btn"
          onClick={() => {this.jumbleWords()}}
        >
          REFRESH
        </div>

      </div>
    )
  }
}

const mapStateToProps = (SentenceReducer) => {
  return {
    enableUpdateButton : SentenceReducer.enableUpdateButton,
    sentence : SentenceReducer.Sentence
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSentence : (sentence) => dispatch(updateSentence(sentence)),
    jumbleWords : (wordArray) => dispatch(jumbleWords(wordArray))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);
