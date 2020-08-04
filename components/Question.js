import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, green, red } from '../utils/colors'
import TextButton from './TextButton'
import { increaseScore } from '../actions/index'



class Question extends Component {

    questionAnswered = (isCorrect) => {
        const { dispatch, questionId, navigation, total, id} = this.props
        console.log("Is Correct", isCorrect)
        if (isCorrect) {
            dispatch(increaseScore({deckId: id}))
        }
        if (questionId === total - 1) {
            navigation.navigate('Quiz Summary', {id: id})
        }
        else {
            navigation.navigate('Question', {
                id: id,
                questionId: questionId + 1,
                showAnswer: false,
            })
        }
    }
    render() {
        const { questionId, card, id, total, showAnswer } = this.props
        return (
            <View style={styles.container}>
                <Text style={{alignSelf: 'flex-start'}}>{questionId + 1}/{this.props.total}</Text>
                <View style={styles.header}>
                    <Text style={styles.title}>{showAnswer ? card.answer : card.question}</Text>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Question', {
                            id: this.props.id,
                            showAnswer: !showAnswer,
                            questionId: questionId
                        })
                    }}>
                        <Text style={styles.answer}>Show {showAnswer ? "Question" : "Answer"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <TextButton buttonStyle={styles.correctButton} onPress={() => {this.questionAnswered(true)}}>Correct</TextButton>
                    <TextButton buttonStyle={styles.incorrectButton} onPress={() => {this.questionAnswered(false)}}>Incorrect</TextButton>
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

  const { id, questionId, showAnswer } = ownProps.route.params
  console.log("showAnswer", showAnswer)
  return {
      ...state,
      questionId: questionId,
      card: state[id]["questions"][questionId],
      id: id,
      total: state[id]["questions"].length,
      showAnswer: showAnswer,
  }
}

export default connect(
  mapStateToProps
)(Question)
