import { SentenceActions } from '../actions/SentenceActions'

const initialState = {
  Sentence : "",
  JumbledWords : [],
  answerWords : [],
  enableUpdateButton : false,
  showJumbledWords : false,
  isSentenceCorrect : false,
  sentenceLength : 0,
  wordsRemaining : 0
}

export default function SentenceReducer(state = initialState,action){
  switch (action.type) {

    case SentenceActions.UPDATE_SENTECE:
        return Object.assign({}, state, {
          Sentence : action.sentence.trim(),
          enableUpdateButton : action.sentence.split(" ").length > 1,
          showJumbledWords : false,
          JumbledWords : [],
          answerWords : []
        })

    case SentenceActions.JUMBLE_WORDS:

        let wordArray = state.Sentence.split(" ");

        let id = 0;

        return Object.assign({}, state, {
          showJumbledWords : true,
          JumbledWords : wordArray.map((word) => ({
            id : id++,
            word
          })),
          answerWords : [],
          sentenceLength : wordArray.length,
          wordsRemaining : wordArray.length
        })

    case SentenceActions.ADD_TO_ANSWER:

        let wordSelected = state.JumbledWords.filter((word) => word.id === action.id)[0];
        let jumbledArray = state.JumbledWords.filter((word) => word.id !== action.id);
        let answerWords = state.answerWords;
        answerWords.push(wordSelected);

        return Object.assign({}, state, {
          JumbledWords : jumbledArray,
          answerWords : answerWords,
          wordsRemaining : state.wordsRemaining-1
        })

    default:
      return state;
  }
}
