import React, {useState} from "react";
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import { Button,Icon } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const Card=({name,dis,above,rm})=>{
    const navigation=useNavigation();

    return(
        <>
       <TouchableOpacity onPress={()=>navigation.navigate('CheckoutOffer')}>
       <View style={{width:'100%',height:80,alignSelf:'center',marginVertical:10,paddingHorizontal:10,flexDirection:'row',borderColor:'#E3E3E3',borderWidth:1,borderRadius:10}}>
            <View style={{flex:2.6,justifyContent:'center'}}>
                <Text style={{color:'black',fontSize:13,fontWeight:'600',lineHeight:19.5,marginBottom:10}}>{name} </Text>
                <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:9,color:'#748AF9',marginRight:15}}>Flat ₹ {dis}/- on booking above ₹{above}/-</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
              {rm=='Apply'?(<Button title={'Apply'} titleStyle={{marginTop:-4,fontSize:12,color:'#FF3737'}} buttonStyle={{width:92,height:33,borderColor:'#FF3737',borderWidth:2,backgroundColor:'white',borderRadius:6}}/>):(<Button title={'Applied'} titleStyle={{color:'white',marginTop:-4,fontSize:12}} buttonStyle={{ borderRadius:6,width:92,height:33,borderColor:'#FF3737',borderWidth:2,backgroundColor:'#FF3737'}}/>)} 
            </View>
        </View>
       </TouchableOpacity>
    
        </>
    )
  }
const Offers=()=>{
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <Text style={{color:'black',fontWeight:'600',fontSize:18,fontFamily:'Poppins-Medium',textAlign:'center',justifyContent:'center', lineHeight:26,marginTop:30}}>Offer & Deals</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',paddingHorizontal:25, alignSelf:'center',marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',width:'85%',backgroundColor:'#F9F9F9',paddingLeft:25,borderRadius:8,height:45}}>
                   
                    <TextInput
                        style={{width:'90%',borderWidth:0,borderRadius:8, color: 'white',alignSelf:'center',backgroundColor:'#F9F9F9',height:44,paddingLeft:0}}
                        multiline={true}
                        editable={true}
                        // onChangeText={(text)=>{setSearch(text)}}
                        // value={search}
                        placeholderTextColor = "gray"
                        placeholder=" Search for salon, Services etc"
                ></TextInput>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Filters',{ns:4})}>
                    <View style={{alignItems:'center',width:40}}>
                        <LinearGradient  colors={['#FF3737','#FF3737', '#110101DB']} style={{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                            <Icon name="tune" size={30} color="white"/>
                    </LinearGradient>
                    </View>
                </TouchableOpacity>
               
            </View>
            <View style={{width:'100%',paddingHorizontal:25}}>
                <Text style={{color:'#FF3737',fontSize:9,fontWeight:'500',fontFamily:'Poppins-Regular',marginVertical:5}}>Invalid coupon code</Text>
                <View>
                    <Card name='Discount 100' dis='350' above='1500' rm='Applied'/>
                    <Card name='EID2022' dis='350' above='1500' rm='Apply'/>
                </View>
            </View>
          
              
            
          
        </View>
    )
}

export default Offers;