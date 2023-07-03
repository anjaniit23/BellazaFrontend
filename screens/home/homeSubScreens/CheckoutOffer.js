import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, TouchableOpacity,ScrollView,TextInput,Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements';
import Header from '../../../components/Header';
const CheckoutOffer=({navigation})=>{


    const [tips,setTips]=useState([5,10,20,'custom']);
    const [currentTip,setCurrentTip]=useState(10);
    const [additionalTip,setAdditionalTip]=useState();
    const [bse,setBse]=useState({name:'',phone:'',age:'',show:false})
    const [showModal,setShowModal]=useState(false);
    const Card=({name,time,price,duration})=>{
        return(
            <>
           
           <View style={{width:'100%',height:70,alignSelf:'center',marginVertical:10,borderRadius:10,paddingHorizontal:10,flexDirection:'row',borderColor:'#E3E3E3',borderWidth:1}}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{color:'black',fontSize:13,fontWeight:'600',lineHeight:19.5}}>{name} </Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:9,color:'#748AF9',marginRight:15}}>₹ {price}/-</Text>
                        <Text style={{fontFamily:'Poppins-Regular',fontWeight:'500',fontSize:9,color:'black'}}>{duration}</Text>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                    <Button title={'Remove'} titleStyle={{color:'#B4B4B4',marginTop:-2,fontSize:12}} buttonStyle={{ borderRadius:6,width:92,height:33,borderColor:'#B4B4B4',borderWidth:1,backgroundColor:'white'}}/>
                </View>
            </View>
            </>
        )
    }
    const setCurrentTipfn=(tip)=>{
        console.log(tip);
        setCurrentTip(tip);
    }
 
    const Tips=({setCurrentTipfn, tip})=>{
        return (
            <TouchableOpacity onPress={()=>setCurrentTipfn(tip)} >
                <View style={{borderRadius:5,backgroundColor:(tip==currentTip?'#FF3737':'white'),borderColor:"#A6A6A6",borderWidth:(tip==currentTip?0:1),width:65,marginRight:30,height:30,justifyContent:'center'}}>
                    <Text style={{fontFamily:'Poppins-Regular',textAlign:'center',color:(tip==currentTip?'white':'black')}}>{tip!=='custom'?(`₹ ${tip}/-`):(tip)}</Text>
                </View>
            </TouchableOpacity>
           
        )
    }    
    const onCLickbse=()=>{
        setBse({...bse,show:true})
        setShowModal(false)
    }

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      }, [navigation]);
      
    return(
        <ScrollView style={{backgroundColor:'white',flex:1}}>
            <Modal 
                animationType='slide'
                transparent={true}
                visible={showModal}
                >
                    <View style={{backgroundColor:'white',position:'absolute',top:'25%',borderRadius:15,justifyContent:'space-evenly',width:'80%',alignSelf:'center',padding:30,elevation:600}}>
                        <Text style={{fontFamily:'Poppins-Medium',fontSize:18,fontWeight:'600',lineHeight:27,color:'#FF3737'}}>Booking For </Text>
                        <View style={{marginTop:20}}>
                            <TextInput 
                                style={{borderBottomColor:'#D9D9D9',borderBottomWidth:1,color:'black'}}
                                editable={true}
                                value={bse.name}
                                onChangeText={(text)=>{setBse({...bse,name:text})}}
                                placeholder="Name"
                                ></TextInput>
                            <TextInput 
                                style={{borderBottomColor:'#D9D9D9',borderBottomWidth:1,color:'black'}}
                                editable={true}
                                value={bse.phone}
                                onChangeText={(text)=>{setBse({...bse,phone:text})}}
                                placeholder="Phone Number"
                                ></TextInput>
                            <TextInput 
                                style={{borderBottomColor:'#D9D9D9',borderBottomWidth:1,color:'black'}}
                                editable={true}
                                value={bse.age}
                                onChangeText={(text)=>{setBse({...bse,age:text})}}
                                placeholder="Age"
                                ></TextInput>
                          <Button onPress={()=>{onCLickbse();}} title={'Add'} buttonStyle={{backgroundColor:'#FF3737',width:93,height:40,borderRadius:10,alignSelf:'center',marginTop:30}} titleStyle={{color:'white'}}/>
                        </View>
                        

                    </View>
                </Modal>
            <Text style={{color:'black',fontWeight:'600',fontSize:18,fontFamily:'Poppins-Medium',textAlign:'center',justifyContent:'center', lineHeight:26,marginTop:10}}>Checkout</Text>
            <View style={{paddingHorizontal:25,marginBottom:30}}>

          
            <Text style={{fontFamily:'Poppins-Regular',color:'#FF3737',fontSize:20,lineHeight:22.5,marginTop:20,fontWeight:'600'}}>Loreal Salon & Spa</Text>
            <View style={{marginBottom:30,marginTop:20}}>
            <Card name={'Haircut(M)'} time={'05:30 PM'} price={150} duration={'15 min'} />
            <Card name={'Haircut(M)'} time={'05:30 PM'} price={150} duration={'15 min'}/>
            </View>
            <View style={{width:'100%',height:145,alignSelf:'center',backgroundColor:'#F3F3F3',padding:15,justifyContent:'space-evenly',borderRadius:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Subtotal</Text>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#787878',fontSize:12,lineHeight:18,fontWeight:'500'}}>₹ 500/-</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Booking Charge</Text>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#787878',fontSize:12,lineHeight:18,fontWeight:'500'}}>₹ 50/-</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Discount</Text>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#FF3737',fontSize:12,lineHeight:18,fontWeight:'500'}}>-₹ 50/-</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Tip for professional</Text>
                        <Text style={{fontFamily:'Poppins-Medium',color:'black',fontSize:12,lineHeight:18,fontWeight:'500'}}>₹ 10/-</Text>
                    </View>
                    <View style={{borderBottomColor:'#DEDEDE',borderBottomWidth:1}}></View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'Poppins-Medium',color:'#464545',fontSize:14,lineHeight:21,fontWeight:'600'}}>Payable Amount</Text>
                        <Text style={{fontFamily:'Poppins-Bold',color:'black',fontSize:12,lineHeight:18,fontWeight:'600'}}>₹ 550/-</Text>
                    </View>
            </View>
            <Text style={{alignSelf:'flex-end',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'500',lineHeight:19.5,color:'#748AF9'}}>Have a coupon ?</Text>
            <Text style={{alignSelf:'flex-start',fontFamily:'Poppins-Medium',fontSize:14,fontWeight:'500',lineHeight:19.5,color:'black'}}>Add a tip to thank the Professional</Text>
            <View style={{height:45,marginTop:20}}>
            <ScrollView  horizontal={true} contentContainerStyle={{alignItems:'flex-start'}} >
                {tips && tips.map((tip,index)=>{return <Tips key={index} setCurrentTipfn={setCurrentTipfn} tip={tip}/>})}
            </ScrollView>
            </View>
            {currentTip=='custom'?(<>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:10,width:'100%',justifyContent:'space-evenly'}}>
                    <Text>₹ </Text>
                    <TextInput 
                        style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderBottomColor:'gray', color: 'black',alignSelf:'center',backgroundColor:'white',paddingLeft:15}}
                        value={additionalTip} 
                        onChangeText={(text)=>setAdditionalTip(text)}
                        multiline={true}
                        editable={true}
                        placeholderTextColor = "gray"
                        placeholder=""
                        ></TextInput>
                    <TouchableOpacity onPress={()=>{setTips([additionalTip,...tips]);setCurrentTip(additionalTip)}}>
                        <Text style={{color:'#FF3737',fontSize:12,fontWeight:'500',lineHeight:18,fontFamily:'Poppins-Medium'}}>Add</Text>
                    </TouchableOpacity>
                   
                </View>
            </>):null}
            
           
            {bse && (bse.show==true)?(
                    <View style={{marginVertical:20}}>
                        <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'500',lineHeight:19.5,marginVertical:5}}>Booked for :</Text>
                        <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:11,fontWeight:'400',lineHeight:16.5,marginVertical:5}}>Name :     <Text style={{color:'#464545',fontFamily:'Poppins-Medium',fontSize:11,fontWeight:'400',lineHeight:16.5}}>{bse.name}</Text></Text>
                        <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:11,fontWeight:'400',lineHeight:16.5,marginVertical:5}}>Phone :     <Text style={{color:'#464545',fontFamily:'Poppins-Medium',fontSize:11,fontWeight:'400',lineHeight:16.5}}>{bse.phone}</Text></Text>
                    </View>
            ):(
                <TouchableOpacity onPress={()=>setShowModal(true)}>
                <Text style={{alignSelf:'center',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'500',lineHeight:19.5,color:'#FF3737',marginBottom:15,marginTop:20}}>Booking for somesone else ?</Text>
                </TouchableOpacity>
            )}
           
            <Button title={'Checkout'} onPress={()=>navigation.navigate('Checkout2')} buttonStyle={{backgroundColor:'#FF3737',width:309,height:57,borderRadius:10,width:'100%'}} titleStyle={{color:'white'}}/>
       
           </View>
        </ScrollView>
    )
}

export default CheckoutOffer;