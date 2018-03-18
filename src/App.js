import React, { Component } from 'react';

class App extends Component {

  componentWillMount(){
    this.setState({
      Sentence : "",
      JumbledWords : [],
      enableUpdateButton : false,
      showJumbledWords : false,
      sentenceLength : 0,
      wordsRemaining : 0
    });
  }

  updateSentence = (e) => {
    this.setState({
      Sentence : e.target.value,
      enableUpdateButton : e.target.value.split(" ").length > 1,
      showJumbledWords : false
    });
  }

  jumbleWords = () => {

    var wordArray = this.state.Sentence.split(" ")

    this.setState({
      showJumbledWords : true,
      JumbledWords : wordArray,
      sentenceLength : wordArray.length,
      wordsRemaining : wordArray.length
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m12">

          <div className="card  grey lighten-5 z-depth-3">
            <div className="card-content">

              <h3 className="center">Pick The Words In Order</h3>

              <div className="card-content">

                <div id="inputBlock" className="row">

                  <div className="input-field col s12 m6">
                    <input
                      placeholder="Your Sentence Here"
                      id="sentence"
                      type="text"
                      onChange={(event) => {this.updateSentence(event)}}
                     />
                    <label htmlFor="sentence">Sentence</label>
                  </div>

                  <div
                    id="updateButton"
                    disabled={!this.state.enableUpdateButton}
                    className="waves-effect waves-light btn" onClick={() => {this.jumbleWords()}}
                  >
                    UPDATE
                  </div>

                </div>

                {
                  this.state.showJumbledWords &&

                    <div>
                      <p>{this.state.Sentence + " " + this.state.wordsRemaining}</p>
                    </div>

                }

              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
