import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button }from 'react-native-elements';

import DATA from './../data/data';
import Deck from './Deck/Deck';
import CardComponent from './Card';

class App extends Component {

  renderCard(item) {
    return (<CardComponent
      key={item.id}
      item={item}
    />);
  }

  renderNoMoreCards() {
    return (
      <Card
        title="It is over."
        containerStyle={{ boderWidth: 0 }}
      >
        <Text style={{ marginBottom: 10 }}>
          There is no more lovely girls to like.
        </Text>
        <Button
          title="View now !"
          onPress={() => console.log('Pressed')}
          backgroundColor='#03A9F4'
          icon={{ name: 'code' }}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
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