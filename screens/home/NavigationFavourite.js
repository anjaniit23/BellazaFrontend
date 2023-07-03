import React, { useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Favourite from './Favourite';
import FavouriteDetails from './favouriteSubScreens/FavouriteDetails';

const Stack=createStackNavigator();
const NavigationFavourite=()=>{
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#FFFFFF' },   
            }} 
            initialRouteName={'FavouriteContent'}>
                  
                <>
                <Stack.Screen name="FavouriteContent" component={Favourite} /> 
                <Stack.Screen name="FavouriteDetails" component={FavouriteDetails} /> 
                {/* <Stack.Screen name="GetOTP" component={GetOTP} />  */}
                {/* <Stack.Screen name="Login" component={Login} /> */}
                </>
              </Stack.Navigator>
    )
}

export default NavigationFavourite;