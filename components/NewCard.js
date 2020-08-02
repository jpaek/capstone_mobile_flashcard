import React, { Component, useState } from 'react'
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, purple, gray, green } from '../utils/colors'
import TextButton from './TextButton'
import { addCard } from '../actions/index'


class NewCard extends Component {
    state = {
        question: "",
        answer: ""
    }

    setQuestion = (text) => {
        this.setState({ question: text})
    }

    setAnswer = (text) => {
        this.setState({ answer: text})
    }

    addNewCard = () => {
        const { question, answer } = this.state
        const { dispatch, id, navigation } = this.props

        dispatch(addCard({
            deckId: id,
            card: {
                question: question,
                answer: answer
            }
        }))

        navigation.navigate('Deck', {
            id: this.props.id
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Question"
                    onChangeText={this.setQuestion} />
                <TextInput
                    placeholder="Answer"
                    onChangeText={this.setAnswer} />
                <TextButton onPress={this.addNewCard}>
                    Submit
                </TextButton>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function mapStateToProps (state, ownProps) {
    const { id } = ownProps.route.params
    return {
        ...state[id],
        id: id,
    }
}

export default connect(
  mapStateToProps
)(NewCard)
