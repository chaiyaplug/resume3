import React,{useEffect,useState} from 'react'
import {ScrollView,Text,View,StyleSheet,FlatList} from 'react-native'
import firestore from '../database/firebase'
import firebase from 'firebase/app'
import {List ,Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const Details = () => {
  const [person,setPerson] = useState([])
  const [loading,setLoading]=useState(true)
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const MyComponent = () => (
    <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
  const onPositiveClickListener = async () => {
    // user has completed product tour_end
    try {
      await  firestore.collection("userid").get()
      .then((snapshot)=>{
                            snapshot.foreach((doc)=>{
                                                      if(doc.data()){
                                                        console.log(doc.acct)
                                                            console.log(doc.username)
                                                            console.log(doc.surname)
                                                            
                                                    
                                                }})
                        } 
      )}
    catch (error) {
    alert("error")
    }
  };

    useEffect(()=>{
      
      // onPositiveClickListener()
    
    },[])
    

    return (
      <ScrollView style={{flex: 1}}>
  
        
        
      
     
        
     
        <MyComponent/>
        <MyComponent/>
        <MyComponent/>
   
      </ScrollView>
     
      
    );
  };
  
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color:"red"
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


{/* <FlatList
data={person}      
renderItem={({item}) =>     
<Text style={styles.item}>{item.address.city}</Text>} 
keyExtractor={(item, index) => index.toString()}       /// ต้องใส่ฟอร์มนี้ เพื่อให้ อ้างอิงถึง key ได้ */}
// extraData={selectedId}
// />

 {/* <FlatList
data={person}
renderItem={({item,index}) =>   
<Text style={styles.item}>{item.address.city}</Text>}  /> */}
  {/* <FlatList
data={person}
renderItem={({item}) =>   
<Text style={styles.item}>{item.address.city}</Text>}  />   */}