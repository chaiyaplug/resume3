import React from 'react'
import {View,Alert} from 'react-native'
const logout=({navigation})=>{

  
        Alert.alert("Logout form","คุณต้องการออกจากระบบหรือไม่",[{text:"ตกลง",onPress:()=>navigation.navigate("login")},{text:"ยกเลิก"}])
    return(
        <View>

        </View>
    )
    
}

export default logout