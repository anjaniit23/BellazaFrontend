import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';

const Help=({navigation})=>{
    return(
        <View style={{backgroundColor:'white',flex:1}}>
        <Header nav={navigation} title="Support" />
        <Text style={{paddingLeft:25,color:'#F55633',fontWeight:'bold',fontSize:18,fontFamily:'Poppins-Light',marginTop:30}}>We're here to help</Text>

        <View style={{flexDirection:'row',borderWidth:1,width:121,height:36,justifyContent:'space-evenly',borderRadius:22,alignItems:'center',marginLeft:25,marginTop:30,borderColor:'#F55633'}}>
            <Image 
                style={{width:20}}
                source={require('../../statics/phone.png')}
            />
            <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>Phone</Text>
        </View>

        <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins-Regular',marginTop:30,width:278,height:42,color:'black'}}>
        Call +91 766 800 9430 to speak to a support representative now
        </Text>
        <View style={{width:'100%',paddingLeft:-50 ,height:11,backgroundColor:'#E7E7E7',marginTop:5}}></View>
   
        <View style={{flexDirection:'row',borderWidth:1,width:121,height:40,justifyContent:'space-evenly',borderRadius:22,alignItems:'center',marginLeft:25,marginTop:20,borderColor:'#F55633'}}>
            <Image 
                style={{width:20}}
                source={require('../../statics/mail.png')}
            />
            <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>Email</Text>
        </View>
      
        <Text style={{paddingLeft:25,fontSize:11,fontFamily:'Poppins-Regular',marginTop:20,width:278,height:40,color:'black'}}>
        Send us an email to SUPPORT@BELLAZZA.IN , INFO@BELLAZZA.IN
        </Text>
        <View style={{width:'100%',paddingLeft:-50 ,height:11,backgroundColor:'#E7E7E7',marginTop:20}}></View>
        </View>
    )
}

export default Help;