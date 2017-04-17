import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import DATA from './../data/data';
import Deck from './Deck';
import CardComponent from './Card';

class App extends Component {

  renderCard(item) {
    return (<CardComponent
      key={item.id}
      item={item}
    />);
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          onSwipeRight={() => console.log('onSwipeRight')}
          onSwipeLeft={() => console.log('onSwipeLeft')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;