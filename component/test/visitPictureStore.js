import React, {Component} from 'react';
import { Animated, View, ScrollView, StyleSheet, Image, Dimensions, Button, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const SCREEN = Dimensions.get('screen');
export default class Picture extends Component {
  static navigationOptions = {
    title: <Text>图库测试</Text>,
  }
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    }
  }

  handlePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        image,
      })
    });
  }

  render() {
    const { image } = this.state;
    return (
      <View contentContainerStyle={styles.container}>
        <Button title="选择图片" onPress={this.handlePick}/>
        <View style={styles.pic}>
          {image ? <Image source={{uri: image.path || ''}} style={styles.img}/> : null}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: SCREEN.width,
    height: SCREEN.height,
    backgroundColor: 'powderblue',
    alignItems: 'center'
  },
  pic: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    flexWrap: 'wrap',
  },
  img: {
    width:  SCREEN.width/2,
    height: SCREEN.height/2,
    marginTop: 20,
  }
});
