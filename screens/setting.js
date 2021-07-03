import React, { useState,useEffect,useRef } from "react";
import {ScrollView, Text, View, Switch, StyleSheet } from "react-native";
import { AppContext } from './Appcontext'
// import {SliderScreen } from './slider'
import {List ,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />




const setting = ({navigation}) => {
    const  newref1=useRef(true)
//    newref1=context.calosel1
   const  newref2=useRef(true)
//    newref2=context.calosel2
   const newref3=useRef(true)
    const context = React.useContext(AppContext);
    console.log(context);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => 
   {    console.log(newref1.current,value)
    //    newref1.current.value=newref1.current.value
//   setIsEnabled(previousState => !previousState);

  }
  

  const Newsetting=()=>{

    return(
        <View>
<View style={{flexDirection:"row" ,justifyContent:"space-around",flexWrap:"wrap" ,margin:20}}>
       <Text>เปิดการแสดง cousel เคลื่อนไหวแถบแรก</Text>    
      <Switch
      style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "white" : "black"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={context.calosel1}
      />
      </View>
                        <View style={{flexDirection:"row" ,justifyContent:"space-around",flexWrap:"wrap" ,margin:20}}>
                        <Text>เปิดการแสดง cousel เคลื่อนไหวแถบสอง</Text>    
                        <Switch
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                        trackColor={{ false: "red", true: "green" }}
                        thumbColor={isEnabled ? "white" : "black"}
                            ios_backgroundColor="#3e3e3e"
                            ref={newref1}
                            onValueChange={toggleSwitch}
                            value={newref1?context.calosel1:newref1}
                        />
                        </View>
                                                            <View style={{flexDirection:"row" ,justifyContent:"space-around",flexWrap:"wrap" ,margin:20}}>
                                        <Text>เปิดการแสดงรายการสินค้า</Text>    
                                        <Switch
                                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                                        trackColor={{ false: "red", true: "green" }}
                                        thumbColor={isEnabled ? "white" : "black"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch}
                                            value={context.listitem}
                                        />
                                        </View>
                                        </View>)
useEffect(() => {
    alert("test")
    
    
 },[])

    }

const Listitem = () => {
    const [expanded, setExpanded] = React.useState(true);
  
    const handlePress = () => setExpanded(!expanded);
  
    return (
      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
  
        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
  };

  const switch1=()=>{
    <View style={{flexDirection:"row" ,justifyContent:"space-around",flexWrap:"wrap"}}>
    <Text>นำ colasel ออก</Text>    
   <Switch
     trackColor={{ false: "#767577", true: "#81b0ff" }}
     thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
     ios_backgroundColor="#3e3e3e"
     onValueChange={toggleSwitch}
     value={isEnabled}
   />
   </View>
   
useEffect(() => {
  
   alert("test")
   
},[])

  }
  return (
    <ScrollView>
    <View style={styles.container,{flexDirection:"column"}}>
       {/* <Slider/> */}
    <Newsetting/>
      {/* <MyComponent/> */}
      <Listitem/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default setting;