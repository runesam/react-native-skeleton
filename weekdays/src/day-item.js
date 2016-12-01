var React = require('react');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DayItem = React.createClass({
	render: function(){
		return (
			<Text style={styles.day}>
				{this.props.day}
			   </Text>
    );
  }
});

var styles = StyleSheet.create({
	day:{
		fontSize: 18,
		color:'#0000FF'
	}
});

module.exports = DayItem;
