
import React,{useState,useEffect,useRef} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,TextInput,TouchableOpacity,Image} from 'react-native';
import { Button } from "react-native-elements";
import OTPTextView from 'react-native-otp-textinput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import Loader from '../../components/Loader';
import generateToken from '../../components/jwt';

const EnterOTP=({navigation,route})=>{
    const otpInputRef = useRef(null);
    const [loading,setIsLoading]=useState(false);
    const [val,setVal]=useState('');
    const [msg,setMsg]=useState('');
    const onPressEnterOTP=async()=>{
        try{
            setIsLoading(true);
           //navigation.navigate('CP')
            // const token=await generateToken();
            // console.log("Token: ",token);
            // if(token!='error'){
            //     const userInfo=await AsyncStorage.getItem('userInfo');
            //     if(userInfo){
            //         const {email_mobile}=JSON.parse(userInfo);
            //         const rPRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{

            //             access_key:6808,
            //             verify_otp:1,
            //             email_mobile:route.params.email_mobile,
            //             reset_token:val
            //         },{
            //             headers:{
            //                 authorization:`Bearer ${token}`,
            //                 'Content-Type':'multipart/form-data'
            //             }
            //         });
            //         console.log(rPRes);
            //         if(rPRes.data.error=='false'){
            //             setIsLoading(false);
            //             navigation.navigate('CP',{email_mobile:route.params.email_mobile});
                        
            //         }
            //     }
            // }
            navigation.navigate('CP',{email_mobile:route.params.email_mobile});
        }catch(e){
            setIsLoading(false);
            console.log("Error: ",e);
        }
    }

    useEffect(()=>{
        //dispatchOTPfn();
    },[])

    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:480}}>
        {loading==false?null:<Loader/>}
        <View style={{backgroundColor:'white',flex:1,justifyContent:'space-evenly'}}>
          
        <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',marginTop:10}}/>
            <Text style={{fontFamily:'Poppins-Bold',alignSelf:'center',color:'black',fontWeight:'600',fontSize:20,lineHeight:30}}>Enter OTP</Text>
            <Text>{msg}</Text>
            <Text style={{...style.tStyle,fontWeight:'500',fontSize:14,lineHeight:21,width:'60%',alignSelf:'center'}}>Please enter the OTP that you have recieved on your phone number</Text>
                <OTPTextView 
                    inputCount={4}
                    ref={e => {otpInputRef.current=val;}}
                    handleTextChange={(e)=>{setVal(e);}}
                    containerStyle={{color:'white',width:'80%',alignSelf:'center'}}
                    textInputStyle={{ borderWidth: 2, borderRadius:8, borderBottomWidth: 2, marginTop:0 }}
                    tintColor="#FF3737"
                    offTintColor="#FF3737"
                />
    
            
           
                <Button onPress={()=>{onPressEnterOTP()}} buttonStyle={{width:'70%', borderRadius:15,alignSelf:'center',height:58,backgroundColor:'#EA2424'}} title="Enter OTP"/>
                {/* <TouchableOpacity onPress={()=>navigation.navigate('EnterOTP',{email_mobile:route.params.email_mobile})}><Text style={{fontWeight:'600',fontSize:13,lineHeight:18,fontFamily:'Poppins-Regular',alignSelf:'center',color:'#EA2424'}}>Didn’t get the OTP?  Send Again</Text></TouchableOpacity> */}
    
          
        </View>
        </KeyboardAwareScrollView>
    )
}

export default EnterOTP;
const style=StyleSheet.create({
    tStyle:{
        fontFamily:'Poppins-Regular',
        textAlign:'center',
        color:'black'
    }
})