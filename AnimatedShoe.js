import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';

// styles
import styles from './styles';


const { width: deviceWidth } = Dimensions.get('window');


class AnimatedShoe extends Component {
  constructor(props) {
    super(props);

    // this.animatedShoeTranslateXVal = tthis.props.animatedValue.interpolate({
    //   inputRange: [ deviceWidth * -1, 0, deviceWidth ],
    //   outputRange: [-deviceWidth, 0, deviceWidth],
    //   extrapolate: 'clamp'
    // });
    const { animatedValue, index } = this.props;

    this.animatedShoeScaleVal = animatedValue.interpolate({
      inputRange: [
        deviceWidth * (index - 0.8),
        deviceWidth * index,
        deviceWidth * (index + 0.2)
      ],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp'
    });
    this.animatedShoeRotationVal = animatedValue.interpolate({
      inputRange: [
        deviceWidth * (index - 1),
        deviceWidth * index,
        deviceWidth * (index + 0.5)
      ],
      outputRange: ['270deg', '0deg', '-360deg'],
      extrapolate: 'clamp'
    });
  }

  render() {
    return (
      <View pointerEvents="none" style={styles.shoeImageContainer}>
        <View>
          <Animated.Image
            source={this.props.src}
            resizeMode='contain'
            style={[styles.shoe, {
              transform: [
                // { rotate: this.contentOffsetXVal.interpolate({
                //   inputRange: [0, 120],
                //   outputRange: ['0deg', '360deg'],
                //   // extrapolate: 'clamp'
                // }) }
                // { translateX: this.animatedShoeTranslateXVal },
                { scale: this.animatedShoeScaleVal },
                { rotate: this.animatedShoeRotationVal }
              ]
            }]}
          />
        </View>
      </View>
    );
  }
}

export default AnimatedShoe;
