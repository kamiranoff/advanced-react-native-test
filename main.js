import Expo from 'expo';
import React, { Component } from 'react';

import App from './src/components/App';

class Main extends Component {
  render() {
    return (
      <App />
    );
  }
}

Expo.registerRootComponent(Main);
