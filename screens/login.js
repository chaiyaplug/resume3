import React from 'react'
import {TextInput,Text,View,Button, ScrollView,StyleSheet,flex,Image} from 'react-native'
// import register from './screens/register'
const login=({navigation})=>{
    const styles = StyleSheet.create({
        container: {
          display: flex,
          flex: 1,
          backgroundColor: '#fff',
          marginTop: 30
        },
        input: {
            borderRadius:50,
            height: 40,
            margin: 12,
            borderWidth: 1,
          },
          Header: {
            flex: 5,
            justifyContent: "space-around",
            backgroundColor: "white",
            alignItems: "center"
          },
          image: {
            flex: 1,
            resizeMode: "cover",
            // justifyContent: "center",
            width: '100%',
            height: '100%'
          },
          button: {
            flex: 1,
            backgroundColor: '#DDDDDD',
            padding: 10
            // marginBottom:10,
            // marginTop:30
            // width: '80%',
            // height:'80%',
          },
          Text1: {
            flex: 1,
            color: 'green',
        
        
          },
          button2: {
            flex: 1,
            backgroundColor: '#DDDDDD'
            //,
            // padding:10,g
            // marginBottom:10,
            // marginTop:30,
            // width: '80%',
            // height:'80%',
            // backgroundImage: url('https://www.wpthaiuser.com/wp-content/uploads/2015/07/url.png')
          },
    })
return(
 <View >
     <ScrollView>
     <View style={styles.container}>
                    <View style={{flexDirection:"row",justifyContent:"flex-end"}} >
                    

                    <Image source={require('../picture/pngegg.png')} style={{width:100,height:100 ,resizeMode:"stretch"}} />
                    {/* <Image source={require('../picture/delivery.png')} style={{width:100,height:100 ,resizeMode:"stretch"}} /> */}
                    <Image source={require('../picture/test.gif')} style={{width:50,height:50 ,resizeMode:"stretch"}} />
                    </View>
                        <View>
                                                <View style={{alignContent:"center",justifyContent:"center",flex:0.5}}>
                                            
                                            {/* <View style={styles.Header}> */}
                                            <Text style={{ backgroundColor: "blue",opacity:0.2, fontSize: 30, borderRadius: 50}} >Auto Backup Easypos</Text>
                                            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/th/a/ae/MK_Restaurants_Logo.png" }} style={{ width: 100, height: 100, backgroundColor: "yellow" ,borderRadius:50,resizeMode:"cover",alignSelf:"center"}} />
                                            <Text style={{ backgroundColor: "black" }}>เข้าสู่ระบบสมาชิก</Text> 
                                        
                                            </View>
                        </View>
                        <View>
                        
          <TextInput style={styles.input} placeholder="Username" placeholderTextColor="green" />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
        
            placeholder="Password" placeholderTextColor="red"
           // keyboardType="numeric" //ตัวเลข
         
          />
                        </View>
            <View style={{flex:0.5}}>
                      <Button title='Login' >
                    </Button>
                    <Button title='Create New Account'  onPress={()=>navigation.navigate("register")}>
                    </Button>
                    <Button title='Change Password'>
                    </Button>          
            </View>
          
     </View>
    
      
       
       {/*  <Tab>
  <Tab.Item title="Recent" />
  <Tab.Item title="favourite" value="0" />
  <Tab.Item title="cart" />
</Tab>
        <ImageBackground source={image} style={styles.image}>
       

          <View style={styles.Header}>
            <Text style={{ backgroundColor: "blue", fontSize: 30, borderRadius: 50 }} >Auto Backup Easypowws</Text>
            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/th/a/ae/MK_Restaurants_Logo.png" }} style={{ width: "100%", height: "50%", backgroundColor: "yellow" ,borderRadius:50}} />
            <Text style={{ backgroundColor: "black" }}>เข้าสู่ระบบสมาชิก</Text> */}
            {/* <Text style={styles.Text1}>Auto Backup Easypos</Text>
        <Text style={styles.Text1}>เข้าสู่ระบบสมาชิก</Text> */}
        {/* //   </View> */}
        
        {/* // <View style={{ flex: 5 }}>
        //   <TextInput style={styles.input} placeholder="Username" placeholderTextColor="green" />
        //   <TextInput */}
        {/* //     style={styles.input}
        //     secureTextEntry={true}
        
        //     placeholder="Password" placeholderTextColor="red"
        //    // keyboardType="numeric" //ตัวเลข
         
        //   /> */}
           
       
     
    {/* //     </View> */}
    {/* // </ImageBackground>
    */}
    </ScrollView>
    </View>

)
}
export default login