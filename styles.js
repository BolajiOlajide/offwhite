import { StyleSheet, Dimensions } from 'react-native';


const {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');

export default styles = StyleSheet.create({
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
    // backgroundColor: 'plum'
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
  shoeNameText: {
    marginBottom: 16,
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.25
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
  quotesText: {
    fontSize: 145,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: -2
  },
  quotesTextContainer: {
    height: deviceHeight * 0.25,
    justifyContent: 'center'
  },
  shoeInfoContainer: {
    alignItems: 'center'
  },
  thumbnailsContainer: {
    flexDirection: 'row'
  },
  thumbnail: {
    width: 72,
    height: 48,
    marginLeft: 8,
    marginRight: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#000'
  },
  shoeImageContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shoe: {
    width: deviceWidth,
    marginTop: -80,
    shadowColor: '#000',
    shadowOpacity: 0.75,
    shadowOffset: {
      width: 0,
      height: 50
    },
    overflow: 'visible',
    shadowRadius: 50
  }
});
