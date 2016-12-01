var React = require('react');
var DayItem = require('./src/day-item');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saterday'];

var weekdays = React.createClass({
  render:function() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Days of the week:
          </Text>
          <DayItem Days={DAYS[0]}></DayItem>
        </View>
      );
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('weekdays', () => weekdays);
