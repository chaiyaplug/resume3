import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {View,TextInput,Text} from 'react-native'
import Home from "../screens/home";
import Details from "../screens/Details";
import register from "../screens/register";
import scanqr from "../screens/Scanqr";
import login from "../screens/login";
import logout from "../screens/logout"
import search from "../screens/search";
import product from "../screens/product"
import setting from "../screens/setting"
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  Ionicons from 'react-native-vector-icons/Ionicons'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import detail from '../screens/Details'
// import DrawerNavigator from "./drawernavigation"; //ห้าม import วนไปมา จะทำให้เกิด warning cycle
const Stack = createStackNavigator();

// function LogoTitle({navigation}) {
//   return (
//     // <Image
//     //   style={{ width: 50, height: 50 }}
//     //   source={require('@expo/snack-static/react-native-logo.png')}
//     // />
   
//      />
//   );
// }
const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "blue",opacity:0.5
    },
    headerTintColor: "white",
    headerBackTitle:"back"

  };
const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptionStyle={{screenOptionStyle}}
    screenOptions={()=> <Text>This is the home screen</Text>}
   
    > 
    <Stack.Screen name="home" component={Home}  
    // options={{
    //   title: 'My home',
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: 'white',
    //   headerTitleStyle: {
    //     fontWeight: "bold",
    //   heade:()=>(
    //     <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="#00cc00"
    //   />
    //   )
    //   },
    // }}
    
    options={{ 
      // headerTitle:()=>({}),
      
     
      headerLeft:()=>(
         <MaterialCommunityIcons name="view-headline" size={40} 
         onPress={()=>navigation.toggleDrawer()}
          />  
        
      ),
      headerRight:()=>(
        <View style={{flexDirection:"row"}}>
           
       
        <FontAwesome name="search" size={30} style={{marginRight:10}} 
        onPress={()=>navigation.navigate("search")}
         />            
         <MaterialCommunityIcons name="logout" size={30} style={{marginRight:10}} 
        onPress={()=>navigation.navigate("logout")}
         />  
         <Ionicons name="ios-settings-sharp" size={30} style={{marginRight:10}} 
        onPress={()=>navigation.navigate("setting")}
         />    
         </View> 
        
      ),
      // headerShown:false
      
    
    }}
      // headerTitle: props => <LogoTitle {...props} /> }}
    />
    <Stack.Screen name="register" component={register}
     options={{  
      headerRight:()=>(
        <FontAwesome name="search" size={30} style={{marginRight:10}} 
        onPress={()=>navigation.navigate("search")}
         />    
      )}} 
      />
    <Stack.Screen name="search" component={search} 
     options={{  
      headerTitle:()=>(
        <View style={{marginleft:60}}>
        <TextInput placeholder="Search"/>
        </View>
      ),
      headerRight:()=>(
        <FontAwesome name="search" size={30} style={{marginRight:10}} 
        onPress={()=>navigation.navigate("search")}
         />    
      )}} 
    />
      <Stack.Screen name="login" component={login} 
       options={{  
        headerRight:()=>(
          <FontAwesome name="search" size={30} style={{marginRight:10}} 
          onPress={()=>navigation.navigate("search")}
           />    
        )}} 
        />
      <Stack.Screen name="Details" component={Details} 
       options={{  
        headerRight:()=>(
          <FontAwesome name="search" size={30} style={{marginRight:10}} 
          onPress={()=>navigation.navigate("search")}
           />    
        )}} />
        
        <Stack.Screen name="setting" component={setting} 
       options={{  
        headerRight:()=>(
          <FontAwesome name="search" size={30} style={{marginRight:10}} 
          onPress={()=>navigation.navigate("search")}
           />    
        )}} />

        <Stack.Screen name="logout" component={logout} 
        options={{  
         headerRight:()=>(
           <View>
             <Text  onPress={()=>navigation.navigate("login")}>เข้าสู่ระบบสมาชิก</Text>
           </View>
         )}} 
         
      // options={{
      //   title: 'Detail',
      //   headerStyle: {
      //     backgroundColor: '#f4511e',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // }}
      />
      
      <Stack.Screen name="scanqr" component={scanqr}
       options={{  
        headerRight:()=>(
          <FontAwesome name="search" size={30} style={{marginRight:10}} 
          onPress={()=>navigation.navigate("search")}
           />    
        )}}  />
     
    </Stack.Navigator>
  );
}
const detailstacknavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="details" component={detail} />
      </Stack.Navigator>
    );
  }
  const basketstacknavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="register" component={register} />
      </Stack.Navigator>
    );
  }
  const productstacknavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="register" component={product} />
      </Stack.Navigator>
    );
  }
  const qrstacknavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="scanqr" component={scanqr} />
      </Stack.Navigator>
    );
  }

export { MainStackNavigator
  ,detailstacknavigator 
  ,basketstacknavigator
  ,qrstacknavigator  
  ,productstacknavigator
};