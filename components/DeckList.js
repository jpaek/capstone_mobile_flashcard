import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, purple } from '../utils/colors'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions/index'
import DeckItem from './DeckItem'
import TextButton from './TextButton'
import { AppLoading } from 'expo'

import NewCard from "./NewCard"

class DeckList extends Component {
    state = {
        ready: false,
    }
    componentDidMount() {
        const { dispatch } = this.props

        console.log("Did mount")

        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))

    }
    render() {
        const { decks } = this.props
        const { ready } = this.state
        if (!ready) {
            return (
                <View>
                <AppLoading />
                <Text>Loading</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <TextButton onPress={() => {
                    this.props.navigation.navigate('New Deck')
                }}>
                    New Deck
                </TextButton>
                {
                    Object.keys(decks).map((id) => (
                        <DeckItem id={id} key={id} onPress={() => {
                            this.props.navigation.navigate('Deck', {
                                id: id
                            })
                        }} />
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 50,
    backgroundColor: white,
    justifyContent: 'space-around',
  },
})

function mapStateToProps (decks) {
  return {
      decks
  }
}

export default connect(mapStateToProps)(DeckList)
