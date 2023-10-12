//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import logo from './assets/logo.png';
import Animated, { useAnimatedStyle,Easing, useSharedValue, withRepeat, withSequence, withSpring, withTiming, withDelay } from 'react-native-reanimated';
// create a component
const App = () => {

  const fadeInValue = useSharedValue(0.4)
  const leftValue = useSharedValue(-500)
  const textOpValue = useSharedValue(1)
  const widthVal = useSharedValue(120)

  let widthStyle = useAnimatedStyle(()=>({width:widthVal.value}))


  const opacity = useAnimatedStyle(()=>{

    return {
      opacity:fadeInValue.value
    }

  })

  const goLeft = useAnimatedStyle(()=>{
    return {
      left:leftValue.value
    }
  })

  const opcityText = useAnimatedStyle(()=>{
    return {
      opacity:textOpValue.value
    }
  })
  

useEffect(()=>{

  widthVal.value = withRepeat(withTiming(300,{
    duration:10000
  }),-1)

  fadeInValue.value = withRepeat(withTiming(1,{
    duration:3000,
    easing:Easing.bounce,
  }),-1,true)

  leftValue.value = withSequence(withTiming(50,{
    duration:4000,
    easing:Easing.bounce
  }))

  textOpValue.value = withRepeat(withTiming(0.5,{
    duration:3000,
    easing:Easing.elastic(1)
  }),-1,true)

},[])



  
  return (
    <View style={styles.container}>
      <Animated.Image source={logo} style={[{
        width:200,
        objectFit:"contain",
      },opacity]}/>
      <Animated.Text style={[{
        fontSize:30,
        position:"absolute",
        top:"55%",
        color:"#0099ff",
        fontFamily:"rr"
      },goLeft,opcityText]}>EplusApp Address</Animated.Text>
      <Animated.Text 
      style={[{
        textAlign:"left",
        fontSize:30,
        position:"absolute",
        top:"80%",
        left:0,
        borderColor:"#0099ff",
        color:"#0099ff",
        borderBottomWidth:10
      },widthStyle]}
      >Loading...
      </Animated.Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

//make this component available to the app
export default App;
