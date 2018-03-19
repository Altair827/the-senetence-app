import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSentence, jumbleWords } from './../actions/SentenceActions'

class InputPanel extends Component {
  render() {
    return (
      <div id="inputBlock" className="row">

        <div className="input-field col s12 m6">
          <input
            placeholder="Your Sentence Here"
            id="sentence"
            type="text"
            onChange={(event) => {this.props.updateSentence(event.target.value)}}
           />
          <label htmlFor="sentence">Sentence</label>
        </div>

        <div
          id="updateButton"
          disabled={!this.props.enableUpdateButton}
          className="waves-effect waves-light btn"
          onClick={() => {this.props.jumbleWords()}}
        >
          UPDATE
        </div>

      </div>
    )
  }
}

const mapStateToProps = (SentenceReducer) => {
  return {
    enableUpdateButton : SentenceReducer.enableUpdateButton
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSentence : (sentence) => dispatch(updateSentence(sentence)),
    jumbleWords : () => dispatch(jumbleWords())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);
