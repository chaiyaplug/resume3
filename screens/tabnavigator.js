import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Text,View,Button,StyleSheet} from 'react-native'
import { MainStackNavigator, detailstacknavigator,basketstacknavigator,qrstacknavigator,productstacknavigator } from "./stacknavigator";
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
    >
        <Tab.Screen name="Home" component={MainStackNavigator}
          options={{tabBarLabel:"Home"
          
          ,tabBarBadge:("3")
          ,tabBarIcon:({color,size})=>
        
            <MaterialCommunityIcons name="home" color={color} size={size}  /> 
            
          ,tabBarBadgeStyle:{
 maxWidth: 20,
     maxHeight: 20,
     fontSize: 15,
     backgroundColor:"red",
     color:"white"
    //  lineHeight: 9,

          }
          }}
          />
        
        <Tab.Screen name="details" component={detailstacknavigator} 
            options={{tabBarLabel:"สินค้า"
            // ,style={overflow:"overflow"}
            ,tabBarIcon:({color,size})=>(
              <MaterialCommunityIcons name="basket" color={color} size={size}/> )}}
        />
          <Tab.Screen name="product" component={productstacknavigator} 
            options={{tabBarLabel:()=>
              <View >
                <Text style={{color:"red",padding:1}}> สินค้า </Text>
                </View>
            
            ,tabBarIcon:({color,size})=>(
              <View style={{
                height: 50,
                width: 50, 
                 borderRadius: 100,
                 opacity:1,
                backgroundColor: '#FF6633',
                justifyContent:"center",
                alignItems:"center",
                marginBottom:50,
              //  paddingTop: 
                }}>
              <MaterialCommunityIcons name="basket" color={color} size={size}/> 
              </View>
              )}}
        />
        <Tab.Screen name="test" component={basketstacknavigator} 
            options={{tabBarLabel:"ตะกร้า"
            ,tabBarIcon:({color,size})=>(
              <MaterialCommunityIcons name="cart" color={color} size={size}/> )}}
        />
        <Tab.Screen name="scanqr" component={qrstacknavigator} 
            options={{tabBarLabel:"แสกน"
            ,tabBarIcon:({color,size})=>(
              <MaterialCommunityIcons name="qrcode-scan" color={color} size={size}/> )}}
        />
        
      {/* <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Tab.Navigator>
  );
};


export default BottomTabNavigator;
// >
// <Tab.Screen name="Home" component={Home}
// options={{ tabBarLabel:'หน้าหลัก1234',
// tabBarIcon: ({ color, size }) => (
//  <MaterialCommunityIcons name="home" color={color} size={size} />  //https://oblador.github.io/react-native-vector-icons/
// ),

// }}
// />
// <Tab.Screen name="Details" component={DetailScreen} 
//  options={{ tabBarLabel:'สินค้า',
//  tabBarIcon: ({ color, size }) => (
//   <MaterialCommunityIcons name="cart" color={color} size={size} />
// ),}}
// />
// <Tab.Screen name="LoginScreen" component={LoginScreen} 
// options={{ tabBarLabel:'ตะกร้าสินค้า',
// tabBarIcon: ({ color, size }) => (
//  <MaterialCommunityIcons name="basket" color={color} size={size} />
// ),}}
// />
//  <Tab.Screen name="scanqr" component={scanqr} 
// options={{ tabBarLabel:'แสกน',
// tabBarIcon: ({ color, size }) => (
//  <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
// ),}}
// />