// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
const HomeScreen = (props) => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

  const url = 'http://3.139.100.146:4002/api/getAllRecord'
 
 useEffect(()=>{
  fetch(url,{
  method: 'GET',
  headers: {
  'content-type':'application/json',
  'Accept':'application/json'
},
  })
  .then((response)=>response.json())
  .then((responseJson) =>  {
    console.log('res',responseJson)
    setData(responseJson.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  .finally(()=>setLoading(false))
 },[])
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View>
            {
              loading ?(<Text>Loading</Text>):(
        data.map((post)=>(
          <View style ={styles.item}>
        <Text>
            {post.firstName}
          </Text>
          <Text>
            {post.lastName}
          </Text>
          <Text>
            {post.phoneNumber}
          </Text>
          <Text>
            {post.email}
          </Text>
          </View>
        ))
      )}
       </View>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Home Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>  
        <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => props.navigation.replace('Auth')}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.replace('Auth')}>
              New Here ? Register
            </Text>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  container:{
    
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignContent: 'center',
    justifyContent:'flex-start',
    height: 20,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default HomeScreen;
