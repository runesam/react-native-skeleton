  var React = require('react');
  var formatTime = require('minutes-seconds-milliseconds');
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
  } from 'react-native';

  var StopWatch = React.createClass({
    getInitialState:function(){
      return {
        timeElapsed:null,
        timer_state:false,
        startTime : new Date(),
        laps:new Array()
      }
    },
    StartStopButton:function(){
      return(
        <TouchableHighlight underlayColor="gray" onPress={this.handleStartPress} style={[styles.button,this.state.timer_state ? styles.StopButton : styles.StartButton]}>
          <Text>
            {this.state.timer_state ? "Stop" : "Start"}
          </Text>
        </TouchableHighlight>
      );
    },
    LapButton:function(){
      return(
        <TouchableHighlight underlayColor="green" onPress={this.handleLapPress} style={styles.button}>
          <Text>
            Lap
          </Text>
        </TouchableHighlight>
      );
    },
    handleStartPress:function(){
      if(this.state.timer_state){
        clearInterval(this.interval);
        this.state.laps.push(this.state.timeElapsed);
      }
      if(!this.state.timer_state){
        this.setState({startTime:new Date(),laps:new Array()});
        this.interval = setInterval( () => {
          this.setState({
            timeElapsed:new Date()-this.state.startTime,
          });
        },30);
      }
      this.setState({timer_state:!this.state.timer_state});
    },
    handleLapPress:function(){
      // this.state.laps.push(this.state.timeElapsed);
      this.setState({laps:this.state.laps.concat([this.state.timeElapsed])});
      this.setState({
        startTime:new Date()
      });
    },
    border:function(color){
      return {
        // borderColor: color,
        // borderWidth: 4
      }
    },
    render:function(){
      return (
        <View style={styles.container}>
          <View style={[styles.header,this.border('yellow')]}>
            <View style={[styles.timerWraper,this.border('red')]}>
              <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
            </View>
            <View style={[styles.buttonsWrapper,this.border('green')]}>
              {this.StartStopButton()}
              {this.LapButton()}
            </View>
          </View>
          <View style={[styles.footer,this.border('blue')]}>
            {
              this.state.laps.map(function(item,i){
                  return (
                    <View style={styles.lap} key={i}>
                      <Text style={styles.lapText}>{'Lap #'}{i+1}{': '}</Text>
                      <Text style={styles.lapText}>{formatTime(item)}</Text>
                    </View>
                  );
              })
            }
          </View>
        </View>
      );
    }
  });

var styles =  StyleSheet.create({
  container:{
    flex:1,
    alignItems:'stretch',
  },
  header:{
    flex:1,
  },
  footer:{
    flex:1,
  },
  timerWraper:{
    flex:5,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonsWrapper:{
    flex:3,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  timer:{
    fontSize:60
  },
  button:{
    borderWidth:2,
    height:100,
    width:100,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  StartButton:{
    borderColor:'#00CC00'
  },
  StopButton:{
    borderColor:'red'
  },
  lap:{
    justifyContent:'space-around',
    flexDirection:'row'
  },
  lapText:{
    fontSize:30
  }
});

  AppRegistry.registerComponent('stopwatch', () => StopWatch);
