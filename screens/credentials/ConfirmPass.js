
import React,{useState,useEffect,useRef} from "react";
import {Modal,StyleSheet,Text,TouchableWithoutFeedback,View,TextInput,TouchableOpacity,Image} from 'react-native';
import { Button, Icon } from "react-native-elements";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import Loader from '../../components/Loader';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfirmPass=({navigation})=>{
    const [loading,setIsLoading]=useState(false);
    const [texti,setTextI]=useState();
    const [msg,setMsg]=useState('');
    const [modal,setModal]=useState(false);
    const [userd,setUserd]=useState({p:'',cp:''})

    const resetpass=async()=>{
        try{
            setModal(true);
            // const token=await generateToken();
            // console.log("Token: ",token);
            // if(token!='error'){
            //     const userInfo=await AsyncStorage.getItem('userInfo');
            //     if(userInfo){
            //         const {email_mobile}=JSON.parse(userInfo);
            //         if(userd.p==userd.cp){
            //             const rPRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{

            //                 access_key:6808,
            //                 reset_password:1,
            //                 email_mobile:route.params.email_mobile,
            //                 password:userd.p
            //             },{
            //                 headers:{
            //                     authorization:`Bearer ${token}`,
            //                     'Content-Type':'multipart/form-data'
            //                 }
            //             });
            //             console.log(rPRes);
            //             if(rPRes.data.error=='false'){
            //                 setIsLoading(false);
                           
                            
            //             }
            //         }else{
            //             setMsg("Password and confirm Password doesn't match!");
            //             console.log("Password and confirm Password doesn't match!")
            //         }
                    
            //     }
            // }
            setIsLoading(false);
        }catch(e){
            setIsLoading(false);
            console.log("Error: ",e);
        }
        
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:680}}>
         {loading==false?null:<Loader/>}
         <Modal 
            animationType="fade"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setShowModal(false)
            }}
            >
            <TouchableOpacity 
                    style={{height:'100%',backgroundColor:'rgba(52, 52, 52, 0.8)'}}
                    activeOpacity={1} 
                    onPressOut={() => {setShowModal(false)}}
                >
                    <TouchableWithoutFeedback>
                    <View style={{backgroundColor:'white',position:'absolute',top:'25%',borderRadius:15,justifyContent:'space-evenly',width:'80%',alignSelf:'center',padding:30}}>
                        <Image style={{alignSelf:'center',width:65,height:65}} source={require('../../statics/tick.png')}/>
                        <Text style={{fontFamily:'Poppins-Medium',fontSize:16,fontWeight:'600',lineHeight:24,alignSelf:'center',width:'80%',textAlign:'center',color:'#FF3737',marginTop:15}}>Your password has been changed successfully</Text>    
                        <Button onPress={()=>{setModal(false);navigation.navigate('Login')}} title={'Login'} buttonStyle={{backgroundColor:'#FF3737',width:103,height:40,borderRadius:10,alignSelf:'center',marginTop:30}} titleStyle={{color:'white'}}/>
                                
                    </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>  
            
            </Modal>
        <View style={{backgroundColor:'white'}}>
        <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',marginVertical:40}}/>
            <Text style={{fontFamily:'Poppins-Bold',color:'black',alignSelf:'center',fontWeight:'600',fontSize:20,lineHeight:30,marginTop:30}}>Enter new password</Text>
            <Text style={{...style.tStyle,fontWeight:'500',fontSize:14,lineHeight:21,width:'70%',alignSelf:'center',marginVertical:10}}>Please enter your new password</Text>
            <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='p'?'#F0F0F0':'white'),elevation:(texti=='phone'?5:0),paddingLeft:15,marginTop:30}}
                    multiline={true}
                    editable={true}
                    onChangeText={(text)=>{setUserd({...userd,p:text})}}
                    value={userd.p}
                    onFocus={()=>setTextI('p')}
                    placeholderTextColor = "gray"
                    placeholder="  Password "
            ></TextInput>
            <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='cp'?'#F0F0F0':'white'),elevation:(texti=='phone'?5:0),paddingLeft:15,marginTop:30}}
                    multiline={true}
                    editable={true}
                    onChangeText={(text)=>{setUserd({...userd,cp:text})}}
                    value={userd.cp}
                    onFocus={()=>setTextI('cp')}
                    placeholderTextColor = "gray"
                    placeholder="  Confirm password "
            ></TextInput>
            

            
            <Button title={'Reset'} onPress={()=>resetpass()} buttonStyle={{width:'80%',height:53,backgroundColor:'#FF3737',alignSelf:'center',borderRadius:10,marginTop:60}} />
            {msg!=''?<Text style={{fontFamily:'Poppins-Medium',fontSize:12,fontWeight:'600',lineHeight:27,color:'#FF3737',marginTop:10,alignSelf:'center'}}>{msg}</Text>:null}
            
        </View>
        </KeyboardAwareScrollView>
    )
}

export default ConfirmPass;
const style=StyleSheet.create({
    tStyle:{
        fontFamily:'Poppins-Medium',
        textAlign:'center',
        color:'#787878'
    }
})