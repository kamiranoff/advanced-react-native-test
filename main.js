import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import DATA from './src/data/data';
import Deck from './src/components/Deck';
import CardComponent from './src/components/Card';

class App extends React.Component {

  renderCard(item) {
    return (<CardComponent
      key={item.id}
      item={item}
    />);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

Expo.registerRootComponent(App);
