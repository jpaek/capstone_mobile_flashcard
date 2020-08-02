import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, START_QUIZ, INCREASE_SCORE } from '../actions'

function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
          return {
            ...state,
            ...action.decks,
          }
        case ADD_DECK :
          return {
            ...state,
            [action.deckId]: action.deck
          }
        case ADD_CARD :
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    "questions": state[action.deckId].questions.concat(action.card)
                }
            }
        case START_QUIZ :
           return {
               ...state,
               [action.deckId]: {
                   ...state[action.deckId],
                   "answers": {
                       "total": action.total,
                       "correct": 0
                   }
               }
           }
        case INCREASE_SCORE:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    "answers": {
                        ...state[action.deckId]["answers"],
                        "correct": state[action.deckId]["answers"]["correct"] + 1
                    }
                }
            }
        default :
            return state
    }
    return state
}

export default decks
