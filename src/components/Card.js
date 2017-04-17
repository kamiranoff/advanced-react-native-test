import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const CardComponent = ({ item, children }) => (
  <Card
    title={item.text}
    image={{ uri: item.uri }}
    imageStyle={{ height: 300 }}
  >
    <Text
      style={{ marginBottom: 10 }}
    >
      Further customization
    </Text>
    <Button
      title="View now !"
      onPress={() => console.log('Pressed')}
      backgroundColor='#03A9F4'
      icon={{ name: 'code' }}
    />
  </Card>
);

export default CardComponent;