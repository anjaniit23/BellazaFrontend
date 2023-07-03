import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../components/Header';

const Bookingdetails=({navigation})=>{
    
const OrderCard=()=>{
    return(
        <View style={{width:'88%',height:89,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15}}>
            <Text style={{color:'black'}}>Order ID : GISo7OmXnp59 </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Time :</Text> 19:07</Text>
            <Text style={{color:'green'}}>(invoice received)</Text>
            </View>
          
            <Text style={{color:'black'}}><Text style={{color:'black'}}>Booking Date :</Text> April 15 2022</Text>
            
        </View>
    )
}
  
    const Card=({name,time,price,duration})=>{
        return(
            <>
           
            <View style={{width:'88%',height:80,borderColor:'#ACACAC',borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:20,padding:15,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={{color:'black',fontSize:13,fontWeight:'600',lineHeight:19.5}}>{name} </Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:9,color:'#748AF9',marginRight:15}}>₹ {price}/-</Text>
                        <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:9,color:'black'}}>{duration}</Text>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Poppins-Regular',fontWeight:'400',fontSize:13,color:'#554B4B'}}>Time Slot : {time}</Text>
                </View>
               
               
               
            </View>
            </>
        )
    }

    
    useEffect(()=>{
       
    },[])
    return(
        <ScrollView style={{backgroundColor:'white',flex:1,paddingTop:0}}>
            <Header nav={navigation} title={'My Bookings'}/>
            <Text style={{paddingLeft:25,fontFamily:'Poppins-Regular',color:'#FF3737',fontSize:20,lineHeight:22.5,marginTop:20,fontWeight:'600'}}>Loreal Salon & Spa</Text>
            <Text style={{paddingLeft:25,fontFamily:'Poppins-Regular',color:'#554B4B',fontSize:15,lineHeight:22.5,marginTop:18,fontWeight:'500'}}>Appointment Date : <Text>03/07/2022</Text></Text>
            <Text style={{paddingLeft:25,fontFamily:'Poppins-Regular',color:'#554B4B',fontSize:15,lineHeight:22.5,marginTop:18,fontWeight:'500'}}>Time Slot : 05:00 PM</Text>
            <Text style={{paddingLeft:25,fontFamily:'Poppins-Regular',color:'#554B4B',fontSize:15,lineHeight:22.5,marginTop:18,fontWeight:'500'}}>Status : <Text style={{color:'#4CAF50',fontWeight:'600'}}>Upcomming</Text></Text>
            <View style={{marginBottom:30,marginTop:20}}>
            <Card name={'Haircut(M)'} time={'05:30 PM'} price={150} duration={'15 min'} />
            <Card name={'Haircut(M)'} time={'05:30 PM'} price={150} duration={'15 min'}/>
           </View>
           <View style={{width:'88%',height:115,alignSelf:'center',backgroundColor:'#F3F3F3',padding:15,justifyContent:'space-evenly',borderRadius:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'Poppins-Regular',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Subtotal</Text>
                    <Text style={{fontFamily:'Poppins-Regular',color:'#787878',fontSize:12,lineHeight:18,fontWeight:'500'}}>₹ 500/-</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'Poppins-Regular',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Booking Charge</Text>
                    <Text style={{fontFamily:'Poppins-Regular',color:'#787878',fontSize:12,lineHeight:18,fontWeight:'500'}}>₹ 50/-</Text>
                </View>
                <View style={{borderBottomColor:'#DEDEDE',borderBottomWidth:1}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'Poppins-Regular',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Payable Amount</Text>
                    <Text style={{fontFamily:'Poppins-Regular',color:'black',fontSize:12,lineHeight:18,fontWeight:'500'}}>₹ 550/-</Text>
                </View>
           </View>
           <View style={{width:'88%',alignSelf:'center',alignItems:'flex-end',marginTop:30,marginBottom:30}}>
            <Button title={'Reschedule'} buttonStyle={{backgroundColor:'#FF3737',width:120,height:36,borderRadius:10}} titleStyle={{color:'white'}}/>
           </View>
        </ScrollView>
    )
}

export default Bookingdetails;