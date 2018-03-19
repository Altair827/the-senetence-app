export const SentenceActions = {
  "UPDATE_SENTECE" : "UPDATE_SENTECE",
  "JUMBLE_WORDS" : "JUMBLE_WORDS"
}

export const updateSentence = (sentence) => ({
  type : SentenceActions.UPDATE_SENTECE,
  sentence
})

export const jumbleWords = () => ({
  type : SentenceActions.JUMBLE_WORDS
})
