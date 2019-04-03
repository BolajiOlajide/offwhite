import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, ScrollView, Dimensions } from 'react-native';

// assets
import nikeLogo from './assets/nike-logo.png';


const { width: deviceWidth } = Dimensions.get('window');


export default class App extends Component {
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
        <ScrollView horizontal pagingEnabled style={styles.scrollView}>
          <View style={styles.textContainer}>
            <Text
              style={styles.offWhiteQuotes}
              adjustsFontSizeToFit // ensures the word fits the screen regardless of how long it is
              numberOfLines={1}
            >
              "AIR"
            </Text>
            <View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4
  },
  textContainer: {
    justifyContent: 'space-between',
    width: deviceWidth,
    backgroundColor: 'plum'
  },
  offWhiteDefinitionText: {
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Helvetica Neue"
  },
  priceText: {
    fontSize: 80,
    fontWeight: '700',
    fontFamily: 'Helvetica Neue',
    letterSpacing: -0.25
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  nikeLogo: {
    width: 80,
    height: 29,
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  offWhiteQuotes: {
    fontSize: 145,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: -2
  }
});
