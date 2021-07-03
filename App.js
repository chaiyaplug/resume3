import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text,View,ActivityIndicator,Button, ScrollView, SnapshotViewIOS,Platform, InteractionManager} from 'react-native'
// import Home from './screens/home'
// import DetailScreen from './screens/Details'
//  import LoginScreen from './screens/login'
//  import LoginScreen2 from './screens/register'
 import scanqr from './screens/Scanqr'
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainStackNavigator} from './screens/stacknavigator'
 import firestore from './database/firebase'
 import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

 import BottomTabNavigator from "./screens/tabnavigator";

 import DrawerNavigator from "./screens/drawernavigation";
 import { AppContext } from './screens/Appcontext'
//  import { MaterialCommunityIcons } from '@expo/vector-icons';
//  const Stack = createStackNavigator();
//  const Tab = createBottomTabNavigator();    
 

const App = () => {   
  return (   
      //   <Stack.Screen
        

    // <Appcontext.Provider value={"test"}>
    <NavigationContainer>
      
           {/* <MainStackNavigator/> */}
           {/* <BottomTabNavigator/> */}
            <DrawerNavigator/> 
     </NavigationContainer>
    //  </Appcontext.Provider>
       )
      
      }
      export default App
         {/* <Tab.Navigator
         initialRouteName="Home"//ตั้งค่าให้ default app เปิดที่ page นี้
        
         tabBarOptions={{
          activeTintColor: 'red',
          activeBackgroundColor:"#45d67a",
          inactiveTintColor:'white',
          inactiveBackgroundColor:'blue'
          
        }}
         >
       <Tab.Screen name="Home" component={Home}
       options={{ tabBarLabel:'หน้าหลัก1234',
       tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />  //https://oblador.github.io/react-native-vector-icons/
      ),
      
      }}
       />
       <Tab.Screen name="Details" component={DetailScreen} 
        options={{ tabBarLabel:'สินค้า',
        tabBarIcon: ({ color, size }) => (
         <MaterialCommunityIcons name="cart" color={color} size={size} />
       ),}}
       />
       <Tab.Screen name="LoginScreen" component={LoginScreen} 
       options={{ tabBarLabel:'ตะกร้าสินค้า',
       tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="basket" color={color} size={size} />
      ),}}
       />
        <Tab.Screen name="scanqr" component={scanqr} 
       options={{ tabBarLabel:'แสกน',
       tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
      ),}}
       />
       
   </Tab.Navigator> */}

   


  // const userref= firestore.collection("userid")
//   userref.get().then((snapshot)=>{
//                       snapshot.foreach((doc)=>{
//                                         if(doc.data()){
//                                           console.log(doc.acct)
//                                               console.log(doc.username)
//                                               console.log(doc.surname)
                                          
//                                                   }

//                                              }
//                                       )   
//                               }

// );         
// {/* <View style={{display:"flex",flex:1}}>
// <View style={{flex:0.5,justifyContent:"flex-end",width:"100%",height:"100%" ,backgroundColor:"red"}}>
// <ActivityIndicator color="blue" />

//  <ActivityIndicator size="large"  color="green"/>
// <ActivityIndicator size="small" color="#0000ff" />
// <ActivityIndicator size="large" color="#00ff00" />
// </View>
// <View style={{flex:0.5 ,alignItems:"flex-start",justifyContent:"center",width:"20%",height:"20%",backgroundColor:"yellow"}}>
// <Text>test</Text> */}
// </View>
    
// </View>
// const Stack2= ()=>{

          // {
          //   <Stack.Navigator>
          //   <Stack.Screen
          //     name="Home"
          //     component={HomeScreen}
          //     options={{ title: 'Home121',
          //     headerTitleAlign: 'center'}}
              // ,  
              //  headerRight: () => (
              //   <Button
              //     // onPress={() => alert('This is a button!')}
              //     title="Info"
              //     // color="#00cc00"
              //   />
              // ),}}
            // />
            {/* <Stack.Screen
            name="Details" 
            component={DetailScreen}
            options={{ title: 'Details111' }} /> 
            <Stack.Screen
            name="Login" 
            component={LoginScreen}
            options={{ title: 'Register' }} />
          
          </Stack.Navigator>
 
 const Homescreen2=()=>{
 <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Details" component={DetailScreen} />
   </Tab.Navigator>
 }

          // const Stack2= ()=>{

          // {
          //   <Stack.Navigator>
          //   <Stack.Screen
          //     name="Home"
          //     component={HomeScreen}
          //     options={{ title: 'Home121',
          //     headerTitleAlign: 'center'}}
              // ,  
              //  headerRight: () => (
              //   <Button
              //     // onPress={() => alert('This is a button!')}
              //     title="Info"
              //     // color="#00cc00"
              //   />
              // ),}}
            // />
          <Stack.Screen
            name="Details" 
            component={DetailScreen}
            options={{ title: 'Details111' }} /> 
            <Stack.Screen
            name="Login" 
            component={LoginScreen}
            options={{ title: 'Register' }} />
          
          </Stack.Navigator>
          } */}

          const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
    // Work around issue `Setting a timer for long time`
    // see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}