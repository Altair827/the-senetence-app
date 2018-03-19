import React, { Component } from 'react';
import InputPanel from './components/InputPanel';
import WordListPanel from './components/WordListPanel';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="row">
        <div className="col s12 m12">

          <div className="card  grey lighten-5 z-depth-3">
            <div className="card-content">

              <h3 className="center">Pick The Words In Order</h3>

              <div className="card-content">

                <InputPanel />

                {
                  this.props.showJumbledWords &&
                  <WordListPanel />
                }

              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = ( SentenceReducer ) => {
  return {
    showJumbledWords : SentenceReducer.showJumbledWords,
    JumbledWords : SentenceReducer.JumbledWords
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
