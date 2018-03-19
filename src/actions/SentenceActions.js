export const SentenceActions = {
  "UPDATE_SENTECE" : "UPDATE_SENTECE",
  "JUMBLE_WORDS" : "JUMBLE_WORDS",
  "ADD_TO_ANSWER" : "ADD_TO_ANSWER",
  "REMOVE_FROM_ANSWER" : "REMOVE_FROM_ANSWER"
}

export const updateSentence = (sentence) => ({
  type : SentenceActions.UPDATE_SENTECE,
  sentence
})

export const jumbleWords = (wordArray) => ({
  type : SentenceActions.JUMBLE_WORDS,
  wordArray
})

export const addToAnswer = (id) => ({
  type : SentenceActions.ADD_TO_ANSWER,
  id
})

export const removeFromAnswer = (id) => ({
  type : SentenceActions.REMOVE_FROM_ANSWER,
  id
})
