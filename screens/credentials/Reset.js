
import React,{useState,useEffect,useRef} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,TextInput,TouchableOpacity,Image} from 'react-native';
import { Button, Icon } from "react-native-elements";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ResetPassword=({navigation})=>{
    const [loading,setIsLoading]=useState(false);
    const [texti,setTextI]=useState();
    const [msg,setMsg]=useState('');
    const [userd,setUserd]=useState('')

    // const getotp=async()=>{
    //     try{
    //         // setIsLoading(true);
    //         // const token=await generateToken();
    //         // console.log("Token: ",token);
    //         // if(token!='error'){
    //         //     const logRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
        
    //         //         access_key:6808,
    //         //         get_user:1,
    //         //         email_mobile:userd.email_mobile,
    //         //         password:userd.password,
    //         //     },{
    //         //         headers:{
    //         //             authorization:`Bearer ${token}`,
    //         //             'Content-Type':'multipart/form-data',
    //         //         }
    //         //     });
    //         //     console.log(logRes.data);
    //         //     if(logRes.data.error=='false'){
    //         //         await AsyncStorage.setItem('userInfo',JSON.stringify({user_id:logRes.data.data.id,name:logRes.data.data.name,email_mobile:logRes.data.data.email_mobile,gender:logRes.data.data.gender,age:logRes.data.data.age}));
    //         //         setIsLoading(false);
    //         //         navigation.navigate('Home');
    //         //     }
    //         //     //setIsLoading(false);
    //         // }
    //         navigation.navigate('EnterOTP');
    //     }catch(e){
    //         setIsLoading(false);
    //         console.log("Error: ",e);
    //     }
        
    // }
    const getotp=async()=>{
          setIsLoading(true);
        //  const token=await generateToken();
        //  console.log("Token: ",token);
        //  if(token!='error'){
        //      const userInfo=await AsyncStorage.getItem('userInfo');
        //      if(userInfo){
        //          const {email_mobile}=JSON.parse(userInfo);
        //          const fPRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
 
        //              access_key:6808,
        //              forgot_password:1,
        //              email_mobile:userd
        //          },{
        //              headers:{
        //                  authorization:`Bearer ${token}`,
        //                  'Content-Type':'multipart/form-data',
        //              }
        //          });
        //          console.log(fPRes.data);
        //          if(fPRes.data.error=='false'){
        //             setIsLoading(false);
        //              setMsg(fPRes.data.message);
        //              setTimeout(()=>{navigation.navigate('EnterOTP',{email_mobile:userd});},2000)
                     
        //          }
        //          setIsLoading(false);
                 
        //      }
        //  }
        setIsLoading(false);
        navigation.navigate('EnterOTP',{email_mobile:userd});
     }
    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:680}}>
         {loading==false?null:<Loader/>}
        <View style={{backgroundColor:'white'}}>
        <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',marginVertical:40}}/>
        <Text style={{fontFamily:'Poppins-Bold',color:'#FF3737',alignSelf:'center',fontWeight:'600',fontSize:20,marginTop:10}}>{msg}</Text>
            <Text style={{fontFamily:'Poppins-Bold',color:'black',alignSelf:'center',fontWeight:'600',fontSize:20,lineHeight:20,marginTop:30}}>Reset Password</Text>
            <Text style={{...style.tStyle,fontWeight:'500',fontSize:14,lineHeight:21,width:'70%',alignSelf:'center',marginVertical:10}}>Please enter your phone number/email to reset your password</Text>
            <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='phone'?'#F0F0F0':'white'),elevation:(texti=='phone'?5:0),paddingLeft:15,marginTop:30}}
                    multiline={true}
                    editable={true}
                    onChangeText={(text)=>{setUserd(text)}}
                    value={userd}
                    onFocus={()=>setTextI('phone')}
                    placeholderTextColor = "gray"
                    placeholder="  Phone number/Email "
                    
            ></TextInput>
            

            
            <Button title={'Get OTP'} onPress={()=>getotp()} buttonStyle={{width:'80%',height:53,backgroundColor:'#FF3737',alignSelf:'center',borderRadius:10,marginTop:60}} />
            
            
        </View>
        </KeyboardAwareScrollView>
    )
}

export default ResetPassword;
const style=StyleSheet.create({
    tStyle:{
        fontFamily:'Poppins-Medium',
        textAlign:'center',
        color:'#787878'
    }
})