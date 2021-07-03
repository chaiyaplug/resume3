import React,{useRef,useEffect,useState} from 'react'
import axios from 'axios';
import {RefreshControl,Text,View,StyleSheet,FlatList, ScrollView,Button,Image,Dimensions,ActivityIndicator} from 'react-native'
import { call, set } from 'react-native-reanimated';
import firestore from '../database/firebase'
import firebase from 'firebase/app'
import register,{image} from './register';
import { Buffer } from 'buffer'
  const {width,height}=Dimensions.get("screen")
  const product=()=>{
    const [person,setPerson] = useState([])
    const [selectedId, setSelectedId] = useState(null);
    const imageW=width *0.9
    const imageH= height* 1.54
    const [image,setImage] =useState(null)
    const [tempimage,setTempimage]=useState([])
    const [isloading,setIsloading]=useState(true)
    const [isloading2,setIsloading2]=useState(true)
    const [isloading3,setIsloading3]=useState(true)
    const [new1,setNew1]=useState(null)
    const [refreshing, setRefreshing] = React.useState(false);
    // const [myRefs]= useRef([])
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }
   
    const onRefresh =  ()=>{
      setIsloading(true)
          setTempimage([])
             firestore.collection("users").where("imagenew", "!=", null).get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => { 
          // doc.data() is never undefined for query doc snapshots
          // alert(doc.id)
          // console.log(doc.id, " => ", doc.data());
          console.log(doc.id);
           setTempimage(oldtempimage=>[...oldtempimage,{imagenew:doc.data().imagenew}])
           setIsloading(false)
          // setImage({imagenew:doc.data().imagenew})
          
          // console.log(tempimage)
      });
      
    });

    }
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         paddingTop: 22
        },
        item: {
          padding: 10,
          fontSize: 18,
          height: 44,
          color:"red"
        },
      });    
    
