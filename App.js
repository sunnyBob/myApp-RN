/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Home, Animate, ImagePicker, WebView, Video, MoviePlay } from './component';

const MyApp = StackNavigator({
  Home: { screen: Home },
  Animate: { screen: Animate },
  ImagePicker: { screen: ImagePicker },
  WebView: { screen: WebView },
  Video: { screen: Video },
  MoviePlay: { screen: MoviePlay },
})

export default class App extends Component {
  render() {
    return (
      <MyApp/>
    );
  }
}
