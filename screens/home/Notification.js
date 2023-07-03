import React,{useState} from 'react';
import {View,Image,Text,ScrollView} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import Header from '../../components/Header';


const NotiCards=()=>{
    return (
        <View style={{flexDirection:'row',width:'100%',height:80,borderColor:'#E3E3E3',borderWidth:1,borderRadius:10,padding:10,alignItems:'center',marginVertical:15}}>
            <View style={{flex:0.7}}><Image source={require('../../statics/tick.png')} width={25} height={25}/></View>
            <View style={{flex:5}}>
                <Text style={{fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'500',lineHeight:19.5,color:'black'}}>Booking Confirmed</Text>
                <Text style={{fontFamily:'Poppins-Medium',fontSize:9,fontWeight:'400',lineHeight:13.5,color:'black'}}>Dear Kaif, your appintment with the Loreal salon & Spa on wed, Jun 29</Text>
            </View>
            <View style={{flex:0.5,alignSelf:'flex-start',alignItems:"flex-start",justifyContent:"flex-start"}}><Icon name="close"  size={20} color={'#FF3737'}/></View>
        </View>
    )
}
const Notification=({navigation})=>{
    return (
        <ScrollView style={{flex:1,backgroundColor:'white'}}>
            <View style={{paddingHorizontal:25}}>
                <NotiCards/>
                <NotiCards/>
            </View>
        </ScrollView>
    )
}

export default Notification;
