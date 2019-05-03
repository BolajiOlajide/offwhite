import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Animated
} from 'react-native';

// assets
import nikeLogo from './assets/nike-logo.png';

// components
import AnimatedShoe from './AnimatedShoe';

// styles
import styles from './styles';

// data
import { SHOE_IMAGES, SHOE_DESCRIPTIONS } from './mockData';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.contentOffsetXVal = new Animated.Value(0);
    this.onScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { x: this.contentOffsetXVal } } }],
      { useNativeDriver: true }
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <Image source={nikeLogo} style={styles.nikeLogo} resizeMode="contain" />
          <View style={{ padding: 4 }}>
            <Text style={styles.offWhiteDefinitionText}>
              OFF-WHITE c/o VIRGIL ABLOH
            </Text>
            <Text style={styles.offWhiteDefinitionText}>
              Defining the gret area between black
            </Text>
            <Text style={styles.offWhiteDefinitionText}>
              and white as the color Off-White
            </Text>
          </View>
        </View>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          style={styles.scrollView}
          scrollEventThrottle={1}
          onScroll={this.onScroll}
          showsHorizontalScrollIndicator={false}
        >
          {SHOE_DESCRIPTIONS.map(({ quotes, price, name, thumbnails }, index) => (
            <View style={styles.textContainer} key={index}>
              <View style={styles.quotesTextContainer}>
                <Text
                  style={styles.quotesText}
                  adjustsFontSizeToFit // ensures the word fits the screen regardless of how long it is
                  numberOfLines={1}
                >
                  {quotes}
                </Text>
              </View>
              <View style={styles.shoeInfoContainer}>
                <Text style={styles.priceText}>${price.toLocaleString()}</Text>
                <Text style={styles.shoeNameText}>{name}</Text>
                <View style={styles.thumbnailsContainer}>
                  <View style={styles.thumbnail} />
                  <View style={styles.thumbnail} />
                  <View style={styles.thumbnail} />
                </View>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        {SHOE_IMAGES.map((src, index) => {
          return <AnimatedShoe
            animatedValue={this.contentOffsetXVal}
            index={index}
            src={src}
            key={index}
          />
        })}
      </SafeAreaView>
    );
  }
}
