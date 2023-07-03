/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, { useState,useEffect } from 'react';
 import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View ,ActivityIndicator} from 'react-native';
 import { useMemo } from 'react';
 import {Colors} from 'react-native/Libraries/NewAppScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { AuthContext } from './components/Context';
//  import Start from './screens/credentialsScreen/Start';
 import Login from './screens/credentials/Login';
import ResetPassword from './screens/credentials/Reset';
 import Start from './screens/credentials/Start';
 import Register from './screens/credentials/Register';
 import AsyncStorage from '@react-native-async-storage/async-storage';
import MyDrawer from './screens/home/Drawer';
import Home from './screens/home/Home';
import EnterOTP from './screens/credentials/EnterOTP';
import ConfirmPass from './screens/credentials/ConfirmPass';
 
 const Stack = createStackNavigator();
 const globalScreenOptions = {
   headerShown: false,
   cardStyle: { backgroundColor: '#FFFFFF' },
 };
 const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
 
 const App= () => {
   const [initialRouteName,setinitialRouteName] = useState(false);
   const [loading,setIsLoading]=useState(false)
   useEffect(() => {
    //  SplashScreen.hide();
    // getUserInfo();
   },[]);
   

 
           
   return (
     <>
       <ActivityIndicator style={{position:'absolute',top:'40%',alignSelf:'center'}} size='large' color="#F55633"  animating={loading}/>
       {loading==false?(
           <>
        <AuthContext.Provider value={'authContext'}> 
              <NavigationContainer >
                <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName={'Start'}>
                  
                <> 
                
                <Stack.Screen name="HomeVP" component={Home}  options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/> 
                <Stack.Screen name="Reset" component={ResetPassword}  options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/> 
                <Stack.Screen name="EnterOTP" component={EnterOTP}  options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/> 
                <Stack.Screen name="CP" component={ConfirmPass}  options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/> 
                <Stack.Screen name="Login" component={Login}  options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/>
                <Stack.Screen name="Start" component={Start}  options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/>
                <Stack.Screen name="Home" component={MyDrawer} options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/>
                <Stack.Screen name="Register" component={Register}  options={{
                      transitionSpec: {
                        open: config,
                        close: config,
                      },
                    }}/>
                {/* <Stack.Screen name="GetOTP" component={GetOTP} />  */}
                {/* <Stack.Screen name="Login" component={Login} /> */}
                </>
              </Stack.Navigator>
            </NavigationContainer>
    </AuthContext.Provider>
           </>
       ):null}
     
     </>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 