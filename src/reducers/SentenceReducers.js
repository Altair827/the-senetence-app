import { SentenceActions } from '../actions/SentenceActions'

const initialState = {
  Sentence : "",
  JumbledWords : [],
  enableUpdateButton : false,
  showJumbledWords : false,
  sentenceLength : 0,
  wordsRemaining : 0
}

export default function SentenceReducer(state = initialState,action){
  switch (action.type) {

    case SentenceActions.UPDATE_SENTECE:
        return Object.assign({}, state, {
          Sentence : action.sentence,
          enableUpdateButton : action.sentence.split(" ").length > 1,
          showJumbledWords : false
        })
      break;

    case SentenceActions.JUMBLE_WORDS:

        let wordArray = state.Sentence.split(" ");

        return Object.assign({}, state, {
          showJumbledWords : true,
          JumbledWords : wordArray,
          sentenceLength : wordArray.length,
          wordsRemaining : wordArray.length
        })
      break;

    default:
      return state;
  }
}
