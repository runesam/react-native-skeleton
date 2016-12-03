var React = require('react');
const Api = require('./utils/api');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  TouchableHighlight
} from 'react-native';

var Weather = React.createClass({
  getInitialState:function(){
    return {
      pins : new Array(),
      city : '',
      temp : '',
      desc : ''
    }
  },
  onRegionChangeComplete:function(region){
    let temp = [{'latitude':region.latitude,'longitude':region.longitude}];
    this.setState({pins:this.state.pins.concat([temp])});
    Api.weather(region.latitude,region.longitude).then((data) => {
      this.setState(data);
      console.log(this.state.desc)
    });
    console.log(this.state.pins)
  },
  render:function(){
    return <View style={styles.container}>
            <MapView onRegionChangeComplete={this.onRegionChangeComplete} annotations={this.state.pins.length > 0 ? this.state.pins[this.state.pins.length-1] : null} style={styles.map}>
            </MapView>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{this.state.city}</Text>
            <Text style={styles.text}>{this.state.temp}</Text>
            <Text style={styles.text}>{this.state.desc.charAt(0).toUpperCase() + this.state.desc.slice(1)}</Text>
          </View>
        </View>
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#F5FCFF'
  },
  map:{
    flex:2,
    marginTop:20
  },
  textWrapper:{
    flex:1,
    alignItems:'center'
  },
  text:{
    fontSize:30
  }
});

AppRegistry.registerComponent('weather', () => Weather);
