import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Share} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';
import Bookingdetails from './Bookingdetails';
import { createStackNavigator } from '@react-navigation/stack';

const Bookings=({navigation})=>{

  
    const OrderCardClickable=({orderId,name,date,time,status})=>{
        return(
            <>
            <TouchableOpacity  onPress={()=>{navigation.navigate('Bookingdetails')}}>
            <View style={{width:'88%',height:92,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15,justifyContent:'space-evenly'}}>
                <Text style={{color:'black'}}>Order ID : {orderId} </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                <Text  style={{color:'#FF3737',fontSize:15,fontWeight:'500',lineHeight:22,fontFamily:'Poppins-Regular'}}>{name}</Text>
                <View style={{backgroundColor:(status=='completed'?'#FF3737':'#1AA51F'),width:91,height:31,borderRadius:10,alignItems:'center',justifyContent:'center'}}><Text style={{color:'white'}}>{status}</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>{date}</Text>
                    <Text>{time}</Text>
                </View>
            </View>
            </TouchableOpacity>
            </>
        )
    }

    const shareData = async () => {
        try {
            await Share.share({
                message:
                    'Sharing to join and test the app from the mentioned link:https://drive.google.com/file/d/1J_HMdSab_pU1o-KtSR3OAHdisx824ow_/view?usp=sharing',
            });
        } catch (error) {
            alert(error.message);
        }
      };
    useEffect(()=>{
       
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:0}}>
            <Header nav={navigation} title={'My Bookings'}/>
            <View style={{marginBottom:100,marginTop:20}}>
            <OrderCardClickable  navigation={navigation} orderId={123123143} name={'Loreal Salon & Spa'} date={'03/07/2022'} time={'15:23 '} status={'upcoming'}/>
            <OrderCardClickable  navigation={navigation} orderId={123123143} name={'Loreal Salon & Spa'} date={'03/07/2022'} time={'15:23 '} status={'completed'}/>
           </View>
           <Button onPress={()=> shareData()}   title={'Share'} buttonStyle={{width:'80%',height:53,alignSelf:'center',backgroundColor:'#EA2424',borderRadius:10,marginVertical:30}} />
        </ScrollView>
    )

}
const Stack=createStackNavigator();
const BookingNavigation=()=>{
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },   
        }} 
        initialRouteName={'Bookings'}>
              
            <> 
            <Stack.Screen name="Bookings" component={Bookings} /> 
            <Stack.Screen name="Bookingdetails" component={Bookingdetails} options={{
                headerShown:false
            }}
            /> 
            
            </>
          </Stack.Navigator>
    )
}

export default BookingNavigation;