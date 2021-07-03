import React ,{useState,useEffect,useRef,useCallback,} from 'react'
import { Textarea, TextInput, Text, View, Button, ScrollView, StyleSheet, flex, Image, ImagePickerIOS,Platform,ActivityIndicator } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  AntDesignIcons from 'react-native-vector-icons/AntDesign'
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import firestore,{firebaseApp,googleprovider} from '../database/firebase'
import firebase from 'firebase/app'
import {google_formlogin} from './google_formlogin';
import BouncingPreloader from 'react-native-bouncing-preloader';
// function register(props){
//   <formregister name="" />

// }

const Registernew = (props) => { //component ต้องตัวใหญ่ R ใหญ่เท่านั้น

 
 
  const [check,SetCheck]=useState(true)
  const inputRef=useRef(true)
  const [image, setImage] = useState(null);
const [baseimage,setBaseimage]=useState(0)
const [imagearray,setImagearray]=useState([])


// const submitnew=(e)=>{
//   alert("test")
//   props.submit(props.username,props.password)

// }

  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true
    });
  //   imagearray.map(image1=>(
  //     alert(image1.uri)

  //  ))
    // await console.log(result);
   
    
    if (!result.cancelled) {
      await setImage(result.uri);
      setImagearray([...imagearray,result.base64])
      // alert(imagearray)
      // await    setBaseimage(result.base64)
      
      // await alert(baseimage)
       
    }
   
  };
  
  
 const checkit = useCallback( ////ฟังก์ชั่นนี้ไม่ได้ใช้ ไว้ใช้อ้างอิงเหมือน doucment.getelementbyid
   () => {
    // alert(inputRef)
    if(check==true){
    inputRef.current.setNativeProps({secureTextEntry:{check}})
      // alert("test")
      SetCheck("false")
      // alert(check)
    }
    else
    {
      
    inputRef.current.setNativeProps({secureTextEntry:{check}})
    //  alert("test")
    //  alert(inputRef)
    SetCheck("true")
    }
   },
   []
 )
 useEffect(() => {
 
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();
}, [imagearray]);
  return (
    
    <View style={styles.center}>
      <Text>สมัครสมาชิก</Text>
      <View>
      {/* <MaterialCommunityIcons.Button name="form-textbox-password" style={{width:50,height:50}}>
  </MaterialCommunityIcons.Button> */}
  </View>
      <View style={{flexDirection: "row" }}>
                  <View style={{ flex: 0.3,height:40,margin:12,padding:10}}>
                    <Text >ชื่อผู้ใช้: </Text>
                    </View>
                          <View style={{ flex: 0.7 }} >
                          <TextInput onChangeText={text=>props.setusernamenew(text)}   style={{borderRadius:25,height:40,borderWidth:1,margin:12,padding:10,position:"relative"}} placeholder="Username" placeholderTextColor="green" />
                          
                          </View>                
                          
      </View>
      <View style={{flexDirection: "row" }}>
                  <View style={{ flex: 0.3,height:40,margin:12,padding:10}}>
                    <Text >รหัสผ่าน: </Text>
                    </View>
                          <View style={{ flex: 0.7 }} >
                          <TextInput onChangeText={text=>props.setPasswordnew(text)} secureTextEntry={check} style={{borderRadius:25,height:40,borderWidth:1,margin:12,padding:10}} placeholder="password" placeholderTextColor="red" />
                          <MaterialCommunityIcons style={{position:"absolute",height:40,margin:12,padding:10,right:10}} name="form-textbox-password" size={20} onPress={()=>SetCheck(!check)}/>
                          </View>                
                          
      </View>
      <View style={{flexDirection: "row" }}>
                  <View style={{ flex: 0.3,height:40,margin:12,padding:10}}>
                    <Text >ใส่รหัสผ่านซ้ำ: </Text>
                    </View>
                          <View style={{ flex: 0.7 }} >
                          <TextInput   name="repassword" secureTextEntry={true} style={{borderRadius:25,height:40,borderWidth:1,margin:12,padding:10}} placeholder="repeat password" placeholderTextColor="red" />
                          </View>                
                          
      </View>
      <View style={{flexDirection: "row" }}>
                  <View style={{ flex: 0.3,height:40,margin:12,padding:10}}>
                    <Text >รูปภาพ: </Text>
                    </View>
                    <View style={{ flex: 0.7 }} >
                    <AntDesignIcons style={{left:20 ,position:"absolute",height:40,margin:12,padding:10,}} name="pluscircle" size={20} onPress={pickImage}/>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
    </View>
                    </View>
                          
                  </View>
                  <View>

                    { (image) &&
                    <Image source={{ uri: image }} style={{width: 100, height: 100,alignSelf:"center" }} />}
                    </View>

                      {
                     imagearray &&
                    imagearray.map((imagenew)=>{(

                      firestore.collection("users")
                      .add({
                        imagenew:imagenew
                      })
                      .then(()=>{
                        alert("insert comple!!")
                      })
                      .catch(alert(alert.error))
                     
                            // <Image source={{uri:`data:image/png;base64,${imagenew}`}} style={{width: 100, height: 100,alignSelf:"center" }} />
                      // console.log(imagenew)
                    )
                  })
                    
                    }
                    
                   
      {/* shothand operation */ }
      <View style={{flexDirection: "column" }}>
                  <View style={{ flex: 0.3,height:40,margin:12,padding:10}}>
                    <Text >ที่อยู่: </Text>
                    </View>
                      
                          <View style={{ flex: 0.7 }} >
                          <TextInput   name="address" multiline={true} numberOfLines={3}  style={{borderRadius:25,height:40,borderWidth:1,margin:12,padding:10}} placeholder="ที่อยู่" placeholderTextColor="green" />
                          </View>      
                                    
                          
                          
      </View>
      <View style={{flexDirection: "row",marginTop:50 }}>
                  <View style={{ flex:1,height:40,margin:12,padding:10}}>
                   <Button title="สมัครด้วย email,password" color="#f194ff" onPress={()=>props.submit()}/>                        
                    </View>                         
                    <View style={{ flex:1,height:40,margin:12,padding:10}}>
                   <Button title="สมัครด้วย google" color="#f194ff" onPress={()=>props.googlesubmit()}/>                        
                    </View>   
                     
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    display: "flex",
     flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    borderRadius:50,
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});

