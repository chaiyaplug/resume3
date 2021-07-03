import React from 'react'
import {ImageBackground,Text,View,Button,StyleSheet} from 'react-native'
import Pan from '../screens/pan'
import LinearGradient from 'react-native-linear-gradient';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import registerScreen from './register'
// import { createStackNavigator } from '@react-navigation/stack';
// import stackhomescreen from './screens/stackhomescreen'
// import DetailScreen from './Details'
//  import LoginScreen from './login'


 const home = ({navigation}) => {
  const image = { uri: "http://2.bp.blogspot.com/-7vIffW91jh8/UAJLZTAVHVI/AAAAAAAAAeA/6nW6S7piqc4/s1600/Abstract+Flowers+Design+%25287%2529.jpg"};
  return (
    
    <View style={styles.center}>
      <ImageBackground source={image} style={{position:"absolute",flex:1,width:"100%",height:"100%"}}>
      </ImageBackground>
       <Pan/>
      <Text>This is the home screen</Text>
      <Button title="Go to Details Screen" onPress={() => navigation.navigate("Details")} />
      <Button title="สมัครสมาชิก" onPress={() => navigation.navigate("register")} />
      {/* <Button title="แสกน qr" onPress={() => navigation.navigate("scanqr")} /> */}
      <Button title="เข้าสู่ระบบ" onPress={() => navigation.navigate("login")} />
      {/* <Button title="แสดงข้อมูลสมาชิก" onPress={() => navigation.navigate("login")} /> */}
     
    </View>
  
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    
  },
});

export default home;
// import registerScreen from './screens/register'
// const Stack=createStackNavigator();

// function stackhomescreen({ navigation }) {
//   return (

//     <Stack.Navigator>
//            {/* <Stack.Screen name="Login" component={registerScreen} /> */}
//           <Stack.Screen name="register" component={registerScreen}   options={{ title: 'My home' }}/>
           {/* <Stack.Screen name="Details" component={DetailScreen} /> */}
        // </Stack.Navigator>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home screen</Text>
    //   <Button
    //     title="สมัครสมาชิก"
    //     onPress={() => navigation.navigate('registerScreen')}
    //   />
    // </View>
//   );
// }
// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Login" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const stackhomescreen=({navigation})=>{
// return(
// <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
// <Button title="Details" onPress={()=>navigation.navigate('login2')}></Button>
// {/* <Button title="Login" onPress={()=>navigation.navigate('LoginScreen')}></Button> */}
// {/* <Button title="login" onPress={()=>navigation.navigate('login')}></Button> */}
//   <Text>Home View</Text>
  

// </View>


// )
// }
// export default stackhomescreen