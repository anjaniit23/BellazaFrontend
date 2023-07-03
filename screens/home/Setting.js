import React,{useState} from 'react';
import {View,Image,Text,ScrollView} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SettiCards=({name,title})=>{
    return (
        <>
        <View style={{flexDirection:'row',width:'100%',height:40,borderRadius:10,margin:7,alignItems:'center',paddingLeft:35}}>
            <MaterialCommunityIcons
                  name={name}
                  size={25}
                  color={'#FF3737'}
                  style={{marginRight:25}}
                />
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'500',lineHeight:24}}>{title}</Text>
        </View>
        <View style={{width:'100%',height:8,backgroundColor:'#E7E7E7',marginTop:5}}></View>
    </>
    )
}
const SettiCards2=({name,title})=>{
    return (
        <>
        <View style={{flexDirection:'row',width:'100%',height:40,borderRadius:10,margin:7,alignItems:'center',paddingLeft:35}}>
        <Icon
                name={name}
                size={26}
                color={'#FF3737'}
                style={{marginRight:25}}
             />
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'500',lineHeight:24}}>{title}</Text>
        </View>
        <View style={{width:'100%',height:8,backgroundColor:'#E7E7E7',marginTop:5}}></View>
    </>
    )
}
const Settings=({navigation})=>{
    return (
        <ScrollView style={{flex:1,backgroundColor:'white'}}>
            <View style={{paddingHorizontal:0,marginTop:40}}>
                <SettiCards name='account-circle-outline' title='Edit Profle'/>
                <SettiCards2 name='favorite-border' title='Favourite'/>
                <SettiCards name='ticket-percent-outline' title='My Bookings'/>
                <SettiCards2 name='share' title='Share'/>
                <SettiCards2 name='local-offer' title='Offers & Deals'/>
                <SettiCards2 name='wc' title='Register as partner'/>
            </View>
            <Image source={require('../../statics/logout.png')} style={{alignSelf:'center',width:'50%',height:46,marginTop:20}}/>
        </ScrollView>
    )
}

export default Settings;
