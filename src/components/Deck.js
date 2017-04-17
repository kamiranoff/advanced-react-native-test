import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
} from 'react-native';

import {
  SCREEN_WIDTH,
  SWIPE_THRESOLD,
  SWIPE_OUT_DURATION
} from '../constants/constants';


class Deck extends Component {

  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = this.createPanResponder(position);
    this.state = {
      panResponder,
      position,
      index: 0
    };
  }

  createPanResponder(position) {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESOLD) { // right
          const directiontoRight = SCREEN_WIDTH * 1.2;
          this.forceSwipe(directiontoRight);
        } else if (gesture.dx < -SWIPE_THRESOLD) { // left
          const directionToLeft = -SCREEN_WIDTH * 1.2;
          this.forceSwipe(directionToLeft);
        } else {
          this.resetPosition();
        }
      },
    });
  }

  forceSwipe(direction) {
    Animated.timing(this.state.position, {
      toValue: { x: direction, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index]
    if (direction > 0) { // right
      onSwipeRight(item);
    } else { // left
      onSwipeLeft(item);
    }
  }

  getCardStyle() {
    const { position } = this.state;
    const rotatationRange = SCREEN_WIDTH * 1.5;
    const rotate = position.x.interpolate({
      inputRange: [-rotatationRange, 0, rotatationRange],
      outputRange: ['-90deg', '0deg', '90deg'],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}


export default Deck;
