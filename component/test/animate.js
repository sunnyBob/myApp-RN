import React, {Component} from 'react';
import { Animated, View, StyleSheet, Dimensions, Image, Text, Easing } from 'react-native';
const SCREEN = Dimensions.get('screen');
export default class AnimateView extends Component {
  static navigationOptions = {
    title: <Text>动画测试</Text>,
  }
  constructor(props) {
    super(props);
    this.state ={
      fadeInOpacity: new Animated.Value(0),
      rotation: new Animated.Value(0),
      scale: new Animated.Value(0),
    }
  }

  componentDidMount() {
    const timing = Animated.timing;
    Animated.parallel(['fadeInOpacity', 'rotation', 'scale'].map(item => {
      return timing(
        this.state[item],
        {
          toValue: 1,
          duration: 5000, 
          easing: Easing.linear, 
        }
      )
    })).start();
  }

  render() {
    return (
      <Animated.View                            
        style={[styles.img,{
          opacity: this.state.fadeInOpacity, 
          transform: [{
            rotate: this.state.rotation.interpolate({
                inputRange: [0,1],
                outputRange: ['0deg', '360deg']
            }),     
          }, {
            scale: this.state.scale,
          }],
        }]}
      >
        <Image source={require('../../img/1.jpg')} style={styles.img}/>
      </Animated.View>
    );    
  }
}
const styles = StyleSheet.create({
  img: {
    width: SCREEN.width,
    height: SCREEN.height,
    backgroundColor: 'powderblue',
  }
});
