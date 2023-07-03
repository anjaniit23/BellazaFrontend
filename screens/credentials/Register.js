
import React,{useState,useEffect,useRef} from "react";
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text, useColorScheme,View,TextInput,TouchableOpacity,Image} from 'react-native';
import { Button, Icon } from "react-native-elements";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { CheckBox } from 'react-native-elements';
import axios from "axios";
import Loader from "../../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import generateToken from '../../components/jwt';
const Register=({navigation})=>{
    const [loading,setIsLoading]=useState(false);
    const [userd,setUserd]=useState({name:'',email_mobile:'',password:'',gender:'',age:''})
    const [texti,setTextI]=useState();
    const [terms,setTerms]=useState(false);
    const [gender,setGender]=useState('male');

    const registerfn=async()=>{
        try{
            setIsLoading(true);
            // const token=await generateToken();
            // console.log("Token: ",token);
            // if(token!='error'){
            //     const regRes=await axios.post('https://admin.bellazza.in/api/api-v2.php',{
            //         user_signup:1,
            //         access_key:6808,
            //         age:userd.age,
            //         name:userd.name,
            //         email_mobile:userd.email_mobile,
            //         password:userd.password,
            //         gender:gender
            //     },{
            //         headers:{
            //             authorization:`Bearer ${token}`,
            //             'Content-Type':'multipart/form-data',
            //         }
            //     });
            //    // console.log(regRes);
            //     console.log(regRes.data,typeof(regRes.data));
            //     console.log(regRes.data.error);
            //     if(regRes.data.error=='false'){
            //         console.log('hi');
            //         await AsyncStorage.setItem('userInfo',JSON.stringify({user_id:regRes.data.data.user_id,name:regRes.data.data.name,email_mobile:regRes.data.data.email_mobile,gender:regRes.data.data.gender,age:regRes.data.data.age}));
            //         setIsLoading(false);
            //         navigation.navigate('Home');
            //     }
            //     setIsLoading(false);
                
            // }
            await AsyncStorage.setItem('userInfo',JSON.stringify({user_id:userd.email,name:userd.name,email_mobile:userd.email_mobile,gender:userd.gender,age:userd.age}));
            setIsLoading(false);
            navigation.navigate('Home');
        }catch(e){
            setIsLoading(false);
            console.log("Error:",e)
        }
        
        
    }
    return (
        <KeyboardAwareScrollView contentContainerStyle={{height:680}}>
            {loading==false?null:<Loader/>}
        <View style={{backgroundColor:'white',flex:1,justifyContent:'space-evenly'}}>
        <Image source={require('../../statics/Bellazza.png')} style={{alignSelf:'center',marginTop:10}}/>
            <Text style={{fontFamily:'Poppins-Bold',color:'black',alignSelf:'center',fontWeight:'600',fontSize:20,lineHeight:30}}>Join Us</Text>
            <Text style={{...style.tStyle,fontWeight:'500',fontSize:14,lineHeight:21,color:'#787878'}}>Discover your favourite salon near you</Text>
            <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='name'?'#F0F0F0':'white'),elevation:(texti=='name'?5:0),paddingLeft:15,marginTop:30}}
                    multiline={true}
                    editable={true}
                    onChangeText={(text)=>{setUserd({...userd,name:text})}}
                    value={userd.name}
                    onFocus={()=>setTextI('name')}
                    placeholderTextColor = "gray"
                    placeholder="  Name"
            ></TextInput>
             <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='phone'?'#F0F0F0':'white'),elevation:(texti=='phone'?5:0),paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    onChangeText={(text)=>{setUserd({...userd,email_mobile:text})}}
                    value={userd.email_mobile}
                    onFocus={()=>setTextI('phone')}
                    placeholderTextColor = "gray"
                    placeholder="  Phone/email "
            ></TextInput>
             <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='password'?'#F0F0F0':'white'),elevation:(texti=='password'?5:0),paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    onChangeText={(text)=>{setUserd({...userd,password:text})}}
                    value={userd.password}
                    onFocus={()=>setTextI('password')}
                    placeholderTextColor = "gray"
                    placeholder="  Password"
            ></TextInput>
             <TextInput
                    style={{width:'80%',height:43,borderBottomWidth:1,borderRadius:8,borderColor:'gray', color: 'black',alignSelf:'center',backgroundColor:(texti=='age'?'#F0F0F0':'white'),elevation:(texti=='age'?5:0),paddingLeft:15}}
                    multiline={true}
                    editable={true}
                    onChangeText={(text)=>{setUserd({...userd,age:text})}}
                    value={userd.age}
                    onFocus={()=>setTextI('age')}
                    placeholderTextColor = "gray"
                    placeholder="  Age"
            ></TextInput>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'80%',alignSelf:'center',alignItems:'center'}}>
                <Text style={{...style.tStyle,fontWeight:'500',fontSize:13}}>Gender</Text>
                <TouchableOpacity onPress={()=>setGender('male')}>
                <View style={{backgroundColor:(gender=='male'?'#FF3737':'white'),borderRadius:100,width:40,height:40,justifyContent:'center',alignItems:'center',borderColor:'#FF3737',borderWidth:1}}>
                   
                        {gender=='male'?<Image source={require('../../statics/malew.png')} />:<Image source={require('../../statics/male.png')} />}
                 
                </View>
                </TouchableOpacity>
            
                <Text style={{fontWeight:'500',fontSize:13,lineHeight:20,...style.tStyle}}>or</Text>
                <TouchableOpacity onPress={()=>setGender('female')}>
                <View style={{backgroundColor:(gender=='female'?'#FF3737':'white'),borderRadius:100,width:40,height:40,justifyContent:'center',alignItems:'center',borderColor:'#FF3737',borderWidth:1}}>
                  
                        {gender=='female'?<Image source={require('../../statics/femalew.png')}/>:<Image source={require('../../statics/female.png')}/>}
                
                </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',width:'80%'}}>
            <CheckBox
                center
                title=''
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={terms}
                size={24}
                checkedColor='#F55633'
                containerStyle={{alignSelf:'center',justifyContent:'center',alignContent:'center'}}
                onIconPress={()=>{setTerms(!terms)}}
                />
                <Text style={{fontSize:10,fontWeight:'500',lineHeight:15,...style.tStyle}}>I Agree with the <Text style={{color:'#FF3737'}}>Term of Service</Text> & <Text style={{color:'#FF3737'}}>Privacy Policy</Text></Text>
            </View>
            <Button  onPress={()=>registerfn()} title={'Sign Up'} buttonStyle={{width:'80%',height:53,backgroundColor:'#FF3737',alignSelf:'center',borderRadius:10}} />
            <Text style={{textAlign:'center'}}> or </Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:'80%',alignSelf:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../../statics/google.png')}/>
                    <Text style={{color:'black',marginLeft:5}}>Google</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../statics/fb.png')}/>
                    <Text style={{color:'black',marginLeft:5}}>facebook</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={{textAlign:'center',fontWeight:'500',fontSize:13,lineHeight:19,...style.tStyle,color:'#EA2424'}}>Have an account ? Log in </Text></TouchableOpacity>

        </View>
        </KeyboardAwareScrollView>
    )
}

export default Register;
const style=StyleSheet.create({
    tStyle:{
        fontFamily:'Poppins-Medium',
        textAlign:'center',
        color:'black'
    }
})