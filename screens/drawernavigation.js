import React from "react";

import { createDrawerNavigator ,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { ContactStackNavigator,detailstacknavigator } from "./stacknavigator";
import TabNavigator from "./tabnavigator";

// import {basketstacknavigator} from '../screens/basket'
const Drawer = createDrawerNavigator();
// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }
const DrawerNavigator = () => {
  return (
    
    <Drawer.Navigator
    //   drawerContent={props => <CustomDrawerContent {...props} 
    // />}
    >
      
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="details" component={detailstacknavigator} />
      {/* <Drawer.Screen name="basketstacknavigator" component={basketstacknavigator} />
      <Drawer.Screen name="productstacknavigator" component={productstacknavigator} />
      <Drawer.Screen name="qrstacknavigator" component={qrstacknavigator} /> */}
    </Drawer.Navigator>
  );
}


export default DrawerNavigator;