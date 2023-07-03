import React, { useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeContent from './homeSubScreens/HomeContent';
import Filters from './homeSubScreens/Filter';
import Haircut from './homeSubScreens/Haircut';
import Haircutdetails from './homeSubScreens/Haircutdetails';
import Checkout from './homeSubScreens/Checkout';
import Checkout2 from './homeSubScreens/Checkout2';
import CheckoutOffer from './homeSubScreens/CheckoutOffer';
import BookingConfirmed from './homeSubScreens/BookingConfirmed';

const Stack=createStackNavigator();
const NavigationHome=()=>{
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#FFFFFF' },   
            }} 
            initialRouteName={'HomeContent'}>
                  
                <> 
                <Stack.Screen name="HomeContent" component={HomeContent} /> 
                <Stack.Screen name="Filters" component={Filters} options={{
                    headerShown:false
                }}
                /> 
                 <Stack.Screen name="Haircut" component={Haircut}/> 
                 <Stack.Screen name="Haircutdetails" component={Haircutdetails}/>
                 <Stack.Screen name="Checkout" component={Checkout}/>
                 <Stack.Screen name="Checkout2" component={Checkout2}/>
                 <Stack.Screen name="CheckoutOffer" component={CheckoutOffer}/>
                 <Stack.Screen name="BookingConfirmed" component={BookingConfirmed}/>
                
                </>
              </Stack.Navigator>
    )
}

export default NavigationHome;