var React = require('react');
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
      pins : new Array()
    }
  },
  onRegionChangeComplete:function(region){
    let temp = [{'latitude':region.latitude,'longitude':region.longitude}];
    this.setState({pins:this.state.pins.concat([temp])});
    console.log(region)
    console.log(this.state.pins)
  },
  render:function(){
    return <MapView onRegionChangeComplete={this.onRegionChangeComplete} annotations={this.state.pins.length > 0 ? this.state.pins[this.state.pins.length-1] : null} style={styles.map}/>
  }
});

var styles = StyleSheet.create({
  map:{
    flex:1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
