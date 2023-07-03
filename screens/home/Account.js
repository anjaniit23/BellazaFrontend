import React,{useEffect,useReducer,useState} from 'react';
import Loader from '../../components/Loader';
import {View,Text, StyleSheet, TouchableOpacity,Image,ActivityIndicator, TextInput} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import DocumentPicker, { types } from 'react-native-document-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import generateToken from '../../components/jwt';
// import Toast from 'react-native-toast-message';

const data = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },

  ];
const Account=({navigation})=>{
    
    const [loading,setIsLoading] = useState(false);
    const [user,setUser]=useState({name:'XYZ',email_mobile:'xyz@gmail.com',gender:'male',age:'20',profile:'https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532',address:' abc Street'})
    const [edit,setEdit] = useState(false);

  
    const handledocument=async()=>{

        try{
            setIsLoading(true);
            const results = await DocumentPicker.pickSingle({
              type: [DocumentPicker.types.images],
            });
            // console.log(results);
            // const token=await generateToken();
            // console.log("Token: ",token);
            // if(token!='error'){
            //     var formdata = new FormData();
            //     const userInfo=await AsyncStorage.getItem('userInfo');
            //     if(userInfo){
            //         const {user_id}=JSON.parse(userInfo);
            //         formdata.append("user_id",user_id);
            //         formdata.append("image", results);
            //         formdata.append('upload_profile_image',1);
            //         var myHeaders = new Headers();
            //         myHeaders.append("authorization", token);
            //         var requestOptions = {
            //             method: 'POST',
            //             headers: myHeaders,
            //             body: formdata,
            //             redirect: 'follow'
            //         };
            //         console.log("REQUEST PTION ------",requestOptions);
            //         fetch("https://admin.bellazza.in/api/api-v2.php", requestOptions)
            //         .then(response => response.json())
            //         .then(result =>{
            //             console.log("Upload image status",result);
            //             setUser({...user,profile:result.file_path});
            //           })

            //     }
            // }
            setIsLoading(false);
            //setUser({...user,profile:results.uri});
                    
        }catch(err){
            setIsLoading(false)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                alert("Didn't select any file.");
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
            console.log("Error: ",err);
        }
                
              
    }
      useEffect(() => {
        //getAccountInfo();
      },[]);
      
    return(
        <KeyboardAwareScrollView contentContainerStyle={{backgroundColor:'white',height:720}}>
             {loading==false?null:<Loader/>}
        <View style={{backgroundColor:'white',paddingHorizontal:25}}>
            <View style={headerStyles.container}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image source={require('../../statics/menu.png')}/>
            </TouchableOpacity>
            <Text style={{color:'black',fontWeight:'600',fontSize:18,fontFamily:'Poppins-Medium',textAlign:'center',justifyContent:'center', lineHeight:26}}>{edit==false?'My Profile':'Edit Profile'}</Text>
           {edit==false?(<MaterialCommunityIcons
            onPress={()=>setEdit(true)}
                    name="pencil"
                    size={25}
                    color={'#FF3737'}
                    />):(<Text>''</Text>)} 
            
            </View>
            <View style={{justifyContent:'space-evenly',marginTop:10,paddingHorizontal:20}}>
                <>
                {edit==false?(
                    <View style={{width:'100%',height:80,alignSelf:'center',marginTop:10,flexDirection:'row',borderBottomColor:'#D9D9D9',borderBottomWidth:1}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{color:'#FF3737',fontSize:24,fontFamily:'Poppins-Medium', fontWeight:'600',lineHeight:36,marginBottom:5}}>Hey {user.name} !</Text>
                            {/* <Text style={{fontFamily:'Poppins-Medium',fontWeight:'500',fontSize:13,color:'#B4B4B4',marginRight:19}}>{user.email_mobile}</Text> */}
                        </View>
                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-end'}}>
                            <Image source={{uri:user.profile}} style={{width:65,height:65,borderRadius:100}}/>
                        </View>
                    </View>
                ):(<View style={{alignSelf:'center',width:120,height:120,borderColor:'black',borderWidth:1,borderRadius:100,alignItems:'center',justifyContent:'center',marginBottom:-20}}>
                    <TouchableOpacity onPress={()=>handledocument()}>
                    <Image source={{uri:user.profile}} style={{width:100,height:100,borderRadius:100}}/>
                    </TouchableOpacity>
                     
                </View>)}
                </>
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Name</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.name}</Text>):(
                        <TextInput
                        style={{width:'100%',borderBottomColor:'#FF3737',borderBottomWidth:1,color: 'black'}}
                        editable={true}
                        placeholderTextColor = "gray"
                        onChangeText={(text)=>{setUser({...user,name:text})}}
                        value={user.name}
                        ></TextInput> 
                    )}
                </View>
                {edit==false?(<>
                    <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                        <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>email_mobile Number/Email Address</Text>
                        <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.email_mobile}</Text>
                    </View></>
                    ):null}
           
                
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Gender</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.gender}</Text>):(
                        <Dropdown
                        //   style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        selectedTextStyle={{fontSize:13,color:'black'}}
                        //   inputSearchStyle={styles.inputSearchStyle}
                        //   iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search..."
                        value={user.gender}
                        onChange={(item) => {
                            setUser({...user,gender:item.label})
                        }}
                       
                        />
                    )}
                </View>
                
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Age</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.age}</Text>):(
                        <TextInput
                        style={{width:'100%',borderBottomColor:'#FF3737',borderBottomWidth:1,color: 'black'}}
                        editable={true}
                        placeholderTextColor = "gray"
                        placeholder=" Address Line 1"
                        onChangeText={(text)=>{setUser({...user,age:text})}}
                        value={user.age}
                        ></TextInput> 
                    )}
                </View>
                
                <View style={{borderBottomColor:'#D9D9D9',borderBottomWidth:(edit==false?1:0),height:80,justifyContent:'space-evenly',marginVertical:5}}>
                    <Text style={{color:'#FF3737',fontFamily:'Poppins-Medium',fontSize:13,fontWeight:'600'}}>Address</Text>
                    {edit==false?(<Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:13,fontWeight:'400'}}>{user.address}</Text>):(
                        <TextInput
                        style={{width:'100%',borderBottomColor:'#FF3737',borderBottomWidth:1,color: 'black'}}
                        editable={true}
                        placeholderTextColor = "gray"
                        placeholder=" Address Line 1"
                        onChangeText={(text)=>{setUser({...user,address:text})}}
                        value={user.address}
                        ></TextInput> 
                    )}
                </View>
                
              
              
            </View>
            {edit==true?(
                <>
                <View style={{marginTop:30,alignSelf:'center',width:'100%',paddingHorizontal:20}}>
                    <Button title="Update" onPress={()=>setEdit(false)} buttonStyle={{width:'100%',borderRadius:10,height:53,alignSelf:'center',backgroundColor:'#EA2424'}}/>
                </View>
                </>
            ):(<Image source={require('../../statics/logout.png')} style={{alignSelf:'center',width:'50%',height:46}}/>)}
        </View>
        </KeyboardAwareScrollView>
    )
}

export default Account;
const headerStyles=StyleSheet.create({
    container:{
      
        width:'100%',
        backgroundColor:'white',
        elevation:0,
        height:50,
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:0,
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'center'
    }
 })