const order =()=>{

  
    axios.get('http://192.168.1.50:8090/api/orders/')
    .then((res)=>{
      console.log(res.data)
      setNew1(res.data)
      setIsloading2(false)
    })
    .catch(err=>{alert(err)})
  }

  function NumberList() {
    const listItems = new1.map((number,index) => {
     const  img = new Buffer.from(number.picture.data).toString("base64")    
                return(
                            <View  key={index} style={{borderColor:"white",borderWidth:2,height:200,justifyContent:"space-evenly",marginBottom:20}}>
                        <Text >{number.itemid}</Text>
                        <Text >{number.itemcode}</Text>
                        <Text >{number.itemdesc}</Text>
                        <Text >{number.engitemdesc}</Text>
                     {/* {number.picture!==null ?  */}
                      <Image 
        source={{uri:`data:image/png;base64,${img}`}} 
         style = {{ width: 100, height:100,resizeMode:"contain",margin:20,position:"absolute",alignSelf:"flex-end",right:30}}
        />   
              
                        <View style={{flexDirection:"row",borderWidth:2}}>
                          
                              <View style={{flex:0.5 ,flexDirection:"row",justifyContent:"space-around"}}>
                                <View>
                                <Text fontSize={5}>0</Text>
                                </View>
                                <View>
                                <Button title="เพิ่ม" color="green"/>
                        
                                </View>
                                <View >
                                <Button title="ลด" color="red"/>
                                </View>
                              </View>
                                          <View style={{flex:0.5,alignContent:"flex-end"}}>
                                            <View >
                                              <Button title="ตกลง"/>
                                            </View>
                                                
                                          </View>
                                          </View> 
                        </View>
                        
              )})
    
     
            return(
              <View style={{flex:1,borderWidth:2}}>
                {listItems}
                </View>
            )
  
  }

  useEffect(()=> {

    order ()
    

    firestore.collection("users").where("imagenew", "!=", null).get().then((querySnapshot) => {
      
        querySnapshot.forEach((doc) => { 
          // doc.data() is never undefined for query doc snapshots
          // alert(doc.id)
          // console.log(doc.id, " => ", doc.data());
          // console.log(doc.id);
           setTempimage(oldtempimage=>[...oldtempimage,{imagenew:doc.data().imagenew}])
         setIsloading(false)
          // setImage({imagenew:doc.data().imagenew})
          
          // console.log(tempimage)
      });
      
    });
    return (
      setTempimage([])
    )   
  },[image])
  const flatlistpicture=()=>{
    // alert(image)
    return(
      
        <FlatList 
        horizontal
        pagingEnabled
        data={tempimage}
        renderItem={({item}) =>   {
            
        return(
         
          <View style={{width,alignItems:"center"
        ,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.50,
          shadowRadius: 12.35,          
          elevation: 19
    
          }}>
         {/* <Image 
        source={{uri:"https://firebasestorage.googleapis.com/v0/b/resume-e93cd.appspot.com/o/563000008493301.jpg?alt=media&token=552abf17-d398-4804-afa7-3339177efd99"}} 
        style = {{ width: imageW, height:imageH,borderRadius:16 }}/>     */}
        <Image 
        source={{uri:`data:image/png;base64,${item.imagenew}`}} 
        style = {{ width: imageW, height:200,borderRadius:16 ,resizeMode:"cover"}}/>  
        </View>
        )
        
        }
        
    }            
        keyExtractor={(item, index) => index.toString()} /// ต้องใส่ฟอร์มนี้ เพื่อให้ อ้างอิงถึง key ได้
        />           
    )
   
  }
  const flatlistpicture2=()=>{
    // alert(image)
    return(
        <FlatList 
        horizontal
        // pagingEnabled // ถ้าไม่มี pagingenable จะเลื่อนทีเดียว ไม่เลื่อนทีละหน้าข้าม
        data={tempimage}
        renderItem={({item}) =>   {
            
        return(
         
          <View style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.50,
          shadowRadius: 12.35,          
          elevation: 19
    
          }}>
         {/* <Image 
        source={{uri:"https://firebasestorage.googleapis.com/v0/b/resume-e93cd.appspot.com/o/563000008493301.jpg?alt=media&token=552abf17-d398-4804-afa7-3339177efd99"}} 
        style = {{ width: imageW, height:imageH,borderRadius:16 }}/>     */}
        <Image 
        source={{uri:`data:image/png;base64,${item.imagenew}`}} 
        style = {{ width: 200, height:200,borderRadius:16 ,resizeMode:"cover",margin:20}}/>  
         
        </View>
        )
        
        }
        
    }            
        keyExtractor={(item, index) => index.toString()} /// ต้องใส่ฟอร์มนี้ เพื่อให้ อ้างอิงถึง key ได้
        />           
    )
   
  }
    return (
   
        <ScrollView  style={styles.container}  refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View style={{flex:0.5,display:"flex"}}>
        {(isloading)?<ActivityIndicator size="large" color="#00ff00" />    :flatlistpicture()}
        {(isloading)?<ActivityIndicator size="large" color="#00ff00" />    :flatlistpicture2()}
        </View>
        <View style={{flex:0.5}}>
        {(isloading2)?<ActivityIndicator size="large" color="#00ff00" />    :<NumberList new1={new1}/>}
        </View>
         </ScrollView>
      
        
        
    )
  }
  export default product

  
  const list = (item) => {
    return item.map((element,index) => {
      return (
          
        <View  key={index} style={{margin: 10 ,backgroundColor:"gray",opacity:0.8,borderRadius:30,padding:20}}>
           
          <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/resume-e93cd.appspot.com/o/563000008493301.jpg?alt=media&token=552abf17-d398-4804-afa7-3339177efd99"}} style = {{ width: 200, height: 200 }}/>
          <Text>City:{element.address.city}</Text>
          <Text>latitude:{element.address.geo.lat}.... long:{element.address.geo.lng}</Text>
          <Text>ถนน:{element.address.street}</Text>
          <Text>เขต:{element.address.suite}</Text>
          <Text>ชื่อ:{element.name}</Text>
          <Text>เบอร์โทร:{element.phone}</Text>
          <Text>รหัสสมาชิก:{element.username}</Text>
          <Text>เว็บ:{element.website}</Text>

          <View style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",flexWrap:"wrap"}}>
          <Button  title="Backup ข้อมูล1" style={{opacity:0.1}}/>
          <Button title="โหลดไฟล์ลง2"/>
          <Button title="รันสคลิป3"/>              
          </View>
        
        </View>
         
        
      );
    });
  };
  const flatlist1=()=>{


    return(
        <FlatList
        data={person}
        renderItem={({item}) =>   
        <Text style={styles.item}>{item.address.city}{item.address.street}</Text>      
    } 
        
        keyExtractor={(item, index) => index.toString()} /// ต้องใส่ฟอร์มนี้ เพื่อให้ อ้างอิงถึง key ได้
        // extraData={selectedId}
        />
        
    )
  }

  //   var docRef = firestore.collection("users").doc("user0001");

//   docRef.get().then((doc) => {
//       if (doc.exists) {
//           // console.log("Document data:", doc.data());
//           Setimage(doc.data().imagenew)
     
//       } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//       }
//   }).catch((error) => {
//       console.log("Error getting document:", error);
//   });
// docRef.get().then((doc) => {
//     if (doc.exists) {
//         // console.log("Document data:", doc.data());
//         Setimage(doc.data().imagenew)
   
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

// firestore.collection("characters").doc("mario").set({
//   employment: "plumber111222333444555",
//   outfitColor: "red111222",
//   specialAttack: "fireball111222"
// })
      // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res=>{
    //           // setperson=res.data()
    //                 //  console.log(res.data)
    //             //  setPerson(res.data)
    //         })
  
        
   
    // firestore.collection("characters").doc("mario").set({
    //   employment: "plumber111222333444555",
    //   outfitColor: "red111222",
    //   specialAttack: "fireball111222"
    // })
    {/* <ScrollView >
            {list(person)}
            <View>
                {flatlist1()}
              
            </View>
        </ScrollView> */}
            // .then
            // .then(()=> setPerson(res.data)
            // ) 

 
    //   .then(res => {()
    //     // const persons = res.data;
    //     const persons = res.json()
    //    .then(person=>(
    //        {setPerson(person),
    //         console.log(person)
    //        })
    // })
   {/* <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
   <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      /> 
   


        
       
        
    //   <ul>
    //     { person.map(person => <li>{person.name}</li>)}
    //   </ul>
    */}