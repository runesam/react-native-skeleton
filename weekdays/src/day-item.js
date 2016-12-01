var React = require('react');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DayItem = React.createClass({
  style:function(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize:this.fontSize(),
      lineHeight:this.lineHeight()
    }
  },
  color:function(){
    var opacity = this.props.daysUntil > 0 ?  this.props.daysUntil > 1 ? 1 / this.props.daysUntil : 0.7  : 1;
    return 'rgba(0,0,0,' + opacity + ')';
  },
  fontWeight:function(){
    var weight = 7 - this.props.daysUntil;
    return ''+weight * 100+'';
  },
  fontSize:function(){
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight:function(){
    return 70 - 4 * this.props.daysUntil;
  },
	render: function(){
		return (
			<Text style={/*styles.day*/this.style()}>
				{this.props.days_array}
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
