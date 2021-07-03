import React from 'react'
import {Text,View,ButtonS,StyleSheet} from 'react-native'



const Details = () => {
    return (
      <View style={styles.center}>
        <Text>This is the about screen</Text>
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
  
  export default Details;
// const Details=({navigation})=>{
// return(
// <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>

// {/* <Button title="Goback" onPress={()=>navigation.navigate('Home')}></Button> */}
// {/* <Button title="login" onPress={()=>navigation.navigate('login')}></Button> */}
// <Text onPress={()=>navigation.navigate('Home')}>Go back11</Text>
// </View>

// )
// }
// export default Details