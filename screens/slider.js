//React Native Slider
//https://aboutreact.com/react-native-slider/

//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import Slider from '@react-native-community/slider';

const SliderScreen = () => {
  const [sliderValue, setSliderValue] = useState(15);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*Text to show slider value*/}
        <Text style={{color: 'black'}}>
           Value of slider is : {sliderValue}
        </Text>

        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default SliderScreen;