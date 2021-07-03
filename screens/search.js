import React from 'react'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Image,Text,TextInput,View,ScrollView} from 'react-native'
const search=({navigation})=>{
return(
    <View style={{flex:1}}>
    {/* <View  style={{flex:0.1,flexDirection:"row"}}>
                <View style={{flex:0.8}}> 
            <TextInput placeholder="ค้นหา" placeholderTextColor="red" placeholderStyle={{marginLeft:20}}  style={{paddingLeft:20,marginLeft:0,marginTop:25,borderColor:"green",borderWidth:1,height:40,borderRadius:25}}/>
            </View>
            <View style={{flex:0.2, flexDirection:"column",marginLeft:30}}>
                <View style={{flex:0.5}}>
                <FontAwesome name="search" size={30} style={{marginLeft:10,marginTop:20}} />
                </View>

                <View style={{flex:0.5}}>
                <Text style={{marginTop:30}} >
                Search
                </Text>
                </View>
           
            </View>            
    </View> */}
    </View>
   
)

}



export default search