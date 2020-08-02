import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { purple, white } from './utils/colors'
import reducer from './reducers'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Question from './components/Question'
import QuizSummary from './components/QuizSummary'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
        <NavigationContainer style={styles.container}>
            <Stack.Navigator initalRouteName="Decks">
                <Stack.Screen name="Decks" component={DeckList} />
                <Stack.Screen name="New Deck" component={NewDeck} />
                <Stack.Screen name="Deck" component={Deck} />
                <Stack.Screen name="New Card" component={NewCard} />
                <Stack.Screen name="Question" component={Question} />
                <Stack.Screen name="Quiz Summary" component={QuizSummary} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "flex-end",
    alignItems: "center"
  }
})