const register=(props)=>
{
  const [isloading,setIsloading]=useState(false)
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const setusernamenew=(text)=>{
    setUsername(text)
    // alert(username)
  }
  const setPasswordnew=(text)=>{
    setPassword(text)
  }

  const submit= ()=>{
  // alert("test")
//   alert (username)
// alert(password)
setIsloading(true)
    firebaseApp.auth().createUserWithEmailAndPassword(username,password) 
       .then((result)=>{ 
        alert("บันทึกข้อมูลเสร็จสิ้น")
        setIsloading(false)
      })
      .catch((err)=>{
        alert(err)
        setIsloading(false)
      }
      )
    }
    
    const googlesubmit= ()=>{
      // alert("test")
    //   alert (username)
    // alert(password)
   
    setIsloading(true)
    firebaseApp.auth().signInWithRedirect(googleprovider)
           .then((result)=>{ 
            alert("บันทึกข้อมูลเสร็จสิ้น")
            setIsloading(false)
          })
          .catch((err)=>{
            alert(err)
            setIsloading(false)
          }
          )
        }
  return(
   
  <View style={{flex:1}}>
  {(isloading)?
  <ActivityIndicator size="large" color="#00ff00" style={{alignSelf:"center",justifyContent:"center",width:"100%",height:"100%"}} />:
<Registernew submit={submit} setusernamenew={setusernamenew} setPasswordnew={setPasswordnew} googlesubmit={googlesubmit} />
  }      
  </View>
  )
  }
export default register;

// const choosepicture1=() =>{
//   const options={}
//   ImagePicker.launchImageLibrary(options,response=>{
// console.log("response",response)

//   })

// }

// var options = {
//   title: 'Select Avatar',
//   customButtons: [
//     {name: 'fb', title: 'Choose Photo from Facebook'},
//   ],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images'
//   }
// };


// const choosepicture= ()=>{
//   ImagePicker.launchImageLibrary(options, (response)  => {
//     console.log("response",response)
  
    
//   });}

// const register=({navigation})=>{
// return(
// <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>

// {/* <Button title="Goback" onPress={()=>navigation.navigate('Home')}></Button> */}
// {/* <Button title="login" onPress={()=>navigation.navigate('login')}></Button> */}
// <Text onPress={()=>navigation.navigate('Home')}>Go back1111111111</Text>
// </View>

// )
// }

//      </View>



//        {/*  <Tab>
//   <Tab.Item title="Recent" />
//   <Tab.Item title="favourite" value="0" />
//   <Tab.Item title="cart" />
// </Tab>
//         <ImageBackground source={image} style={styles.image}>


//           <View style={styles.Header}>
//             <Text style={{ backgroundColor: "blue", fontSize: 30, borderRadius: 50 }} >Auto Backup Easypowws</Text>
//             <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/th/a/ae/MK_Restaurants_Logo.png" }} style={{ width: "100%", height: "50%", backgroundColor: "yellow" ,borderRadius:50}} />
//             <Text style={{ backgroundColor: "black" }}>เข้าสู่ระบบสมาชิก</Text> */}
//             {/* <Text style={styles.Text1}>Auto Backup Easypos</Text>
//         <Text style={styles.Text1}>เข้าสู่ระบบสมาชิก</Text> */}
//         {/* //   </View> */}

//         {/* // <View style={{ flex: 5 }}>
//         //   <TextInput style={styles.input} placeholder="Username" placeholderTextColor="green" />
//         //   <TextInput */}
//         {/* //     style={styles.input}
//         //     secureTextEntry={true}

//         //     placeholder="Password" placeholderTextColor="red"
//         //    // keyboardType="numeric" //ตัวเลข

//         //   /> */}



//     {/* //     </View> */}
//     {/* // </ImageBackground>
//     */}
//     </ScrollView>
//     </View>

// )
// }
