import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.safeArea} />
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.headerStyle}>ISS Tracker App</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.routeCards}
              onPress={() => {
                this.props.navigation.navigate('ISS');
              }}>
              <Text style={styles.routeText}>ISS Location</Text>
              <Text style={styles.knowMore}>{'Know More --->'}</Text>
              <Text style={styles.bgDigit}>1</Text>
              <Image
                source={require('../assets/iss_icon.png')}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.routeCards}
              onPress={() => {
                this.props.navigation.navigate('Meteor');
              }}>
              <Text style={styles.routeText}>Meteors</Text>
              <Text style={styles.knowMore}>{'Know More --->'}</Text>
              <Text style={styles.bgDigit}>2</Text>
              <Image
                source={require('../assets/meteor_icon.png')}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  safeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeCards: {
    flex: 0.25,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 35,
    marginTop: 55,
    paddingLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  iconStyle: {
    width: 200,
    height: 200,
    position: 'absolute',
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
});
