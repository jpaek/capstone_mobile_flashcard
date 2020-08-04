import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, purple, gray, green } from '../utils/colors'
import { useNavigationParam } from '@react-navigation/native';
import TextButton from './TextButton'
import { startQuiz } from '../actions/index'



class Deck extends Component {

    startQuiz = () => {
        const { dispatch, id, questions, navigation } = this.props

        dispatch(startQuiz({total: questions.length, deckId: id}))

        navigation.navigate('Question', {
            id: id,
            questionId: 0,
            showAnswer: false,
        })
    }
    render() {
        const { title, questions, navigation, id } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.card}>{questions.length} cards</Text>
                </View>
                <View style={styles.buttons}>
                    <TextButton
                    buttonStyle={styles.cardButton}
                    onPress={() => {
                        navigation.navigate('New Card', {
                            id: id
                        })
                    }}
                    >
                    Add Card
                    </TextButton>
                    {questions.length > 0 && (
                        <TextButton
                        onPress={this.startQuiz}>
                        Start Quiz
                        </TextButton>
                    ) }
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
  card: {
      color: gray
  },
  buttons: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
  },
  cardButton: {
      backgroundColor: green
  }
})

function mapStateToProps (state, ownProps) {
    const {id} = ownProps.route.params
    console.log("state", state)
  return {
    id: id,
    ...state[id],
  }
}

export default connect(
  mapStateToProps
)(Deck)
