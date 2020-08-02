import React, { Component, useState } from 'react'
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, purple, gray, green } from '../utils/colors'
import TextButton from './TextButton'
import { addDeck } from '../actions/index'


class NewDeck extends Component {
    state = {
        title: ""
    }
    onChangeText = (text) => {
        this.setState({title: text})
    }
    addNewDeck = () => {
        const { title } = this.state
        const { dispatch } = this.props

        dispatch(addDeck({
            deckId: title,
            deck: {
                title: title,
                questions: []
            }
        }))

        this.props.navigation.navigate('Decks')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    What is the title of your new deck?
                </Text>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Deck Title"
                        onChangeText={this.onChangeText} />
                    <TextButton onPress={this.addNewDeck}>
                        Create Deck
                    </TextButton>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40
  },
  input: {
      alignItems: "center",
  },
  inputText: {
      flex:1,
      alignItems: "center",
      height: 40, borderColor: 'gray', borderWidth: 1
  }
})

function mapStateToProps (state, {id}) {
    console.log(state)
    console.log(id)
  return {
    ...state[id]
  }
}

export default connect(
  mapStateToProps
)(NewDeck)
