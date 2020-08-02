import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, purple, gray } from '../utils/colors'
import { useLinkProps } from '@react-navigation/native'



class DeckItem extends Component {
    //const { onPress, ...props } = useLinkProps({ to, action });

    render() {
        console.log("Deck Item", this.props)
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>

                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.card}>{this.props.questions.length} cards</Text>
            </TouchableOpacity>
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
  },
  title: {
      fontWeight: 'bold',
      fontSize: 40
  },
  card: {
      color: gray
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  }
})

function mapStateToProps (state, {id}) {
    console.log("key", id)
    console.log("Item State", state)
  return {
    ...state[id]
  }
}

export default connect(
  mapStateToProps
)(DeckItem)
