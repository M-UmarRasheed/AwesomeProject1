// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
 
 
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(false);
 
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('DrawerNavigationRoutes')
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
    }, 
    3000
    );
  }, []);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  }
});
