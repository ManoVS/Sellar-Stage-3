import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
  Platform,
} from 'react-native';

import axios from 'axios'

import MapView, {Marker} from 'react-native-maps'

export default class ISSLocationScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: {}
    }
  }
  componentDidMount(){
    this.getIssLocation();
  }

  getIssLocation = () => {
    axios.get('https://api.wheretheiss.at/v1/satellites/25544').then(response => {
      this.setState({
        location: response.data
      })
      .catch(error => {
        alert(error.message)
      })
    })
  }
  render() {
    if(Object.keys(this.state.location).length === 0){
      return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>loading..</Text>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.safeArea} />
        <ImageBackground
          source={require('../assets/iss_bg.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.headerStyle}>ISS Tracker App</Text>
          </View>
          <View style = {styles.mapContainer}>
            <MapView style = {styles.map} region = {{
              latitude: this.state.location.latitude,
              longitude: this.state.location.longitude,
              latitudeDelta: 100,
              longitudeDelta: 100 }}>
                <Marker coordinate = {{
                  latitude: this.location.latitude, 
                  longitude: this.state.longitude
                  }}>
                  <Image source = {require('../assets/iss_icon.png')} style = {{width: 50, height: 50}}/>
                </Marker>
              </MapView>
          </View>
          <View style = {styles.infoContainer}>
                <Text style = {styles.infoText}>latitude: {this.state.location.latitude}</Text>
                <Text style = {styles.infoText}>longitude: {this.state.location.longitude}</Text>
                <Text style = {styles.infoText}>altitude {km}: {this.state.location.altitude}</Text>
                <Text style = {styles.infoText}>velocity {km/h}: {this.state.location.velocity}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  mapContainer: {
    flex: 0.6,
  },
  map: {
    width: '100%',
    height: '100%'
  },
  infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 30,
  },
  infoText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  }
});
