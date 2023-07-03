import React, { useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CheckBox } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const Filters=({navigation,route})=>{
    const [gender,setgender]=useState({men:true,women:false,unisex:false});
    const [short,setshort]=useState({mp:true,clh:false,chl:false,nb:false});
    const [dist,setdist]=useState(0);
    const [price,setprice]=useState(0);
    //const navigation=useNavigation();
    const [rating,setRating]=useState(route.params.ns);
    const applyFilter=()=>{
      //  route.params.nav.navigate('Home');
    }
    const clearFilter=()=>{
        setgender({men:true,women:false,unisex:false});
        setshort({mp:true,clh:false,chl:false,nb:false});
      //  setdist(0);
      //  setprice(0);
    }
    return(
        <ScrollView style={{backgroundColor:'white',height:500,flex:1,paddingLeft:25}}>
           <Text style={{color:'black',alignSelf:'center',fontFamily:'Poppins-Regular',fontSize:20,fontWeight:'600',lineHeight:25,paddingTop:15}}>Filter</Text>
           <View>
           <View style={{alignSelf:'flex-start', width:'90%',marginVertical:20}}>
            <TouchableOpacity onPress={()=>clearFilter()} style={{width:90,alignSelf:'flex-end'}}>
            <Text style={{color:'#FF3737',width:90,textAlign:'right',fontFamily:'Poppins-Regular',fontSize:15,fontWeight:'600',lineHeight:22}}>Clear Filter</Text>
            </TouchableOpacity>
           </View>
            <Text style={{color:'black',alignSelf:'flex-start',fontFamily:'Poppins-Regular',fontSize:15,fontWeight:'600',lineHeight:22}}>Gender</Text>
            <View style={{flexDirection:'row',alignItems:'center',borderColor:'gray',borderWidth:0,justifyContent:'flex-start'}}>
                <CheckBox
                    title='Men'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={gender.men}
                    size={24}
                    checkedColor='#F55633'
                    containerStyle={{justifyContent:'center',alignContent:'center',marginRight:-10,backgroundColor:'white',borderWidth:0,marginLeft:-9}}
                    onIconPress={()=>{setgender({men:true,women:false,unisex:false})}}
                />
                <CheckBox
                    title='Women'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={gender.women}
                    size={24}
                    checkedColor='#F55633'
                    containerStyle={{justifyContent:'center',alignContent:'center',marginRight:-10,backgroundColor:'white',borderWidth:0}}
                    onIconPress={()=>{setgender({men:false,women:true,unisex:false})}}
                />
                <CheckBox
                    title='Unisex'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={gender.unisex}
                    size={24}
                    checkedColor='#F55633'
                    containerStyle={{justifyContent:'center',alignContent:'center',marginRight:-10,backgroundColor:'white',borderWidth:0}}
                    onIconPress={()=>{setgender({men:false,women:false,unisex:true})}}
                />
            </View>
            <Text style={{color:'black',alignSelf:'flex-start',fontFamily:'Poppins-Regular',fontSize:15,fontWeight:'600',lineHeight:22}}>Distance</Text>
            <Text style={{color:'#A6A6A6',alignSelf:'flex-start',textAlign:'right', width:'90%',fontFamily:'Poppins-Regular',fontSize:12,fontWeight:'600',lineHeight:22}}>{dist}Km</Text>
            <Slider
                 style={{width: '95%', height: 40,color:'red',marginLeft:-9}}
                 minimumValue={0}
                 maximumValue={10}
                 step={2}
                 onValueChange={(val)=>setdist(val)}
                 thumbTintColor='#F55633'
                 minimumTrackTintColor="#F55633"
                 maximumTrackTintColor="gray"
                />
            <Text style={{color:'black',alignSelf:'flex-start',fontFamily:'Poppins-Regular',fontSize:15,fontWeight:'600',lineHeight:22}}>Price</Text>
            <Text style={{color:'#A6A6A6',alignSelf:'flex-start',textAlign:'right', width:'90%',fontFamily:'Poppins-Regular',fontSize:12,fontWeight:'600',lineHeight:22}}>$ {price}</Text>
            <Slider
                 style={{width: '95%', height: 40,color:'red',marginLeft:-9}}
                 minimumValue={0}
                 maximumValue={10}
                 step={2}
                 onValueChange={(val)=>setprice(val)}
                 thumbTintColor='#F55633'
                 minimumTrackTintColor="#F55633"
                 maximumTrackTintColor="gray"
                />
            <Text style={{color:'black',alignSelf:'flex-start',fontFamily:'Poppins-Regular',fontSize:15,fontWeight:'600',lineHeight:22}}>Short by</Text>
            <View style={{flexDirection:'column',borderColor:'gray',borderWidth:0,justifyContent:'flex-start'}}>
            <CheckBox
                title='Most Popular'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={short.mp}
                size={24}
                checkedColor='#F55633'
                containerStyle={{justifyContent:'center',alignContent:'center',backgroundColor:'white',borderWidth:0,marginLeft:-9}}
                onIconPress={()=>{setshort({mp:true,clh:false,chl:false,nb:false})}}
            />
            <CheckBox
                title='Cost low to high'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={short.clh}
                size={24}
                checkedColor='#F55633'
                containerStyle={{justifyContent:'center',alignContent:'center',backgroundColor:'white',borderWidth:0,marginLeft:-9}}
                onIconPress={()=>{setshort({mp:false,clh:true,chl:false,nb:false})}}
            />
            <CheckBox
                title='Cost high to low'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={short.chl}
                size={24}
                checkedColor='#F55633'
                containerStyle={{justifyContent:'center',alignContent:'center',backgroundColor:'white',borderWidth:0,marginLeft:-9}}
                onIconPress={()=>{setshort({mp:false,clh:false,chl:true,nb:false})}}
            />
            <CheckBox
                title='Near by'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={short.nb}
                size={24}
                checkedColor='#F55633'
                containerStyle={{justifyContent:'center',alignContent:'center',backgroundColor:'white',borderWidth:0,marginLeft:-9}}
                onIconPress={()=>{setshort({mp:false,clh:false,chl:false,nb:true})}}
            />
            </View>
            <Text style={{color:'black',alignSelf:'flex-start',fontFamily:'Poppins-Regular',fontSize:15,fontWeight:'600',lineHeight:22}}>Rating</Text>
            
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>setRating(1)} >
                <Image source={(rating>0?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRating(2)} >
                <Image source={(rating>1?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRating(3)} >
                <Image source={(rating>2?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRating(4)} >
                <Image source={(rating>3?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setRating(5)} >
                <Image source={(rating>4?(require('../../../statics/star.png')):(require('../../../statics/starw.png')))} style={{marginRight:10}}/> 
                </TouchableOpacity>
                </View>
           </View>
           <View style={{alignSelf:'flex-start', width:'90%',marginVertical:20}}>
            <TouchableOpacity onPress={()=>applyFilter()} style={{width:90,alignSelf:'flex-end'}}>
            <Text style={{color:'#FF3737',width:90,textAlign:'right',fontFamily:'Poppins-Regular',fontSize:15,fontWeight:'600',lineHeight:22}}>Apply Filter</Text>
            </TouchableOpacity>
           </View>
         
           
        </ScrollView>
    )
}

export default Filters;
