import { AsyncStorage } from 'react-native'
import { formatResults, DECKS_STORAGE_KEY } from './_decks'

export function getDecks() {
    console.log("Get Decks")
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(formatResults)
}

export function getDeck(id) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((result) => formatResults(results)[id])
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            deck = formatResults(result)[title]
            deck.questions = deck.questions.concat(card)
            AsyncStorage.mergeItem(
                DECKS_STORAGE_KEY,
                JSON.stringify({[title]: deck})
            )
        })
}
