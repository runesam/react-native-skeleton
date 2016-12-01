var React = require('react');
var Moment = require('moment');
var DayItem = require('./src/day-item');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saterday'];

var weekdays = React.createClass({
  days:function(){
    var daysItem = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i,'days').format('dddd');
      daysItem.push(
        <DayItem days_array={day} key={i} daysUntil={i} />
      );
    }
    return daysItem;
  },
  render:function() {
      return (
        <View style={styles.container}>
          {/*<Text style={styles.welcome}>
            Days of the week:
          </Text>
          <Text>
            {Moment().format('dddd')}
          </Text>
          {DAYS ? DAYS.map(function(item,i) {
              return <DayItem days_array={item} key={i} />;
          }.bind(this)) : null}*/}
          {this.days()}
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
