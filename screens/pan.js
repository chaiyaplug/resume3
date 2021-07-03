import React, { useRef,useState } from "react";
import { ImageBackground,Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import { color } from "react-native-reanimated";
import  Entypo from 'react-native-vector-icons/Entypo'


const pan = () => {
  const [isshow,SetIsshow]=useState(true)
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],{useNativeDriver: false}
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;
const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View  style={styles.container}>
        
     
      <Animated.View
      
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
          {isshow? <Entypo  onPress={()=>SetIsshow(!isshow)} style={{position:"absolute",left:40,bottom:50,zIndex:10}} name="circle-with-cross" size={40} color={"black"}  />:null}
          {isshow?   <ImageBackground  style={{position:"absolute",height:60,width:60,zIndex:5 ,transform: [ { scaleX: -1 }] }}source={require('../picture/delivery.png')} ></ImageBackground> :null}
        
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:"absolute",
    bottom:10,
    right:10,
    // zIndex:1
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 80,
    width: 80,
    // backgroundColor: "blue",
    borderRadius: 50
  }
});

export default pan;