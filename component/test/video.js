import React, { Component } from 'react';
import { FlatList, TouchableHighlight, Text, View, Dimensions, StyleSheet, ImageBackground } from 'react-native';

const SCREEN = Dimensions.get('screen');
const movieData = [{
  key: '星球大战',
  img: '../../img/movie1.jpg',
  onPress: (navigate) => {
    navigate('MoviePlay', {name: '星球大战', path: '../../video/star-war.mp4'});
  }
}, {
  key: '幕后英雄',
  img: '../../img/movie.jpeg',
  onPress: (navigate) => {
    navigate('MoviePlay', {name: '星球大战', path: '../../video/heroes.mp4'});
  }
}];

export default class VideoList extends Component {
  static navigationOptions = {
    title: '电影列表'
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight style={styles.container}>
        <FlatList
          contentContainerStyle={styles.container}
          data={movieData}
          renderItem={({item}) => <ImageBackground  style={{ width: SCREEN.width, height: 260 }} source={item.img === '../../img/movie1.jpg' ? require('../../img/movie1.jpg') : require('../../img/movie.jpeg')} contentContainerStyle={styles.video}><View><Text style={styles.text} onPress={() => item.onPress(navigate)}>{item.key}</Text></View></ImageBackground>}
        />
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN.width,
    height: SCREEN.height,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'column',
  },
  video: {
    width: SCREEN.width,
  },
  text: {
    width: SCREEN.width,
    height: SCREEN.height,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }
})
