import React, { useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const CardScroll=({source,nav})=>{
    return(
        <TouchableOpacity onPress={()=>nav.navigate('MoviePage')}>
            <Image style={{marginHorizontal:20,width:143,height:192}} source={source}/>
        </TouchableOpacity>
    )
}
const BannerScroll=({nav,source})=>{
    return(
        <TouchableOpacity onPress={()=>nav.navigate('MoviePage')}>
              <Image source={source} style={{width:'90%',height:165,alignSelf:'center'}}/>
        </TouchableOpacity>
    )
}
const FavouriteContent=({navigation})=>{
    const [category,setCategory]=useState('All');
    const [categ2,setCateg2]=useState('Popular')
    return(
        <ScrollView style={{backgroundColor:'black',height:500,flex:1}}>
           <Header nav={navigation} />
           <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
            <Text onPress={()=>setCategory('All')} style={{color:(category=='All'?'#A900BD':'white'),fontFamily:'Poppins-Regular'}}>All</Text>
            <Text onPress={()=>setCategory('Movies')} style={{color:(category=='Movies'?'#A900BD':'white'),fontFamily:'Poppins-Regular'}}>Movies</Text>
            <Text onPress={()=>setCategory('TVShows')} style={{color:(category=='TVShows'?'#A900BD':'white'),fontFamily:'Poppins-Regular'}}>TV Shows</Text>
            <Text onPress={()=>setCategory('WebSeries')} style={{color:(category=='WebSeries'?'#A900BD':'white'),fontFamily:'Poppins-Regular'}}>Web Series</Text>
           </View>
           <View style={{width:'90%',height:47,backgroundColor:'#352449',borderColor:'#6D44B8',borderWidth:1,alignSelf:'center',marginTop:20,borderRadius:10,flexDirection:'row'}}>
                <View style={{backgroundColor:(categ2=='Popular'?'#6644B8':'transparent'),width:'33%',height:47,borderRadius:10,alignItems:'center',justifyContent:'center'}} >
                    <Text onPress={()=>setCateg2('Popular')} style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center',fontSize:15,fontWeight:'500'}}>Popular</Text>
                </View>
                <View style={{backgroundColor:(categ2=='Trending'?'#6644B8':'transparent'),width:'33.3%',height:47,borderRadius:10,alignItems:'center',justifyContent:'center'}} >
                    <Text onPress={()=>setCateg2('Trending')} style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center',fontSize:15,fontWeight:'500'}}>Trending</Text>
                </View>
                <View style={{backgroundColor:(categ2=='Soon'?'#6644B8':'transparent'),width:'33.5%',height:47,borderRadius:10,alignItems:'center',justifyContent:'center'}} >
                    <Text onPress={()=>setCateg2('Soon')} style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center',fontSize:15,fontWeight:'500'}}>Soon</Text>
                </View>
           </View>
           <View style={{height:230,width:'100%',justifyContent:'center',alignItems:'center'}}>
           <Swiper
                style={styles.wrapper}
                activeDotColor="red"
                activeDot={<View style={{backgroundColor: '#A900BD', width: 25, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                dot={<View style={{backgroundColor: '#4E4060' , width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            >
                <View style={styles.slide1}>
                    <BannerScroll source={require('../../statics/poster.png')} nav={navigation}/>
                </View>
                <View style={styles.slide2}>
                    <BannerScroll source={require('../../statics/poster.png')} nav={navigation}/>
                </View>
                <View style={styles.slide3}>
                     <BannerScroll source={require('../../statics/poster.png')} nav={navigation}/>
                </View>
                <View style={styles.slide4}>
                     <BannerScroll source={require('../../statics/poster.png')} nav={navigation}/>
                </View>
            </Swiper>
           </View>
           <View style={{height:45,marginBottom:20}}>
            <ScrollView  horizontal={true} >
                <View style={{borderRadius:5,backgroundColor:'#4E4060',width:101,marginHorizontal:20,height:40,justifyContent:'center'}}>
                    <Text style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center'}}>Action</Text>
                </View>
                <View style={{borderRadius:5,backgroundColor:'#4E4060',width:101,marginHorizontal:20,height:40,justifyContent:'center'}}>
                    <Text style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center'}}>Thriller</Text>
                </View>
                <View style={{borderRadius:5,backgroundColor:'#4E4060',width:101,marginHorizontal:20,height:40,justifyContent:'center'}}>
                    <Text style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center'}}>Comedy</Text>
                </View>
                <View style={{borderRadius:5,backgroundColor:'#4E4060',width:101,marginHorizontal:20,height:40,justifyContent:'center'}}>
                    <Text style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center'}}>Horror</Text>
                </View>
                <View style={{borderRadius:5,backgroundColor:'#4E4060',width:101,marginHorizontal:20,height:40,justifyContent:'center'}}>
                    <Text style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center'}}>Sci-fi</Text>
                </View>
                <View style={{borderRadius:5,backgroundColor:'#4E4060',width:101,marginHorizontal:20,height:40,justifyContent:'center'}}>
                    <Text style={{color:'white',fontFamily:'Poppins-Regular',textAlign:'center'}}>Drama</Text>
                </View>
            </ScrollView>
           </View>
          
           <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
            <Text style={{fontFamily:'Poppins-Regular',color:'white'}}>Curated for you</Text>
            <Icon name="chevron-right"
                size={24}
                color='white'
                />
           </View>
           <View style={{height:194}}>
            <ScrollView horizontal={true} >
                <CardScroll nav={navigation} source={require('../../statics/movImg.png')}/>
                <CardScroll nav={navigation} source={require('../../statics/movImg.png')}/>
                <CardScroll nav={navigation} source={require('../../statics/movImg.png')}/>
                <CardScroll nav={navigation} source={require('../../statics/movImg.png')}/>
                <CardScroll nav={navigation} source={require('../../statics/movImg.png')}/>
              
            </ScrollView>
           </View>
        </ScrollView>
    )
}

export default FavouriteContent;