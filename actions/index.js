export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const START_QUIZ = 'START_QUIZ'
export const INCREASE_SCORE = 'INCREASE_SCORE'

export function receiveDecks (decks) {
    console.log("Received Decks")
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck ({deckId, deck}) {
  return {
    type: ADD_DECK,
    deckId,
    deck
  }
}

export function startQuiz({deckId, total}) {
    return {
        type: START_QUIZ,
        total,
        deckId,
    }
}

export function increaseScore({deckId}) {
    console.log(deckId)
    return { type: INCREASE_SCORE, deckId,}
}

export function addCard({deckId, card}) {
    return {
        type: ADD_CARD,
        deckId,
        card
    }
}
