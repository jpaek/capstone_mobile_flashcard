import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, green, red } from '../utils/colors'
import TextButton from './TextButton'
import { startQuiz } from '../actions/index'



class Question extends Component {
    restart = () => {
        const { dispatch, id, questions, navigation } = this.props

        dispatch(startQuiz({total: questions.length, deckId: id}))

        navigation.navigate('Question', {
            id: id,
            questionId: 0,
            showAnswer: false,
        })
    }

    goToDeck = () => {
        const { id, navigation } = this.props
        navigation.navigate('Deck', {id: id})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>You answered correctly {this.props.answers.correct}/{this.props.answers.total}</Text>
                </View>
                <View style={styles.buttons}>
                    <TextButton onPress={this.restart}>Restart Quiz</TextButton>
                    <TextButton onPress={this.goToDeck}>Back to Deck</TextButton>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: white,
      justifyContent: "space-between",
      alignItems: "center"
    },
    header: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40
    },
    answer: {
        padding: 10,
        fontWeight: 'bold',
        color: red
    },
    buttons: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    correctButton: {
        backgroundColor: green
    },
    incorrectButton: {
        backgroundColor: red
    }
})

function mapStateToProps (state, ownProps) {

  const { id } = ownProps.route.params
  return {
      id: id,
      ...state[id],
      ...state["answers"],
  }
}

export default connect(
  mapStateToProps
)(Question)
