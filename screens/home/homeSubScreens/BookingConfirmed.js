import React, {useEffect, useState} from "react";
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button,Icon } from "react-native-elements";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ServiceScroll=({sname,rating,price,desc})=>{

    return(
        <View>

                <View  style={{flexDirection:'row', borderRadius:8,marginTop:20,height:95, width:'100%',alignSelf:'center'}}>
                <View style={{flex:2,justifyContent:'flex-start'}}>
                        <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:18,lineHeight:27,fontWeight:'600'}}>{sname}</Text>
                        <Text style={{color:'#ACACAC',fontFamily:'Poppins-Medium',fontSize:9,lineHeight:13,fontWeight:'500',marginTop:4}}>Rating</Text>
                        <View style={{flexDirection:'row'}}>
                        <Image source={require('../../../statics/star.png')} style={{marginRight:10,marginTop:5}} />
                        <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:9,lineHeight:13,fontWeight:'500',marginTop:4}}>{rating} out of 5</Text>
                        </View>
                        <Text style={{maxWidth:250,overflow:'hidden',color:'#D4D4D4',position:'absolute',top:'85%'}}>----------------------------------------------------</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-start'}}>
                    <Image source={require('../../../statics/banner.png')} style={{width:95,height:95,borderRadius:6,alignSelf:'flex-end'}}/>
                </View>
                </View>
   
            
        </View>
       
    )
}

const BookingConfirmed=({navigation})=>{
    const [time,setTime]=useState();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);

    const slotBooking=async()=>{
        try{
            const token=await generateToken({name:'anjnai'});
            console.log("Token: ",token);
            if(token!='error'){
                const userInfo=await AsyncStorage.getItem('userInfo');
                if(userInfo){
                    const {user_id}=JSON.parse(userInfo);
                    const accRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
            
                        access_key:6808,
                        slot_booking:1,
                        vendor_id:'1',
                        user_id:user_id,
                        total_price:'500',
                        appointment_date:'date',
                        status:'upcoming',
                        slots:['10:45','11:00'],
                        cat_id:['7','10','19'],
                        products:[{product_id:'254',cat_id:'10'}],
                        booking_for:{
                            name:"anuj",
                            mobile:"9118840397",
                            age:"23"
                        },
                    },{
                        headers:{
                            authorization:token
                        }
                    });
                    console.log(accRes);
                    if(accRes.data.error==false){
                        // let userd={name:accRes.data.data.name,email_mobile:accRes.data.data.email_mobile,gender:accRes.data.data.gender,age:accRes.data.data.age,profile:accRes.data.data.profile,address:''};
                        // setUser({...userd});
                    }
                }
            }
        }catch(e){
            console.log("Error: ",e);
        }
    }
    useEffect(()=>{
        //slotBooking();
        navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" }});
        return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    },[navigation])

    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={{flex:1.4,backgroundColor:'#FF3737',borderBottomRightRadius:100,borderBottomLeftRadius:100,alignItems:'center',justifyContent:'center',width:'100%',alignSelf:'center'}}>
                <Image source={require('../../../statics/checked.png')} style={{width:52,height:52}}/>
                <Text style={{fontFamily:'Poppins-Medium',fontSize:17,fontWeight:'700',lineHeight:25,color:'white'}}>Booking Confirmed</Text>
                <Text style={{fontFamily:'Poppins-Medium',fontSize:11,fontWeight:'500',lineHeight:16,color:'white',marginTop:10}}>ID : 2345676534</Text>
                <Text style={{fontFamily:'Poppins-Medium',fontSize:11,fontWeight:'500',lineHeight:16,color:'white',marginTop:10,width:'70%',textAlign:'center'}}>Confermation email and SMS has been sent to your registered details</Text>
                
            </View>
            <View style={{flex:2,paddingHorizontal:25,marginTop:30}}>
                <ServiceScroll 
                
                    sname={'Loreal Salon & Spa'}
                    rating={'4.5'}
                    price={'150'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
                />
                <View style={{position:'absolute',top:'80%',width:'100%',alignSelf:'center'}}>
                    <Button title={'Done'} onPress={()=>{
                       // console.log(navigation.popToTop());
                        navigation.popToTop();
                    }} buttonStyle={{backgroundColor:'#FF3737',height:57,borderRadius:10,width:'100%'}} titleStyle={{color:'white'}}/>
                </View>
                <View style={{width:'100%',height:58,backgroundColor:'#E8E8E8',borderRadius:10,marginTop:50,alignItems:'center',flexDirection:'row'}}>
                    <View style={{flexDirection:'row',flex:1,paddingLeft:25,alignItems:'center'}}>
                        <MaterialCommunityIcons
                            name="calendar-clock"
                            size={25}
                            color={'#FF3737'}
                            style={{marginRight:10}}
                        />
                        <Text style={{fontFamily:'Poppins-Bold',fontSize:11,fontWeight:'600',lineHeight:16,color:'black'}}>Time & Date</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'column',paddingRight:25, alignItems:'flex-end'}}>
                        <Text style={{fontFamily:'Poppins-Medium',fontSize:10,fontWeight:'500',lineHeight:15,color:'#787878'}}>26 Jan 2019</Text>
                        <Text style={{fontFamily:'Poppins-Medium',fontSize:12,fontWeight:'600',lineHeight:18,color:'black'}}>12:43  PM</Text>
                    </View>
                </View>
            
            </View>
        </View>
    )
}

export default BookingConfirmed;