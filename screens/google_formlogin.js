import React,{useEffect,useState} from 'react'
import {Text,View,Button,StyleSheet,FlatList} from 'react-native'
import firestore,{googleprovider} from '../database/firebase'
import firebase from 'firebase/app'
const google_formlogin=(props)=>{
const [person,setPerson] = useState([])

useEffect(()=>{
alert("test")
  
})
return(
  <View></View>
)

//   const dbh =    firebase.firestore();
//   const userref= dbh.collection("userid")
//   .doc(props.username)
//   .set({
//     password:props.password,
//     image:props.image

//   })
//   .then(()=>{
//      alert("บันทึกข้อมูลเสร็จสิ้น")
//   }
// )
  ///////////////////////////////////////

   
// useEffect(()=>{
//   firebase.auth()
//   .createUserWithEmailAndPassword(props.email,props.password)
//   .then((result)=>{ 
//     alert("บันทึกข้อมูลเสร็จสิ้น")
//   },[])
//   .catch((err)=>{
//     alert(err)
//   }
//   )
// })
// return(
//   <View>
     
//   </View>
//     )
}
    ///////////////////////////////////////
    export default google_formlogin