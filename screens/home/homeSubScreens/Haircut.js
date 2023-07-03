import React, { useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const oneS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const twoS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const threeS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const fourS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)
const fiveS=(
    <View style={{flexDirection:'row'}}>
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
        <Image source={require('../../../statics/star2.png')} />
    </View>
)

const ServiceScroll=({navigation,sname,rating,price,desc})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Haircutdetails')}>
                <View  style={{flexDirection:'row', borderRadius:8,marginTop:20,height:155, width:'90%',alignSelf:'center'}}>
                <View style={{flex:2,justifyContent:'flex-start'}}>
                        <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:18,lineHeight:27,fontWeight:'600'}}>{sname}</Text>
                        <Text style={{color:'#ACACAC',fontFamily:'Poppins-Regular',fontSize:9,lineHeight:13,fontWeight:'500',marginTop:4}}>Rating</Text>
                        <View style={{flexDirection:'row'}}>
                        <Image source={require('../../../statics/star2.png')} style={{marginRight:10,marginTop:5}} />
                        <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:9,lineHeight:13,fontWeight:'500',marginTop:4}}>{rating} out of 5</Text>
                        </View>
                        <Text style={{color:'#ACACAC',fontFamily:'Poppins-Regular',fontSize:9,lineHeight:13,fontWeight:'500',marginTop:4}}>₹ {price}/-</Text>
                        <Text style={{maxWidth:250,overflow:'hidden'}}>--------------------------------------------------------------</Text>
                        <Text style={{color:'#ACACAC',fontFamily:'Poppins-Regular',fontSize:9,lineHeight:13,fontWeight:'400',width:198,marginTop:4}}>{desc}</Text>
                        <Text style={{color:'#4196F8',fontFamily:'Poppins-Regular',fontSize:10,lineHeight:15,fontWeight:'500',marginTop:4}}>View details</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                    <Image source={require('../../../statics/banner.png')} style={{width:95,height:95,borderRadius:6}}/>
                    <Button title="Book" titleStyle={{color:'#FF3737',fontSize:12,marginTop:-5}} buttonStyle={{backgroundColor:'white',borderColor:'#FF3737',borderWidth:2,width:92,height:33,marginTop:20,borderRadius:6}}/>
                </View>
                </View>
                <View style={{width:'100%',height:8,backgroundColor:'#E7E7E7',marginTop:20}}></View>
            </TouchableOpacity>
            
        </View>
       
    )
}
const Haircut=({navigation})=>{
    const [category,setCategory]=useState('Haircut');
    const changeCateg=(service)=>{
        setCategory(service);
    }
    return(
        <ScrollView style={{backgroundColor:'white',height:500,flex:1}}>
            <Header nav={navigation} title="Haircut"/>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',paddingRight:0,alignSelf:'center',marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderColor:'gray',borderWidth:1,width:'85%',backgroundColor:'#F9F9F9',paddingLeft:25,borderRadius:8,height:45}}>
                    <Icon
                        name="search"
                        size={25}
                        color="gray"
                        iconStyle={{alignSelf:'center'}}
                    />
                    <TextInput
                        style={{width:'80%',borderWidth:0,borderRadius:0, color: 'white',alignSelf:'center',backgroundColor:'transparent',marginTop:0}}
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
                        <LinearGradient  colors={['#FF5353', '#9A0000DB']} style={{width:'100%',height:45,alignItems:'center',justifyContent:'center',borderRadius:8}}>
                            <Icon name="tune" size={30} color="white"/>
                    </LinearGradient>
                    </View>
                </TouchableOpacity>
                
            </View>
            <View style={{width:'100%',height:8,backgroundColor:'#E7E7E7',marginTop:30}}></View>
            <View style={{marginBottom:30}}>
            <ServiceScroll 
                navigation={navigation}
                sname={'Loreal Salon & Spa'}
                rating={'4.5'}
                price={'150'}
                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
            />
            <ServiceScroll 
                navigation={navigation}
                sname={'Loreal Salon & Spa'}
                rating={'4.5'}
                price={'150'}
                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
            />
             <ServiceScroll
                navigation={navigation} 
                sname={'Loreal Salon & Spa'}
                rating={'4.5'}
                price={'150'}
                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
            />
            <ServiceScroll 
                navigation={navigation}
                sname={'Loreal Salon & Spa'}
                rating={'4.5'}
                price={'150'}
                desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
            />
            </View>
            
        </ScrollView>
    )
}

export default Haircut;
const styles = StyleSheet.create({
    wrapper: {
        marginTop:30
    },
    slide1: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      backgroundColor: 'white'
    },
    slide4: {
        flex: 1,
        backgroundColor: 'white'
      },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })